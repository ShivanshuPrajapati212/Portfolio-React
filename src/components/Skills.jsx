import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";
import { SiPython } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='text-white heading'>
        <h2 className='text-3xl my-5 font-medium'>Skills</h2>
      <ul className='grid-cols-2 grid gap-3'>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-[#008080] bg-[#0080804b] border-[1px] p-1 rounded-md'><FaReact/></div>
            <div><h3 className='text-lg font-medium'>React.js</h3>
            <p className='text-md '>JavaScript Library</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-green-700 bg-[#0080003f] border-[1px] p-1 rounded-md'><FaNodeJs/></div>
            <div><h3 className='text-lg font-medium'>Node.js</h3>
            <p className='text-md '>Server language</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-green-700 bg-[#0080003f] border-[1px] p-1 rounded-md'><SiMongodb/></div>
            <div><h3 className='text-lg font-medium'>MongoDB</h3>
            <p className='text-md '>NoSQL Database</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-gray-400 bg-[#80808080] border-[1px] p-1 rounded-md'><SiExpress/></div>
            <div><h3 className='text-lg font-medium'>Express</h3>
            <p className='text-md '>Node.js Framework</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-cyan-600 bg-[#00d1ce41] border-[1px] p-1 rounded-md'><SiTailwindcss/></div>
            <div><h3 className='text-lg font-medium'>Tailwind CSS</h3>
            <p className='text-md '>Utility-first CSS</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-yellow-600 bg-[#ffa60033] border-[1px] p-1 rounded-md'><IoIosGitBranch/></div>
            <div><h3 className='text-lg font-medium'>Git</h3>
            <p className='text-md '>Version control</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-blue-700 bg-[#1c56ad33] border-[1px] p-1 rounded-md'><SiPython/></div>
            <div><h3 className='text-lg font-medium'>Python</h3>
            <p className='text-md '>Server Language</p></div>
        </li>
        <li className='list-none flex gap-4 items-center bg-zinc-900 px-4 py-3 rounded-lg border-[2px] border-zinc-800'>
            <div className='text-2xl text-slate-500 bg-[#61656933] border-[1px] p-1 rounded-md'><FaAws/></div>
            <div><h3 className='text-lg font-medium'>AWS</h3>
            <p className='text-md '>DevOps Service</p></div>
        </li>

      </ul>
    </div>
  )
}

export default Skills
