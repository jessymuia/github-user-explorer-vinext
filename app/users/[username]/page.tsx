// app/users/[username]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getUser, getUserRepos } from "@/lib/github";
import { GitHubUser, GitHubRepo } from "@/app/types/github";
import {
  Star, GitFork, ExternalLink, MapPin, Building2,
  Link2, ArrowLeft, Users, BookOpen, Calendar
} from "lucide-react";
import BookmarkButton from "@/components/BookmarkButton";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  try {
    const user: GitHubUser = await getUser(username);
    return {
      title: `${user.name ?? user.login} (@${user.login}) — GitHub`,
      description: user.bio ?? `GitHub profile of ${user.login}`,
      openGraph: { images: [{ url: user.avatar_url }] },
    };
  } catch {
    return { title: "User not found — GitHub Explorer" };
  }
}

export default async function UserPage({ params }: Props) {
  const { username } = await params;

  let user: GitHubUser;
  let repos: GitHubRepo[] = [];

  try {
    user = await getUser(username);
  } catch {
    notFound();
  }

  try {
    repos = await getUserRepos(username);
  } catch {
    repos = [];
  }

  const topRepos = repos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition mb-10 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to search
      </Link>

      {/* Profile Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={110}
            height={110}
            priority
            className="rounded-2xl flex-shrink-0 ring-2 ring-slate-200"
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold mb-1 text-slate-900">{user.name || user.login}</h1>
            <p className="text-slate-500 text-lg mb-1">@{user.login}</p>
            <p className="text-slate-400 text-xs mb-3 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Member since {memberSince}
            </p>
            {user.bio && (
              <p className="text-slate-600 text-base mb-4 leading-relaxed">{user.bio}</p>
            )}
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              {user.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {user.location}
                </span>
              )}
              {user.company && (
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" /> {user.company}
                </span>
              )}
              {user.blog && (
                <a
                  href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-600 transition"
                >
                  <Link2 className="w-4 h-4" /> {user.blog}
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition"
            >
              <ExternalLink className="w-4 h-4" /> GitHub Profile
            </a>
            <BookmarkButton
              bookmark={{
                type: "user",
                id: user.id,
                login: user.login,
                avatar_url: user.avatar_url,
                html_url: user.html_url,
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Followers", value: user.followers?.toLocaleString() ?? "0", icon: <Users className="w-4 h-4" /> },
          { label: "Following", value: user.following?.toLocaleString() ?? "0", icon: <Users className="w-4 h-4" /> },
          { label: "Repositories", value: user.public_repos?.toLocaleString() ?? "0", icon: <BookOpen className="w-4 h-4" /> },
          { label: "Total Stars", value: totalStars.toLocaleString(), icon: <Star className="w-4 h-4" /> },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-2">
              {icon} {label}
            </div>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      {/* View All Repos Button */}
      <Link
        href={`/users/${username}/repos`}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition mb-8 shadow-sm"
      >
        <BookOpen className="w-4 h-4" /> View All Repositories
      </Link>

      {/* Top Repos */}
      {topRepos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-slate-900">Top Repositories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topRepos.map((repo) => (
              <Link
                key={repo.id}
                href={`/users/${username}/repos/${repo.name}`}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 truncate">{repo.name}</h3>
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
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
