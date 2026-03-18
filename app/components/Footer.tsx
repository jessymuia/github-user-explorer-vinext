// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Built for Next.js Developer Assessment • Data from{' '}
        <a
          href="https://github.com"
          target="_blank"
          className="hover:underline"
        >
          GitHub API
        </a>
        {' • '}
        Deployed on Vercel
      </div>
    </footer>
  );
}