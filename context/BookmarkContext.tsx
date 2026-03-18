"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { Bookmark } from "@/hooks/useBookmarks";

type State = { bookmarks: Bookmark[] };
type Action =
  | { type: "ADD"; payload: Bookmark }
  | { type: "REMOVE"; payload: number }
  | { type: "LOAD"; payload: Bookmark[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return { bookmarks: [...state.bookmarks, action.payload] };
    case "REMOVE":
      return { bookmarks: state.bookmarks.filter((b) => b.id !== action.payload) };
    case "LOAD":
      return { bookmarks: action.payload };
    default:
      return state;
  }
}

const BookmarkContext = createContext<{
  bookmarks: Bookmark[];
  add: (b: Bookmark) => void;
  remove: (id: number) => void;
  isBookmarked: (id: number) => boolean;
} | null>(null);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { bookmarks: [] });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bookmarks");
      if (stored) dispatch({ type: "LOAD", payload: JSON.parse(stored) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
  }, [state.bookmarks]);

  const add = (b: Bookmark) => dispatch({ type: "ADD", payload: b });
  const remove = (id: number) => dispatch({ type: "REMOVE", payload: id });
  const isBookmarked = (id: number) => state.bookmarks.some((b) => b.id === id);

  return (
    <BookmarkContext.Provider value={{ bookmarks: state.bookmarks, add, remove, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarkContext() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error("useBookmarkContext must be used within BookmarkProvider");
  return ctx;
}