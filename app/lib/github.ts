// lib/github.ts
const BASE = "https://api.github.com";

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN && {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  }),
};

export async function searchUsers(query: string, page = 1) {
  const res = await fetch(
    `${BASE}/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`,
    { headers, next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

export async function getUser(username: string) {
  const res = await fetch(`${BASE}/users/${username}`, {
    headers,
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`User not found: ${username}`);
  return res.json();
}

export async function getUserRepos(username: string) {
  const res = await fetch(
    `${BASE}/users/${username}/repos?sort=stars&per_page=30`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}

export async function getRepo(username: string, repo: string) {
  const res = await fetch(`${BASE}/repos/${username}/${repo}`, {
    headers,
    next: { revalidate: 1800 },
  });
  if (!res.ok) throw new Error("Repo not found");
  return res.json();
}

export async function getRepoLanguages(username: string, repo: string) {
  const res = await fetch(`${BASE}/repos/${username}/${repo}/languages`, {
    headers,
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error("Failed to fetch languages");
  return res.json();
}

export async function getTrending() {
  const res = await fetch(
    `${BASE}/search/repositories?q=stars:>1000&sort=stars&per_page=20`,
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch trending");
  return res.json();
}

export async function getRepoReadme(username: string, repo: string) {
  const res = await fetch(`${BASE}/repos/${username}/${repo}/readme`, {
    headers,
    next: { revalidate: 1800 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return atob(data.content); // decode base64
}
