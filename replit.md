# GitHub User Explorer

A web application for searching GitHub profiles, viewing user details, repositories, and trending projects. Built with Next.js App Router conventions running on Vinext (a Vite-based Next.js alternative).

## Tech Stack

- **Framework**: Vinext (Next.js API surface on Vite)
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

## Key Files

- `vite.config.ts` - Vite configuration with vinext plugin, port 5000, host 0.0.0.0
- `package.json` - Scripts use `vinext dev --port 5000 -H 0.0.0.0`
- `next.config.ts` - Next.js config (image remote patterns for GitHub avatars)
- `lib/github.ts` - GitHub API client
