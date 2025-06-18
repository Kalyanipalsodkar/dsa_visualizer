'use client';

export default function AnimatedStack({ stack = [] }) {
  if (stack.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <div className="text-xs text-slate-600 mb-1">Top ↓</div>
      {stack.map((item, index) => (
        <div
          key={index}
          className="w-40 h-12 flex items-center justify-center bg-slate-600 text-white rounded shadow transition-transform duration-300 hover:scale-105"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
