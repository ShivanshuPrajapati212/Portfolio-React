import profile from "../assets/profile.png";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuMail } from "react-icons/lu";

const Introduction = () => {
  return (
    <div className="flex max-lg:flex-col items-center justify-between py-24 max-lg:py-5 relative">
      <div className="">
        <div className="text-4xl max-lg:text-xl text-white my-2">
          Hi, from <span className="font-bold">Shivanshu Prajapati</span>{" "}
          <span className="text-5xl max-lg:text-2xl cursor-pointer inline-block transition-transform hover:rotate-[20deg] animate-wave">
            👋
          </span>
        </div>
        <div className="text-2xl max-lg:text-lg heading">
          14 yo{" "}
          <span className="font-semibold text-zinc-300 underline decoration-wavy">
            Full Stack Developer
          </span>{" "}
          from{" "}
          <span className="font-semibold text-zinc-300 underline decoration-wavy">
            Lucknow, India
          </span>
        </div>
        <div className="my-10 text-lg max-lg:text-md">
        <div>I love building SaaS Products,</div>
        <div>and I don't have a degree.</div>
        </div>
        <div className="list-none text-2xl flex gap-5">
            <li className="hover:text-white ease-in-out duration-100"><a href="https://github.com/ShivanshuPrajapati212" target="_blank"><LuGithub /></a></li>
            <li className="hover:text-white ease-in-out duration-100"><a href="https://www.linkedin.com/in/shivanshupr" target="_blank"><LuLinkedin /></a></li>
            <li className="hover:text-white ease-in-out duration-100"><a href="mailto:shivanshuprajapati212@gmail.com" target="_blank"><LuMail /></a></li>
        </div>
      </div>
      <div className="">
        <img
          src={profile}
          alt=""
          className="h-48 w-48 rounded-3xl my-6 border-4 border-zinc-500 hover:border-[#2ecc71] ease-in-out transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Introduction;
