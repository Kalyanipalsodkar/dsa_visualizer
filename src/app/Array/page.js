'use client';

import { useState } from 'react';
import ArrayADT from './ArrayADT';
import AnimatedArray from './AnimatedArray';

export default function ArrayPage() {
  const [adt] = useState(() => new ArrayADT(10));
  const [arrayState, setArrayState] = useState(adt.getArray());

  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [updateIndex, setUpdateIndex] = useState('');
  const [updateValue, setUpdateValue] = useState('');

  const [error, setError] = useState({ type: '', message: '' });

  const refresh = () => {
    setArrayState(adt.getArray());
    setSearchResult(null);
  };

  const handleInsert = () => {
    setError({ type: '', message: '' });
    if (value.trim() === '') {
      setError({ type: 'insert', message: 'Value cannot be empty' });
      return;
    }
    const index = adt.getLength();
    const success = adt.insert(index, value);
    if (!success) {
      setError({ type: 'insert', message: 'Array is full' });
      return;
    }
    refresh();
    setValue('');
  };

  const handleDelete = () => {
    setError({ type: '', message: '' });
    const idx = Number(index);
    if (adt.getLength() === 0) {
      setError({ type: 'delete', message: 'Array is empty' });
      return;
    }
    if (isNaN(idx) || idx < 0 || idx >= adt.getLength()) {
      setError({ type: 'delete', message: 'Invalid index for deletion' });
      return;
    }
    const success = adt.remove(idx);
    if (!success) {
      setError({ type: 'delete', message: 'Nothing to delete at this index' });
      return;
    }
    refresh();
    setIndex('');
  };

  const handleSearch = () => {
    setError({ type: '', message: '' });
    if (searchValue.trim() === '') {
      setError({ type: 'search', message: 'Search value is required' });
      return;
    }
    const index = adt.search(searchValue);
    setSearchResult(index);
  };

  const handleUpdate = () => {
    setError({ type: '', message: '' });
    const idx = Number(updateIndex);
    if (isNaN(idx) || idx < 0 || idx >= adt.getLength()) {
      setError({ type: 'update', message: 'Invalid update index' });
      return;
    }
    if (updateValue.trim() === '') {
      setError({ type: 'update', message: 'Update value cannot be empty' });
      return;
    }
    const success = adt.update(idx, updateValue);
    if (!success) {
      setError({ type: 'update', message: 'Failed to update' });
      return;
    }
    refresh();
    setUpdateIndex('');
    setUpdateValue('');
  };

  return (
    <div>
      <h1 className="text-base text-center font-bold text-blue-900 border-b border-gray-400 pb-4 w-full text-[25px]">Array</h1>

      <div className="mt-6 text-lg text-gray-700">
        <p><strong>Total array size:</strong> {adt.getSize()}</p>
        <p><strong>Total array size used:</strong> {adt.getLength()}</p>
      </div>


      <div className="flex flex-wrap gap-2 mt-8 mb-3">
        <input
          type="text"
          placeholder="Value to Insert"
          className="border p-2 rounded w-66"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleInsert}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-32"
        >
          Insert Value
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-32"
        >
          Delete
        </button>
      </div>
      {error.type === 'insert' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

      {error.type === 'delete' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-2">
        <input
          type="text"
          placeholder="Search value"
          className="border p-2 rounded w-66"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-32"
        >
          Search Value
        </button>
      </div>
        {searchResult !== null && (
          <span className="text-md text-gray-700 mt-2 mb-2">
            {searchResult >= 0 ? `Found at index ${searchResult}` : 'Not found'}
          </span>
        )}
      {error.type === 'search' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-2 mt-2">
        <input
          type="number"
          placeholder="Update Index"
          className="border p-2 rounded w-32"
          value={updateIndex}
          onChange={(e) => setUpdateIndex(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Value"
          className="border p-2 rounded w-32"
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        />
        <button
          onClick={handleUpdate}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-32"
        >
          Update Value
        </button>
      </div>
      {error.type === 'update' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

      <AnimatedArray array={arrayState} highlightIndex={searchResult} />
     
    </div>
  );
}
