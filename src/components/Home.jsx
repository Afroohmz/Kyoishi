import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/luffy.jpg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#45ee9f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          My name is Ali Nuur I'm currently training to become a Full Stack Web Developer. 
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        As a dedicated student aspiring to excel in Full Stack Web Development,
         my aim is to become a valuable contributor to the technology industry. 
         With a keen eye for detail and a passion for problem-solving,
          I am committed to continuous learning and staying updated with technological advancements. 
          Currently enrolled in Birmingham University Coding Boot Camp, I am immersed in mastering
           Full Stack Web Development alongside expanding my proficiency in C++. My journey reflects my
            dedication to honing my skills and embracing challenges with enthusiasm
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;