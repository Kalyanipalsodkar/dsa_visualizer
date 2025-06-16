'use client';

import { useRouter } from 'next/navigation';
import { MdDataArray } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';
import { GiStack } from 'react-icons/gi';
import { HiQueueList } from 'react-icons/hi2';
import { SlGraph } from 'react-icons/sl';
import { TbBinaryTree } from 'react-icons/tb';

export default function SideNavbar() {
  const router = useRouter();

  const navItems = [
    { name: 'Array', icon: <MdDataArray />, route: '/Array' },
    { name: 'Linked List', icon: <RiMenuLine />, route: '/LinkedList' },
    { name: 'Stack', icon: <GiStack />, route: '/Stack' },
    { name: 'Queue', icon: <HiQueueList />, route: '/Queue' },
    { name: 'Graph', icon: <SlGraph />, route: '/Graph' },
    { name: 'Tree', icon: <TbBinaryTree />, route: '/Tree' },
  ];

  return (
    <div className="p-6 rounded-lg w-1/2 h-screen bg-white z-20 fixed top-0 left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      <h1 className="text-base text-center font-bold text-blue-900 border-b border-gray-400 pb-4 w-full text-[25px]">DSA Visualizer</h1>
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => router.push(item.route)}
            className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-700 p-2 rounded-md group cursor-pointer hover:shadow-lg mt-7"
          >
            <span className="text-2xl text-gray-600 group-hover:text-white">{item.icon}</span>
            <span className="text-base text-gray-800 group-hover:text-white font-semibold text-[19px] ">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
