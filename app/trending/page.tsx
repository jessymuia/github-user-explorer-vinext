// app/trending/page.tsx
import type { Metadata } from "next";
import { getTrendingRepos } from "@/lib/github";
import { GitHubRepo } from "@/app/types/github";
import { Star, GitFork, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Trending Repositories — GitHub Explorer",
  description: "Top starred GitHub repositories right now",
  openGraph: { images: [{ url: "/og-image.png" }] },
};

export default async function TrendingPage() {
  let repos: GitHubRepo[] = [];

  try {
    const result = await getTrendingRepos();
    repos = result?.items || [];
  } catch {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Failed to load trending repos. Try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Trending Repositories</h1>
        <p className="text-slate-500">Most starred GitHub repositories right now</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs text-slate-400 mb-1">{repo.owner?.login}</p>
                <h3 className="font-semibold text-slate-900 truncate">{repo.name}</h3>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            </div>

            {repo.description && (
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{repo.description}</p>
            )}

            <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5" /> {repo.stargazers_count.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5" /> {repo.forks_count.toLocaleString()}
              </span>
            </div>

            {repo.topics?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100">
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
