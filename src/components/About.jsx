import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#45ee9f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hello my name is Ali Nuur. Please feel free to 
                look at my react portfolia
              </p>
            </div>
            <div>
              <p>
                {" "}
                As a dedicated student aspiring to excel in Full Stack Web Development, my aim is to become a valuable contributor to the technology industry. With a keen eye for detail and a passion for problem-solving, I am committed to continuous 
                learning and staying updated with technological advancements. Currently enrolled in Birmingham University Coding Boot Camp, I am immersed in mastering Full Stack Web Development alongside expanding my proficiency in C++. My journey reflects my dedication to honing my skills and embracing challenges with enthusiasm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;