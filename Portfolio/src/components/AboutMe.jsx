import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-[#101d26]  md:pt-6 p-4  overflow-auto justify-text">
      <h2 className="text-3xl font-bold  text-center ">My Story</h2>
      <div className="m-auto inline-block text-left">
        <p className="font-extralight my-3">
          A passionate Full-Stack web developer dedicated to building modern,
          responsive, and user-centric web applications. 
        </p>
        <h2 className="text-2xl font-semibold mt-6">Experience</h2>
        <div className=" my-3"> 
          <p className="font-semibold">Accenture</p>
          <p className="font-semibold">
            Packaged Application Developer | 22 May, 2024 - Present
          </p>
          <ul className="list-disc list-inside my-2">
            <li>
              Developed responsive and reusable UI components using React.js,
              JavaScript (ES6+), and Tailwind CSS.
            </li>
            <li>
              Integrated RESTful APIs and displayed dynamic data using Axios and
              React Hooks.
            </li>
            <li>
              Managed application state using Redux Toolkit and Context API for
              scalable state management.
            </li>
            <li>
              Optimized application performance by implementing lazy loading,
              code splitting, and memoization.
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <p className=" my-3 inline-block border-2 p-2 bg-[#193755] rounded-lg">
          2 Years of Experience
        </p>
        <a href="../../public/Venumadhav_Resume.pdf" download>
          <button className=" mt-4 bg-[#1073d6] border-2 block text-white border-[#1073d6] py-2 px-4 rounded-lg">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
