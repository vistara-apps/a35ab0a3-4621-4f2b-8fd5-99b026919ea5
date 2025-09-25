export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4">
        <div className="poster-card animate-pulse">
          {/* Header skeleton */}
          <div className="text-center mb-8">
            <div className="h-6 bg-surface rounded w-32 mx-auto mb-2"></div>
            <div className="w-16 h-0.5 bg-surface mx-auto"></div>
          </div>

          {/* Quote icon skeleton */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-surface rounded-full"></div>
          </div>

          {/* Quote text skeleton */}
          <div className="space-y-3 mb-8">
            <div className="h-6 bg-surface rounded"></div>
            <div className="h-6 bg-surface rounded w-5/6 mx-auto"></div>
            <div className="h-6 bg-surface rounded w-4/6 mx-auto"></div>
          </div>

          {/* Attribution skeleton */}
          <div className="text-center mb-6">
            <div className="h-4 bg-surface rounded w-40 mx-auto mb-1"></div>
            <div className="h-5 bg-surface rounded w-32 mx-auto"></div>
          </div>

          {/* Theme tag skeleton */}
          <div className="flex justify-center mb-6">
            <div className="h-6 bg-surface rounded-full w-20"></div>
          </div>

          {/* Decorative element skeleton */}
          <div className="flex justify-center">
            <div className="w-8 h-1 bg-surface rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
