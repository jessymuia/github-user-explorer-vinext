# GitHub User Explorer

A web application for searching GitHub profiles, viewing user details, repositories, and trending projects. Built with Next.js App Router and the GitHub REST API.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: Node.js 22
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Data**: GitHub REST API (public, no auth required)
- **Extras**: react-markdown, rehype-raw (README rendering), next-themes (dark/light mode), clsx, tailwind-merge

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Home/search page
  - `users/[username]/` - User profile pages
  - `users/[username]/repos/[repo]/` - Repository detail pages
  - `bookmarks/` - Bookmarked users/repos
  - `trending/` - Trending GitHub repositories
  - `about/` - About page
- `components/` - Reusable UI components
- `hooks/` - Custom React hooks (useBookmarks, useDebounce, useLocalStorage)
- `lib/` - Shared utilities and GitHub API client (github.ts)
- `context/` - React Context providers (BookmarkContext)
- `public/` - Static assets

## Running the Project

The dev server runs on port 5000:
```
npm run dev
```

## Deployment

Configured for **Vercel** deployment:
- Framework: Next.js (auto-detected)
- Build command: `npm run build`
- See `vercel.json` for config

To deploy on Vercel:
1. Go to vercel.com and import the GitHub repo `jessymuia/github-user-explorer-vinext`
2. Vercel will auto-detect Next.js and deploy automatically

## Key Files

- `next.config.ts` - Next.js config (image remote patterns for GitHub avatars)
- `vercel.json` - Vercel deployment config
- `lib/github.ts` - GitHub API client
