// app/users/[username]/repos/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getUser, getUserRepos } from "@/lib/github";
import { GitHubUser, GitHubRepo } from "@/app/types/github";
import { ArrowLeft } from "lucide-react";
import ReposClient from "./ReposClient";

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  try {
    const user: GitHubUser = await getUser(username);
    return {
      title: `${user.login} Repositories — GitHub`,
      description: `${user.public_repos} public repositories by ${user.login}`,
      openGraph: { images: [{ url: user.avatar_url }] },
    };
  } catch {
    return { title: "Repositories — GitHub Explorer" };
  }
}

export default async function ReposPage({ params }: Props) {
  const { username } = await params;

  let user: GitHubUser;
  let repos: GitHubRepo[] = [];

  try {
    user = await getUser(username);
  } catch {
    notFound();
  }

  try {
    repos = await getUserRepos(username);
  } catch {
    repos = [];
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href={`/users/${username}`}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition mb-10 text-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to {username}
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1 text-slate-900">
          {user.name || username}&apos;s Repositories
        </h1>
        <p className="text-slate-500">{user.public_repos} public repositories</p>
      </div>

      <ReposClient repos={repos} username={username} />
    </div>
  );
}
