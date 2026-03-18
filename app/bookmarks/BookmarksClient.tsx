// app/bookmarks/BookmarksClient.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useBookmarkContext } from "@/context/BookmarkContext";
import { Bookmark } from "lucide-react";

export default function BookmarksClient() {
  const { bookmarks, remove } = useBookmarkContext();

  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-5xl mb-4">🔖</p>
        <p className="text-xl font-semibold mb-2 text-slate-900">No bookmarks yet</p>
        <p className="text-slate-500 mb-8">Save users and repos by clicking the bookmark icon.</p>
        <Link href="/" className="text-slate-400 hover:text-blue-600 transition text-sm">
          ← Search users
        </Link>
      </div>
    );
  }

  const users = bookmarks.filter((b) => b.type === "user");
  const repos = bookmarks.filter((b) => b.type === "repo");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">Bookmarks</h1>

      {users.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 text-slate-700">Users</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users.map((b) => (
              <div key={b.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                {b.avatar_url && (
                  <Image
                    src={b.avatar_url}
                    alt={b.login ?? ""}
                    width={48}
                    height={48}
                    className="rounded-xl ring-1 ring-slate-200"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/users/${b.login}`}
                    className="font-semibold text-slate-900 hover:text-blue-600 transition truncate block"
                  >
                    {b.login}
                  </Link>
                  <p className="text-xs text-slate-400">@{b.login}</p>
                </div>
                <button
                  onClick={() => remove(b.id)}
                  className="text-slate-300 hover:text-red-400 transition flex-shrink-0"
                  title="Remove bookmark"
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {repos.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4 text-slate-700">Repositories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((b) => (
              <div key={b.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={b.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-blue-600 transition truncate block text-sm"
                  >
                    {b.full_name}
                  </a>
                  <button
                    onClick={() => remove(b.id)}
                    className="text-slate-300 hover:text-red-400 transition flex-shrink-0"
                    title="Remove bookmark"
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
                {b.description && (
                  <p className="text-slate-500 text-xs mt-1 line-clamp-2">{b.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
