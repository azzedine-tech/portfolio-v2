import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="informatique & security"
            subTitle="University abd almalak saudi science (2020 - 2022)"
            result="maroc"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Scool  codeacademy (2020 - 2022)"
            result="online"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title=" Software Engineer"
            subTitle="FreeCodeCamp (2020 - 2023)"
            result="online"
            des="A full-stack engineer can get a project done from start to finish, back-end to front-end.

            Includes JavaScript, Node.JS, SQL, Express.JS, React, TDD, and more."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-3 lgl:mt w-full h-[700px] border-l-[6px] border-l-black border-opacity-40 flex flex-col gap-5">
          <ResumeCard
            title=" front-end developer"
            subTitle=" Arafa Tech"
            result="maroc"
            des="Arafa Tech is a platform that provides coding education and mentorship to underprivileged students, empowering them with technical skills for the future."
          />
           <ResumeCard
            title=" developer web"
            subTitle="NTT DATA"
            result="maroc"
            des="is a top 10 global IT services provider, headquartered in Tokyo, with over 140,000 employees and operating in more than 50 countries."
          />
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education