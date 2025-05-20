import whimpsyai from '../assets/whimpsyai.jpg'
import windows_on_web from '../assets/windows-on-web.png'
import webgen from '../assets/webgen.png'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

const Projects = () => {
  return (
    <div className='text-white'>
      <h2 className='text-3xl my-5 font-medium'>Projects</h2>
      <ul className='heading flex flex-col gap-4'>
        <div className='relative'>
        <span class="bg-zinc-700 text-zinc-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm absolute -top-3 right-4 z-10">In Progress</span>
        <li className='flex gap-8 bg-zinc-900 p-4 rounded-lg relative border-2 border-zinc-800 hover:border-zinc-600 ease-in-out duration-100'>
            <div className=''>
                <a href={whimpsyai} target='_blank'><img src={whimpsyai} alt="" className='h-52 min-w-96 max-w-96 rounded-lg'/></a>
            </div>
            <div className=''>
                <h3 className='text-2xl font-semibold mb-3 '>WhimpsyAI</h3>
                <p className='text-md text-zinc-300'>Learn Something new every day according to your interests, powered by AI.</p>
                <div className='flex gap-2 my-2'>
                  <div className='text-2xl text-green-700 bg-[#0080003f] border-[1px] p-1 rounded-md inline-block'><FaNodeJs/></div>
                  <div className='text-2xl text-gray-400 bg-[#80808080] border-[1px] p-1 rounded-md inline-block'><SiExpress/></div>
                  <div className='text-2xl text-[#008080] bg-[#0080804b] border-[1px] p-1 rounded-md inline-block'><FaReact/></div>
                  <div className='text-2xl text-green-700 bg-[#0080003f] border-[1px] p-1 rounded-md inline-block'><SiMongodb/></div>
                  <div className='text-2xl text-cyan-600 bg-[#00d1ce41] border-[1px] p-1 rounded-md inline-block'><SiTailwindcss/></div>
                </div>
                <div className='absolute bottom-4'>
                <button type="button" class="text-white bg-zinc-700 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
                  <a href="https://whimpsyai.vercel.app" target='_blank' className='flex gap-1 items-center justify-center'><CiGlobe className='text-xl'/> <span>Live Demo</span></a>
                  </button>
                <button type="button" class="text-white bg-zinc-700 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
                  <a href="https://github.com/ShivanshuPrajapati212/WhimpsyAI-Backend" target='_blank' className='flex gap-1 items-center justify-center'><IoLogoGithub className='text-xl'/> <span>Source</span></a>
                  </button>
                </div>
            </div>
        </li>
        </div>
        <li className='flex gap-8 bg-zinc-900 p-4 rounded-lg relative border-2 border-zinc-800 hover:border-zinc-600 ease-in-out duration-100'>
            <div className=''>
                <a href={windows_on_web} target='_blank'><img src={windows_on_web} alt="" className='h-52 min-w-96 max-w-96 rounded-lg'/></a>
            </div>
            <div className=''>
                <h3 className='text-2xl font-semibold mb-3 '>Windows on Web</h3>
                <p className='text-md text-zinc-300'>A Windows Clone but on the web, made with react.</p>
                <div className='flex gap-2 my-2'>
                  <div className='text-2xl text-[#008080] bg-[#0080804b] border-[1px] p-1 rounded-md inline-block'><FaReact/></div>
                  <div className='text-2xl text-cyan-600 bg-[#00d1ce41] border-[1px] p-1 rounded-md inline-block'><SiTailwindcss/></div>
                </div>
                <div className='absolute bottom-4'>
                <button type="button" class="text-white bg-zinc-700 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
                  <a href="https://windows-on-web.vercel.app/" target='_blank' className='flex gap-1 items-center justify-center'><CiGlobe className='text-xl'/> <span>Live Demo</span></a>
                  </button>
                <button type="button" class="text-white bg-zinc-700 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
                  <a href="https://github.com/ShivanshuPrajapati212/windows-on-web" target='_blank' className='flex gap-1 items-center justify-center'><IoLogoGithub className='text-xl'/> <span>Source</span></a>
                  </button>
                </div>
            </div>
        </li>
        <li className='flex gap-8 bg-zinc-900 p-4 rounded-lg relative border-2 border-zinc-800 hover:border-zinc-600 ease-in-out duration-100'>
            <div className=''>
                <a href={webgen} target='_blank'><img src={webgen} alt="" className='h-52 min-w-96 max-w-96 rounded-lg'/></a>
            </div>
            <div className=''>
                <h3 className='text-2xl font-semibold mb-3 '>WebGen</h3>
                <p className='text-md text-zinc-300'>A Website that creates Websites by AI.</p>
                <div className='flex gap-2 my-2'>
                  <div className='text-2xl text-green-700 bg-[#0080003f] border-[1px] p-1 rounded-md inline-block'><FaNodeJs/></div>
                  <div className='text-2xl text-gray-400 bg-[#80808080] border-[1px] p-1 rounded-md inline-block'><SiExpress/></div>
                  <div className='text-2xl text-[#008080] bg-[#0080804b] border-[1px] p-1 rounded-md inline-block'><FaReact/></div>
                  <div className='text-2xl text-green-700 bg-[#0080003f] border-[1px] p-1 rounded-md inline-block'><SiMongodb/></div>
                  <div className='text-2xl text-cyan-600 bg-[#00d1ce41] border-[1px] p-1 rounded-md inline-block'><SiTailwindcss/></div>
                </div>
                <div className='absolute bottom-4'>
                <button type="button" class="text-white bg-zinc-700 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
                  <a href="https://webgen-shivanshu.vercel.app/" target='_blank' className='flex gap-1 items-center justify-center'><CiGlobe className='text-xl'/> <span>Live Demo</span></a>
                  </button>
                <button type="button" class="text-white bg-zinc-700 hover:bg-zinc-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
                  <a href="https://github.com/ShivanshuPrajapati212/WebGen-Backend" target='_blank' className='flex gap-1 items-center justify-center'><IoLogoGithub className='text-xl'/> <span>Source</span></a>
                  </button>
                </div>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects
