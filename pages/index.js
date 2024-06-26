import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full  bg-gradient-to-r from-primary/10 via-black/10  to-black/10 ">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
 container  mx-auto h-full"
        >
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Hi There!
            <br />I am <span className="text-yellow-500">
              Vipul Harsh,
            </span>{" "}
            <br />I am into
            <span className="text-red-500"> Web Development</span>
            <br />
          </motion.h1>

          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-100"
          >
            If you want to work with me or have some ideas for projects, Hire
            me!
            <button className="bg-yellow-600 p-4 rounded-full flex flex-col justify-center hover:cursor-pointer hover:bg-yellow-900 hidden md:inline-block">
              Download CV
            </button>
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:hidden relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
      xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[300px] max-h-[530px] absolute -bottom-30 lg:bottom-1 lg:right-[15%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
