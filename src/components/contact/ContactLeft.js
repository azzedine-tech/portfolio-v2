import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn , FaGithub} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Azzedine El Khamlichi</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        MERN stands for MongoDB, Express, React, Node, after the four
         key technologies that make up the stack. ... Express and Node
          make up the middle (application) tier.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+212 617957408</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">azzedinekhamlichi2@gmail.com</span>
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100012629289211">
          <span className="bannerIcon"> 
            <FaFacebookF />
          </span>
          </a>
          <a href="https://twitter.com/azzedinekhamli2">
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/azzedine-khamlichi-32883017b/">
            
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
          <a href="https://github.com/AzzzedineTech">
          <span className="bannerIcon">
            <FaGithub/>
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft