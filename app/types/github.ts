// app/types/github.ts

export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;

  name?: string | null;
  bio?: string | null;
  location?: string | null;
  company?: string | null;
  blog?: string | null;

  followers?: number;
  following?: number;
  public_repos?: number;
  public_gists?: number;

  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  language?: string | null;
  html_url: string;
  topics: string[];
  updated_at: string;
  created_at: string;
  license?: { name: string } | null;
  fork: boolean;
  private: boolean;

  owner?: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export interface GitHubSearchResult<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export type GitHubUserSearchResult = GitHubSearchResult<GitHubUser>;
export type GitHubRepoSearchResult = GitHubSearchResult<GitHubRepo>;

export type LanguageMap = Record<string, number>;

export type SortOption = "stars" | "updated" | "name" | "forks";
export type SortDirection = "asc" | "desc";