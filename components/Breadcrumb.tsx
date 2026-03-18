import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-zinc-500 mb-8 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-white transition">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-zinc-300">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}