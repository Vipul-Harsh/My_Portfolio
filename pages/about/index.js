// icons
import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaJava
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiVisualstudio,
  SiCplusplus,
  SiGithub,
  SiMongodb
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import ParticlesContainer from "../../components/ParticlesContainer";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
          <FaNodeJs key="wordpress" />,
          <SiMongodb key="wordpress" />,
        ],
      },
      {
        title: "Programming",
        icons: [
          <FaJava key="figma" />,
          <SiCplusplus key="adobexd" />,
          <SiVisualstudio key="adobephotoshop" />,
          <SiGithub key="adobephotoshop" />
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "MERN Stack Development trainee",
        stage: "2023",
      },

      {
        title: "IT Hackathon Poornima",
        stage: "2023",
      },
      {
        title: "iNeuron Hakathon",
        stage: "2022",
      },
      {
        title: "Full Stack Development Course",
        stage: "2022",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer Intern - RightLabs Company",
        stage: " Feb 2024 - Present",
      },
      {
        title: "Web Developer Intern - NayePankh Foundation",
        stage: "Nov 2023 - Dec 2023",
      },
      
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "(B.Tech) - Jaipur Engineering College And Research Center",
        stage: "2021 - 2025 - CGPA 9.35",
      },
      {
        title: "(Senior Secondary) - MPS International School ",
        stage: "2019 - 2021 - 90.1%",
      },
      {
        title: "(Secondary) - MPS International School",
        stage: "2019 - 91.2%",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    
    <div className="h-full py-32 text-center xl:text-left bg-primary/30  ">
    <ParticlesContainer/>
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div>
      <motion.div
      variants={fadeIn('right',0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
       className="container mx-auto z-10 h-full flex flex-col xl:flex-row items-center gap-x-6 ">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            About me
          </h2>
          <p className="z-10">
            Hello reader! I am vipul harsh currently pursuing Bachelors degree from 
            JECRC Foundation. I have expertise in Web development with MERN.
            I have gained hands on experience with technologies like React,Next js,
            MongoDb ,Node Js ,wordpress and many more and have done various projects as well as internshipps in same domain to upskill myself.
            
          </p>
          <div>
            <div className="flex flex-1 xl:gap-x-6 ">

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={4}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Months of expirience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={4}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Projects
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={4}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Certificates
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]  ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 xl:py-12 sm:py-4 hidden sm:flex">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index == itemIndex &&
                    "text-accent  after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer  capitalize relative
            after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-7 flex flex-col gap-y-5 xl:gap-y-4 items-center xl:items-start hidden sm:flex">
            {aboutData[index].info.map((info,idx)=>{
              return <div key={idx}>
                <div>
                  {info.title}
                </div>
                <div className="hidden md-flex">-</div>
                <div>{info.stage}</div>
                <div className="flex gap-x-4">
                  {info.icons?.map((icon,iconIndex)=>{
                    return <div key={iconIndex} className="text-3xl text-white ">{icon}</div>
                  })}
                </div>
              </div>
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
