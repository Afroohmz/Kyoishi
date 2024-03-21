import React from 'react';
import code from '../assets/code2.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#45ee9f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Here are some of the projects that I have completed</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Weather Dashboard
              </span>
              <p className='text-center'>This is a weather dashboard that will present the user with today's current weather data and then a 5-day forecast for the proceeding dates.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://afroohmz.github.io/Bararaq-Saiqa/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/Afroohmz/Bararaq-Saiqa' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Advanced CSS Portfolio
              </span>
              <p className='text-center'>The aim for this web application was to create portfolio page to display some of the projects that I have completed to showcase my ability using HTML & CSS.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://afroohmz.github.io/Ryoiki-Tenkai/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/Afroohmz/Ryoiki-Tenkai' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Web API Coding Quiz
              </span>
              <p className='text-center'>I have created a basic coding question page with a selection of multiple choice questions, under timed conditions.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://afroohmz.github.io/Kotoamatsukami/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/Afroohmz/Kotoamatsukami' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                PWA Text Editor
              </span>
              <p className='text-center'>J.A.T.E is a Progressive Web Application PWA that runs in the browser, offline and can be installed locally to your machine.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://progressive-web-applications-pwa-text-w3iw.onrender.com/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://afroohmz.github.io/Shisui/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Note taker
              </span>
              <p className='text-center'>This is a simple note taken created by using javascript</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://afroohmz.github.io/Laughing-Coffin/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/Afroohmz/Laughing-Coffin' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                JS Random Password Generator
              </span>
              <p className='text-center'>I've created a password generator with JavaScript. I have created an application that randomly generates a password based on defined criteria.</p>
              <div className='pt-8 text-center'>
                {}
                <a href='https://afroohmz.github.io/Lelouch-Vi-Britannia/' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Deployed Link
                  </button>
                </a>
                {}
                <a href='https://github.com/Afroohmz/Lelouch-Vi-Britannia' target='_blank' rel='noopener noreferrer'>
                  <button className='rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;



