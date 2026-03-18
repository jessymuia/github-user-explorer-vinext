// components/UserCard.tsx
import Image from "next/image";
import Link from "next/link";
import { GitHubUser } from "@/app/types/github";
import { Users, BookOpen } from "lucide-react";

export default function UserCard({ user }: { user: GitHubUser }) {
  return (
    <Link href={`/users/${user.login}`} className="block group">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200">
        <div className="flex items-start gap-4">
          <Image
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            width={52}
            height={52}
            className="rounded-xl flex-shrink-0 ring-1 ring-slate-200"
            priority={false}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
              {user.name || user.login}
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">@{user.login}</p>

            {user.bio && (
              <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {user.bio}
              </p>
            )}

            {(user.followers !== undefined || user.public_repos !== undefined) ? (
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
                {user.followers !== undefined && (
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span className="text-slate-600 font-medium">{user.followers.toLocaleString()}</span> followers
                  </span>
                )}
                {user.public_repos !== undefined && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span className="text-slate-600 font-medium">{user.public_repos.toLocaleString()}</span> repos
                  </span>
                )}
              </div>
            ) : (
              <p className="mt-3 text-xs text-slate-400">View full profile →</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}