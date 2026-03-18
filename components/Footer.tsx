// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 mt-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} GitHub Explorer
        </p>
        <div className="flex gap-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600 transition">Search</Link>
          <Link href="/trending" className="hover:text-blue-600 transition">Trending</Link>
          <Link href="/bookmarks" className="hover:text-blue-600 transition">Bookmarks</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        </div>
      </div>
    </footer>
  );
}
