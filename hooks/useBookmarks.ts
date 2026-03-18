import { useLocalStorage } from "./useLocalStorage";

export interface Bookmark {
  type: "user" | "repo";
  id: number;
  login?: string;
  name?: string;
  full_name?: string;
  avatar_url?: string;
  description?: string;
  html_url: string;
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>("bookmarks", []);

  const add = (bookmark: Bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const remove = (id: number) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  const isBookmarked = (id: number) => bookmarks.some((b) => b.id === id);

  return { bookmarks, add, remove, isBookmarked };
}