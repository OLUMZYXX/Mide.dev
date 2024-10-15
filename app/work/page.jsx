"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend Project",
    title: "Project 1",
    description:
      "Developed a fully responsive Apple clone website, replicating the sleek design and functionality of the original. Utilized modern web technologies to create an interactive, pixel-perfect user experience across all devices.",
    stack: [
      { name: "Next.js" },
      { name: "tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/iphone.jpg",
    live: "https://appl-website-clone.vercel.app",
    github: "https://github.com/OLUMZYXX/Appleeee-website-clone",
  },
  {
    num: "02",
    category: "Frontend Project",
    title: "Project 2",
    description:
      "Developed a sleek, responsive modern furniture website showcasing products with clean design and intuitive navigation. Leveraged HTML, CSS, and JavaScript to create an engaging user experience with a focus on minimalism and elegance",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend Project",
    title: "Project 3",
    description:
      "Developed a fully functional restaurant website with a modern, user-friendly interface, incorporating dynamic menus, reservations, and online ordering. Utilized a full stack of technologies, including React for the front end and Node.js for the back end, ensuring a seamless and responsive user experience",
    stack: [
      { name: "Html 5" },
      { name: "tailwind.css" },
      { name: "Javascript" },
      { name: "Node.js" },
    ],
    image: "/assets/work/restaurant.png",
    live: "https://food-website-react-ui.vercel.app",
    github: "https://github.com/OLUMZYXX/Food-Website-React-Ui",
  },
];

const Work = () => {
  // dont forget to use the {project[0]} back in the use state
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (Swiper) => {
    const currentIndex = Swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60 mt-5">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 mt-8">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex gap-4 items-center">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center flex group mt-9">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* gitHub project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center flex group mt-9">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repsitory</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xh:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full ng-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cove"
                          alt="project image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Button */}
              <WorkSliderBtns
                // css appliend isnt working check back
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between rounded"
                btnStyles="bg-accent hover:hg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
