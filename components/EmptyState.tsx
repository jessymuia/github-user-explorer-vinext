export default function EmptyState({ query }: { query: string }) {
  return (
    <div className="text-center py-20">
      <p className="text-5xl mb-4">🔍</p>
      <p className="text-xl font-semibold mb-2">No results found</p>
      <p className="text-zinc-400">No GitHub users found for "{query}". Try a different username.</p>
    </div>
  );
}