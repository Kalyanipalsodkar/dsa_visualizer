'use client';

export default function AnimatedLinkedList({ list, highlightIndex }) {
  return (
    <div className="flex items-center gap-4 my-6 flex-wrap">
      {list.map((value, index) => (
        <div key={value + '-' + index} className="flex flex-col">
          <div className="flex items-center gap-2">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded shadow-md text-[22px]
                ${highlightIndex === index ? 'bg-white text-slate-600 font-extrabold' : 'bg-slate-600 text-white'}
              `}
            >
              {value}
            </div>

            {index < list.length - 1 && (
              <span className="text-2xl text-slate-500">→</span>
            )}
          </div>
          <div className="mt-1 ml-1 text-xs text-gray-600">
              <span className="font-semibold">Index {index} </span>
            </div>
        </div>
      ))}
    </div>
  );
}
