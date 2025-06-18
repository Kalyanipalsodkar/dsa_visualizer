'use client';

import { useState } from 'react';
import StackADT from './StackADT';
import AnimatedStack from './AnimatedStack';

export default function Stack() {
  const [stack] = useState(() => StackADT());
  const [stackState, setStackState] = useState(stack.getArray());

  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [topValue, setTopValue] = useState(undefined);

  const refresh = () => {
    setStackState(stack.getArray());
  };

  const handlePush = () => {
    setError('');
    setTopValue(undefined);
    if (value.trim() === '') {
      setError('Value cannot be empty');
      return;
    }
    stack.push(value);
    refresh();
    setValue('');
  };

  const handlePop = () => {
    setError('');
    setTopValue(undefined);
    const popped = stack.pop();
    if (popped === null) {
      setError('Stack is empty');
    } else {
      refresh();
    }
  };

  const handlePeek = () => {
    setError('');
    const top = stack.peek();
    if (top === null) {
      setError('Stack is empty');
      setTopValue(null);
    } else {
      setTopValue(top);
    }
  };

  return (
    <div>
      <h1 className="text-base text-center font-bold text-blue-900 border-b border-gray-400 pb-4 w-full text-[25px]">Stack</h1>
      <p className="mt-6 text-lg text-gray-700"><strong>Stack size:</strong> {stack.getSize()}</p>

      <div className="mt-4 mb-4">
        <AnimatedStack stack={stackState} />
      </div>

      <div className="flex flex-wrap gap-2 mt-8 mb-3">
        <input
          type="text"
          placeholder="Enter value"
          className="border p-2 rounded"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handlePush} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-32">Push</button>
      </div>

      <div className="flex gap-2 mt-2">
        <button onClick={handlePop} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-42">Pop</button>
        <button onClick={handlePeek} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-43">Peek</button>
      </div>
      
      {topValue !== undefined && (
        <div className="mt-2 text-slate-700 font-semibold text-lg">
          {topValue === null ? '' : `Top Value: ${topValue}`}
        </div>
      )}


      {error && <div className="text-red-600 mt-2">{error}</div>}

    </div>
  );
}
