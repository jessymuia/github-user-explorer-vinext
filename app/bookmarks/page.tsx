import type { Metadata } from "next";
import BookmarksClient from "./BookmarksClient";

export const metadata: Metadata = {
  title: "Bookmarks — GitHub Explorer",
  description: "Your saved GitHub users and repositories",
};

export default function BookmarksPage() {
  return <BookmarksClient />;
}