'use client';

import { useState } from 'react';
import ArrayADT from './ArrayADT';
import AnimatedArray from './AnimatedArray';

export default function ArrayPage() {
  const [adt] = useState(() => new ArrayADT(10)); // ✅ store instance in state once
  const [arrayState, setArrayState] = useState(adt.getArray());
  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');

  const handleInsert = () => {
    const idx = Number(index);
    if (!isNaN(idx) && adt.insert(idx, value)) {
      setArrayState(adt.getArray());
      setValue('');
      setIndex('');
    }
  };

  const handleDelete = () => {
    const idx = Number(index);
    if (!isNaN(idx) && adt.delete(idx)) {
      setArrayState(adt.getArray());
      setIndex('');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Array ADT Visualizer</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        <input
          type="number"
          placeholder="Index"
          className="border p-2 rounded w-24"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          className="border p-2 rounded w-24"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleInsert}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Insert
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      <AnimatedArray array={arrayState} />
    </div>
  );
}
