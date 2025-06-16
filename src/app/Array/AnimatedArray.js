export default function AnimatedArray({ array, highlightIndex }) {
    return (
      <div className="flex gap-6 my-6">
        {array.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-14 h-14 flex items-center justify-center rounded transition-transform duration-300
                ${highlightIndex === index ? 'bg-white text-slate-600 font-extrabold text-[22px]' : 'bg-slate-600 text-white '}
                hover:scale-110`}
            >
              {value !== null ? value : ''}
            </div>
            <div className="mt-1 text-xs text-gray-600 select-none">
              <span className="font-semibold">Index {index} </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  