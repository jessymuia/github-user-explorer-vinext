// app/loading.tsx
export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="h-16 sm:h-20 w-3/4 mx-auto bg-zinc-800 rounded-xl skeleton mb-4"></div>
        <div className="h-6 sm:h-8 w-1/2 mx-auto bg-zinc-800 rounded skeleton"></div>
      </div>

      <div className="h-12 w-full max-w-lg mx-auto bg-zinc-800 rounded-xl skeleton mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 shadow-lg"
          >
            <div className="h-48 bg-zinc-800 skeleton"></div>
            <div className="p-5 sm:p-6">
              <div className="h-6 w-3/4 bg-zinc-800 rounded skeleton mb-3"></div>
              <div className="h-4 w-2/3 bg-zinc-800 rounded skeleton mb-4"></div>
              <div className="flex gap-6">
                <div className="h-4 w-1/3 bg-zinc-800 rounded skeleton"></div>
                <div className="h-4 w-1/3 bg-zinc-800 rounded skeleton"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}