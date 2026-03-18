// app/page.tsx
import type { Metadata } from "next";
import SearchInput from "@/components/SearchInput";
import UserCard from "@/components/UserCard";
import EmptyState from "@/components/EmptyState";
import Link from "next/link";
import { searchUsers } from "@/lib/github";
import { GitHubUser } from "@/app/types/github";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GitHub User Explorer — Search",
  description: "Find any GitHub user and explore their profile, followers, and repositories.",
  openGraph: { images: [{ url: "/og-image.png" }] },
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const query =
    typeof params.q === "string"
      ? params.q
      : Array.isArray(params.q)
      ? params.q[0] || ""
      : "";

  const page =
    typeof params.page === "string" ? Math.max(1, parseInt(params.page) || 1) : 1;

  let users: GitHubUser[] = [];
  let totalCount = 0;
  let errorMessage: string | null = null;

  if (query.trim()) {
    try {
      const result = await searchUsers(query, page);
      users = result?.items || [];
      totalCount = result?.total_count || 0;
    } catch (err) {
      console.error("GitHub API error:", err);
      errorMessage = "Failed to load users. GitHub might be rate-limited. Try again later.";
    }
  }

  const totalPages = Math.ceil(Math.min(totalCount, 1000) / 10);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">

      {!query && (
        <section className="text-center mb-14 animate-fade-up-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Powered by GitHub REST API
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-slate-900 leading-tight">
            Explore GitHub
            <span className="block text-blue-600">Developers</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
            Search any developer on GitHub and explore their profile,
            repositories, and language breakdown.
          </p>
        </section>
      )}

      <div className={`max-w-2xl mx-auto ${!query ? "animate-fade-up-2 mb-16" : "mb-10"}`}>
        <SearchInput defaultValue={query} />
      </div>

      {query && (
        <section>
          {errorMessage ? (
            <div className="text-center border border-red-200 bg-red-50 rounded-2xl p-10">
              <p className="text-red-600 mb-4">{errorMessage}</p>
              <Link
                href={`/?q=${encodeURIComponent(query)}`}
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition text-sm font-medium text-slate-700 shadow-sm"
              >
                Retry
              </Link>
            </div>
          ) : (
            <>
              <p className="text-slate-400 mb-8 text-center text-sm">
                <span className="text-blue-600 font-semibold">{totalCount.toLocaleString()}</span> results for{" "}
                <span className="text-slate-700 font-medium">"{query}"</span>
              </p>

              {users.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) => (
                      <UserCard key={user.id} user={user} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-12">
                      {hasPrev ? (
                        <Link
                          href={`/?q=${encodeURIComponent(query)}&page=${page - 1}`}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm"
                        >
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </Link>
                      ) : (
                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-300 text-sm cursor-not-allowed">
                          <ChevronLeft className="w-4 h-4" /> Previous
                        </span>
                      )}
                      <span className="text-slate-400 text-sm px-2">
                        <span className="text-slate-700 font-semibold">{page}</span> of{" "}
                        <span className="text-slate-700 font-semibold">{totalPages}</span>
                      </span>
                      {hasNext ? (
                        <Link
                          href={`/?q=${encodeURIComponent(query)}&page=${page + 1}`}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm"
                        >
                          Next <ChevronRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-300 text-sm cursor-not-allowed">
                          Next <ChevronRight className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <EmptyState query={query} />
              )}
            </>
          )}
        </section>
      )}
    </div>
  );
}
