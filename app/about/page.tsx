// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — GitHub Explorer",
  description: "About this app",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-slate-900">About</h1>

      <p className="text-slate-600 mb-4 leading-relaxed">
        GitHub User Explorer is a Next.js application that lets you search for any GitHub user,
        explore their public repositories, view language breakdowns, and browse trending repositories
        across GitHub.
      </p>
      <p className="text-slate-600 mb-4 leading-relaxed">
        Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Data is fetched from the
        GitHub REST API with ISR caching for optimal performance.
      </p>

      <h2 className="text-xl font-bold mt-10 mb-4 text-slate-900">Tech Stack</h2>
      <div className="space-y-3">
        {[
          { icon: "⚡", label: "Next.js 16 (App Router)" },
          { icon: "🔷", label: "TypeScript (strict mode)" },
          { icon: "🎨", label: "Tailwind CSS" },
          { icon: "🐙", label: "GitHub REST API" },
          { icon: "🚀", label: "Deployed on Vercel" },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm shadow-sm">
            <span>{icon}</span> {label}
          </div>
        ))}
      </div>

      <Link href="/" className="inline-flex items-center gap-2 mt-10 text-slate-400 hover:text-blue-600 transition text-sm">
        ← Back to Search
      </Link>
    </div>
  );
}
