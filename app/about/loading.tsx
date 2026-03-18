export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 animate-pulse">

      {/* Title */}
      <div className="h-10 bg-zinc-800 rounded w-1/3 mx-auto mb-6"></div>
      <div className="h-4 bg-zinc-800 rounded w-2/3 mx-auto mb-16"></div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4"
          >
            <div className="h-6 w-40 bg-zinc-800 rounded"></div>
            <div className="h-4 w-full bg-zinc-800 rounded"></div>
            <div className="h-4 w-5/6 bg-zinc-800 rounded"></div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap justify-center gap-4">
        {[1,2,3,4].map((item) => (
          <div
            key={item}
            className="h-10 w-28 bg-zinc-800 rounded-xl"
          ></div>
        ))}
      </div>

    </div>
  );
}
