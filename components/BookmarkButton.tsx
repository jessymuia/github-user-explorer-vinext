// components/BookmarkButton.tsx
"use client";
import { useBookmarkContext } from "@/context/BookmarkContext";
import { Bookmark } from "lucide-react";
import type { Bookmark as BookmarkType } from "@/hooks/useBookmarks";

export default function BookmarkButton({ bookmark }: { bookmark: BookmarkType }) {
  const { add, remove, isBookmarked } = useBookmarkContext();
  const saved = isBookmarked(bookmark.id);

  return (
    <button
      onClick={() => saved ? remove(bookmark.id) : add(bookmark)}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition ${
        saved
          ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-400 hover:border-red-400 hover:text-red-400"
          : "bg-zinc-800 border-zinc-700 hover:border-zinc-400 text-zinc-300"
      }`}
    >
      <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
      {saved ? "Bookmarked" : "Bookmark"}
    </button>
  );
}