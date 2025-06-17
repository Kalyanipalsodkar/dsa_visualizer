'use client';

import { useState } from 'react';
import LinkedListADT from './LinkedListADT';
import AnimatedLinkedList from './AnimatedLinkedList';

export default function LinkedList() {
  const [list] = useState(() => new LinkedListADT());
  const [listState, setListState] = useState(list.getArray());

  const [value, setValue] = useState('');
  const [index, setIndex] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [updateIndex, setUpdateIndex] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [error, setError] = useState({ type: '', message: '' });

  const refresh = () => {
    setListState(list.getArray());
    setSearchResult(null);
  };

  const handleInsert = () => {
    setError({ type: '', message: '' });
    if (value.trim() === '') {
      setError({ type: 'insert', message: 'Value cannot be empty' });
      return;
    }
    const idx = list.getLength();
    const success = list.insert(idx, value);
    if (!success) {
      setError({ type: 'insert', message: 'Insert failed' });
      return;
    }
    refresh();
    setValue('');
  };

  const handleDelete = () => {
    setError({ type: '', message: '' });
    const idx = Number(index);
    if (isNaN(idx) || idx < 0 || idx >= list.getLength()) {
      setError({ type: 'delete', message: 'Invalid index' });
      return;
    }
    const success = list.remove(idx);
    if (!success) {
      setError({ type: 'delete', message: 'Delete failed' });
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
    const idx = list.search(searchValue);
    setSearchResult(idx);
    setSearchValue('');
  };

  const handleUpdate = () => {
    setError({ type: '', message: '' });
    const idx = Number(updateIndex);
    if (isNaN(idx) || idx < 0 || idx >= list.getLength()) {
      setError({ type: 'update', message: 'Invalid index' });
      return;
    }
    if (updateValue.trim() === '') {
      setError({ type: 'update', message: 'New value required' });
      return;
    }
    const success = list.update(idx, updateValue);
    if (!success) {
      setError({ type: 'update', message: 'Update failed' });
      return;
    }
    refresh();
    setUpdateIndex('');
    setUpdateValue('');
  };

  return (
    <div>
      <h1 className="text-base text-center font-bold text-blue-900 border-b border-gray-400 pb-4 w-full text-[25px]">Singly Linked List</h1>
      <p className="mt-6 text-lg text-gray-700"><strong>Linked list size:</strong> {list.getLength()}</p>

      <AnimatedLinkedList list={listState} highlightIndex={searchResult} />

      <div className="flex flex-wrap gap-2 mt-8 mb-3">
        <input
          type="text"
          placeholder="Value to insert"
          className="border p-2 rounded"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleInsert} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-32">Insert</button>
      </div>
      {error.type === 'insert' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}
      <div className="flex flex-wrap gap-2 mt-4">
        <input
          type="number"
          placeholder="Index to delete"
          className="border p-2 rounded"
          value={index}
          onChange={(e) => setIndex(e.target.value)}
        />
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-32">Delete</button>
      </div>
      {error.type === 'delete' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search value"
          className="border p-2 rounded"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-32">Search</button>
        {searchResult !== null && (
          <p className="text-sm text-gray-700 mt-2">
            {searchResult >= 0 ? `Found at index ${searchResult}` : 'Not found'}
          </p>
        )}
      </div>
      {error.type === 'search' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <input
          type="number"
          placeholder="Update index"
          className="border p-2 rounded"
          value={updateIndex}
          onChange={(e) => setUpdateIndex(e.target.value)}
        />
        <input
          type="text"
          placeholder="New value"
          className="border p-2 rounded"
          value={updateValue}
          onChange={(e) => setUpdateValue(e.target.value)}
        />
        <button onClick={handleUpdate} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-32">Update</button>
      </div>
      {error.type === 'update' && (
        <p className="text-red-600 text-sm mb-4">{error.message}</p>
      )}

    </div>
  );
}
