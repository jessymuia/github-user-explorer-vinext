// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBookmarkContext } from "@/context/BookmarkContext";
import { Bookmark, Menu, X, Github } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { bookmarks } = useBookmarkContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Search" },
    { href: "/trending", label: "Trending" },
    { href: "/bookmarks", label: "Bookmarks", icon: true },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition">
            <Github className="w-4 h-4 text-white" />
          </div>
          <span className="text-slate-900 font-semibold text-base tracking-tight">
            GitHub Explorer
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1 items-center">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {icon && <Bookmark className="w-3.5 h-3.5" />}
              {label}
              {icon && bookmarks.length > 0 && (
                <span className="bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none ml-0.5">
                  {bookmarks.length}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-500 hover:text-slate-900 transition p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                pathname === href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {icon && <Bookmark className="w-4 h-4" />}
              {label}
              {icon && bookmarks.length > 0 && (
                <span className="bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {bookmarks.length}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}