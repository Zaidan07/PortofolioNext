"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/w2.png",
    category: "next js",
    name: "M-One Solution Website",
    description:
      "",
    link: "https://m-one-solution.vercel.app/",
    github: "https://github.com/Zaidan07/MOneSolution",
  },
  {
    image: "/work/w3.png",
    category: "next js",
    name: "Blendtopia Website",
    description:
      "",
    link: "https://blendtopia.vercel.app/",
    github: "https://github.com/Zaidan07/Blendtopia",
  },
  {
    image: "/work/w1.png",
    category: "next js",
    name: "Simaku Website",
    description:
      "",
    link: "https://simaku.vercel.app/",
    github: "https://github.com/Zaidan07/landingpage",
  },
  {
    image: "/work/w4.png",
    category: "Bootstrap",
    name: "Cafe Shop Website",
    description:
      "",
    link: "https://kafuchino-coffe.netlify.app/",
    github: "https://github.com/Zaidan07/Kafuchino",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center">
          <h2 className="section-tittle mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            These are some of the projects I have worked on
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
