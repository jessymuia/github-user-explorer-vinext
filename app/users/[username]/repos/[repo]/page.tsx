// app/users/[username]/repos/[repo]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRepo, getRepoLanguages, getRepoReadme } from "@/lib/github";
import { GitHubRepo, LanguageMap } from "@/app/types/github";
import Breadcrumb from "@/components/Breadcrumb";
import BookmarkButton from "@/components/BookmarkButton";
import { Star, GitFork, Eye, AlertCircle, ExternalLink, Scale, GitBranch, Calendar } from "lucide-react";

type Props = {
  params: Promise<{ username: string; repo: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username, repo } = await params;
  try {
    const repoData: GitHubRepo = await getRepo(username, repo);
    return {
      title: `${repoData.full_name} — GitHub`,
      description: repoData.description ?? `${repo} by ${username}`,
      openGraph: { images: [{ url: `https://opengraph.githubassets.com/1/${username}/${repo}` }] },
    };
  } catch {
    return { title: "Repository — GitHub Explorer" };
  }
}

function getLanguageColor(lang: string): string {
  const colors: Record<string, string> = {
    TypeScript: "bg-blue-500", JavaScript: "bg-yellow-400", Python: "bg-green-500",
    Rust: "bg-orange-500", Go: "bg-cyan-500", Java: "bg-red-500",
    "C++": "bg-pink-500", C: "bg-purple-500", Ruby: "bg-rose-500",
    Swift: "bg-orange-400", Kotlin: "bg-violet-500", CSS: "bg-indigo-500",
    HTML: "bg-orange-500", Shell: "bg-slate-400",
  };
  return colors[lang] || "bg-slate-400";
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br />");
}

export default async function RepoPage({ params }: Props) {
  const { username, repo } = await params;

  let repoData: GitHubRepo;
  let languages: LanguageMap = {};
  let readme: string | null = null;

  try { repoData = await getRepo(username, repo); } catch { notFound(); }
  try { languages = await getRepoLanguages(username, repo); } catch { languages = {}; }
  try { readme = await getRepoReadme(username, repo); } catch { readme = null; }

  const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
  const languageEntries = Object.entries(languages).sort((a, b) => b[1] - a[1]);
  const updatedAt = new Date(repoData.updated_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: username, href: `/users/${username}` },
        { label: "Repos", href: `/users/${username}/repos` },
        { label: repoData.name },
      ]} />

      {/* Repo Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 mb-6 shadow-sm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="min-w-0">
            <p className="text-slate-400 text-sm mb-1">{username}</p>
            <h1 className="text-3xl font-bold break-words text-slate-900">{repoData.name}</h1>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <a href={repoData.html_url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition">
              <ExternalLink className="w-4 h-4" /> View on GitHub
            </a>
            <BookmarkButton bookmark={{ type: "repo", id: repoData.id, full_name: repoData.full_name, description: repoData.description ?? undefined, html_url: repoData.html_url }} />
          </div>
        </div>

        {repoData.description && <p className="mt-4 text-slate-600 text-base leading-relaxed">{repoData.description}</p>}

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
          {repoData.license && <span className="flex items-center gap-1.5"><Scale className="w-4 h-4" /> {repoData.license.name}</span>}
          {repoData.language && <span className="flex items-center gap-1.5"><GitBranch className="w-4 h-4" /> {repoData.language}</span>}
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated {updatedAt}</span>
        </div>

        {repoData.topics?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {repoData.topics.map((topic) => (
              <span key={topic} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100">{topic}</span>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Stars", value: repoData.stargazers_count.toLocaleString(), icon: <Star className="w-4 h-4" /> },
          { label: "Forks", value: repoData.forks_count.toLocaleString(), icon: <GitFork className="w-4 h-4" /> },
          { label: "Watchers", value: repoData.watchers_count.toLocaleString(), icon: <Eye className="w-4 h-4" /> },
          { label: "Issues", value: repoData.open_issues_count.toLocaleString(), icon: <AlertCircle className="w-4 h-4" /> },
        ].map(({ label, value, icon }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-2">{icon} {label}</div>
            <p className="text-2xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      {/* Languages */}
      {languageEntries.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-6 shadow-sm">
          <h2 className="text-xl font-bold mb-5 text-slate-900">Languages</h2>
          <div className="flex rounded-full overflow-hidden h-3 mb-6">
            {languageEntries.map(([lang, bytes]) => (
              <div key={lang} className={`${getLanguageColor(lang)} h-full`}
                style={{ width: `${(bytes / totalBytes) * 100}%` }}
                title={`${lang}: ${((bytes / totalBytes) * 100).toFixed(1)}%`} />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {languageEntries.map(([lang, bytes]) => (
              <div key={lang} className="flex items-center gap-2 text-sm">
                <span className={`w-3 h-3 rounded-full ${getLanguageColor(lang)}`} />
                <span className="text-slate-700">{lang}</span>
                <span className="text-slate-400">{((bytes / totalBytes) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* README */}
      {readme && (
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-5 text-slate-900">README</h2>
          <div
            className="prose prose-slate prose-sm max-w-none
              prose-headings:text-slate-900 prose-headings:font-bold
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded
              prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200
              prose-blockquote:border-slate-300 prose-blockquote:text-slate-500
              prose-strong:text-slate-900 prose-li:text-slate-600"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(readme) }}
          />
        </div>
      )}
    </div>
  );
}
