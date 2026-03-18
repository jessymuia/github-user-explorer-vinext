const BASE = "https://api.github.com";

const token = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(token && {
    Authorization: `Bearer ${token}`,
  }),
};

export async function searchUsers(query: string, page: number = 1) {
  const res = await fetch(
    `${BASE}/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`,
    { headers }
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

export async function getUser(username: string) {
  const res = await fetch(`${BASE}/users/${username}`, { headers });
  if (!res.ok) throw new Error(`User not found: ${username}`);
  return res.json();
}

export async function getUserRepos(username: string) {
  const res = await fetch(
    `${BASE}/users/${username}/repos?sort=stars&per_page=30`,
    { headers }
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}

export async function getRepo(username: string, repoName: string) {
  const res = await fetch(`${BASE}/repos/${username}/${repoName}`, { headers });
  if (!res.ok) throw new Error("Repo not found");
  return res.json();
}

export async function getRepoLanguages(username: string, repoName: string) {
  const res = await fetch(
    `${BASE}/repos/${username}/${repoName}/languages`,
    { headers }
  );
  if (!res.ok) return {};
  return res.json();
}

export async function getRepoReadme(
  username: string,
  repoName: string
): Promise<string | null> {
  const res = await fetch(`${BASE}/repos/${username}/${repoName}/readme`, {
    headers: {
      ...(headers as Record<string, string>),
      Accept: "application/vnd.github.raw",
    },
  });
  if (!res.ok) return null;
  return res.text();
}

export async function getTrendingRepos() {
  const res = await fetch(
    `${BASE}/search/repositories?q=stars:>1000&sort=stars&per_page=20`,
    { headers }
  );
  if (!res.ok) throw new Error("Failed to fetch trending");
  return res.json();
}