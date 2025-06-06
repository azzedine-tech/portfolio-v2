import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projects, projectsFor, projectsfive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Adopt Me"
          des="Adopt Me is a web application that simplifies the process of adopting animals by 
          connecting users with animal shelters and rescue organizations in their area. 
          The application utilizes an API to gather information on available animals and 
          presents it to users in an easy-to-use interface. "
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="I designed a responsive multi-page ecommerce website using html css and java script :
          Modern css techniques to create stunning designs and effects.
          How to use common components and layout patterns to professionally design and develop websites."
          src={projectTwo}
        />
        <ProjectsCard
          title="MovieLand Website"
          des="Filmland is a fully responsive movie website page,Responsive
           for all devices, built using HTML, CSS, and JavaScript."
          src={projectThree}
        />
        <ProjectsCard
          title="Push_Swap"
          des="This project comprises an interesting case
           study regarding sorting algorithms and its performances,
            being part of the core curriculum of all 42 schools worldwide. "
          src={projects}
        />
        <ProjectsCard
          title="website Banin for a restaurant"
          des="As part of my portfolio, I developed
           Banin a responsive website for a restaurant. 
           The website is optimized for all devices and built
            using HTML, CSS, and JavaScript."
          src={projectsFor}
        />
        <ProjectsCard
          title="So_long 2D GAME"
          des="Solong, a project from the 42 curriculum,
           allowed me to explore 2D game development and apply
            my C programming skills to create a functional game
             using the Minilibx Library"
          src={projectsfive}
        />
      </div>
    </section>
  );
}

export default Projects