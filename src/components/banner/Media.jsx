import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub ,FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNodedotjs} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media