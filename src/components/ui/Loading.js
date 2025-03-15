export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative w-20 h-20">
        <div className="absolute border-4 border-lavender rounded-full w-full h-full animate-ping" />
        <div className="absolute border-4 border-lavender rounded-full w-full h-full animate-pulse" />
      </div>
    </div>
  );
}