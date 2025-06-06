import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { textVariant } from "../../utils/motion";
import { motion } from 'framer-motion';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">azzedine elkhamlichi</span>
        </h1>
        <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> 
      </ul>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
      
          <motion.p variants={textVariant()} className="text-base font-bodyFont leading-6 tracking-wide">
        I build things for the web. 
        I'm a Software Engineer a web developer with 3+ years of experience in React. I have a strong 
        foundation in front-end & back-end development and am skilled in creating
        user-friendly and responsive web applications using React and its ecosystem.
        </motion.p>
         
        
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner;