import React from 'react'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'

const Footer = () => {
  return (
    <div className='flex justify-between py-12'>
      <div className="">© 2025 shivanshup.vercel.app</div>
     <div className="list-none text-2xl flex gap-5">
            <li className="hover:text-white ease-in-out duration-100"><a href="https://github.com/ShivanshuPrajapati212" target="_blank"><LuGithub /></a></li>
            <li className="hover:text-white ease-in-out duration-100"><a href="https://www.linkedin.com/in/shivanshupr" target="_blank"><LuLinkedin /></a></li>
            <li className="hover:text-white ease-in-out duration-100"><a href="mailto:shivanshuprajapati212@gmail.com" target="_blank"><LuMail /></a></li>
        </div>
    </div>
  )
}

export default Footer
