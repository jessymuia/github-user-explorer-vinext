// app/users/[username]/repos/ReposClient.tsx
"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { GitHubRepo, SortOption } from "@/app/types/github";
import { Star, GitFork, ChevronLeft, ChevronRight } from "lucide-react";

const PER_PAGE = 12;

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

export default function ReposClient({ repos, username }: { repos: GitHubRepo[]; username: string }) {
  const [sort, setSort] = useState<SortOption>("stars");
  const [language, setLanguage] = useState<string>("all");
  const [page, setPage] = useState(1);

  const languages = useMemo(() => {
    const langs = repos.map((r) => r.language).filter((l): l is string => !!l);
    return ["all", ...Array.from(new Set(langs)).sort()];
  }, [repos]);

  const filtered = useMemo(() => {
    let result = [...repos];
    if (language !== "all") result = result.filter((r) => r.language === language);
    switch (sort) {
      case "stars": result.sort((a, b) => b.stargazers_count - a.stargazers_count); break;
      case "forks": result.sort((a, b) => b.forks_count - a.forks_count); break;
      case "updated": result.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()); break;
      case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [repos, sort, language]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  if (repos.length === 0) return <p className="text-slate-400 text-center py-20">No public repositories found.</p>;

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <select value={sort} onChange={(e) => { setSort(e.target.value as SortOption); setPage(1); }}
          className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition shadow-sm">
          <option value="stars">Stars ↓</option>
          <option value="forks">Forks ↓</option>
          <option value="updated">Updated ↓</option>
          <option value="name">Name A–Z</option>
        </select>
        <select value={language} onChange={(e) => { setLanguage(e.target.value); setPage(1); }}
          className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition shadow-sm">
          {languages.map((l) => <option key={l} value={l}>{l === "all" ? "All Languages" : l}</option>)}
        </select>
        <span className="ml-auto text-sm text-slate-400 self-center">{filtered.length} repo{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {paginated.length === 0 ? (
        <p className="text-slate-400 text-center py-20">No repositories match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {paginated.map((repo) => (
            <Link key={repo.id} href={`/users/${username}/repos/${repo.name}`}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-900 truncate">{repo.name}</h3>
                {repo.fork && <span className="text-xs text-slate-400 border border-slate-200 rounded-full px-2 py-0.5 flex-shrink-0">fork</span>}
              </div>
              {repo.description && <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{repo.description}</p>}
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> {repo.stargazers_count.toLocaleString()}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" /> {repo.forks_count.toLocaleString()}</span>
                <span className="ml-auto text-slate-300">
                  {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              {repo.topics?.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100">{topic}</span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm disabled:opacity-40 disabled:cursor-not-allowed">
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <span className="text-slate-400 text-sm">
            Page <span className="text-slate-700 font-semibold">{page}</span> of <span className="text-slate-700 font-semibold">{totalPages}</span>
          </span>
          <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm disabled:opacity-40 disabled:cursor-not-allowed">
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
