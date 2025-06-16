// src/app/Array/AnimatedArray.js
export default function AnimatedArray({ array }) {
    return (
      <div className="flex gap-4 my-6">
        {array.map((value, index) => (
          <div
            key={index}
            className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded transition-transform duration-300 hover:scale-110"
          >
            {value !== null ? value : ''}
          </div>
        ))}
      </div>
    );
  }
  