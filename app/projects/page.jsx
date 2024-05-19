"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/w2.png",
    category: "next js",
    name: "M-One Solution Website",
    description: "",
    link: "https://m-one-solution.vercel.app/",
    github: "https://github.com/Zaidan07/MOneSolution",
  },
  {
    image: "/work/w3.png",
    category: "next js",
    name: "Blendtopia Website",
    description: "",
    link: "https://blendtopia.vercel.app/",
    github: "https://github.com/Zaidan07/Blendtopia",
  },
  {
    image: "/work/w1.png",
    category: "next js",
    name: "Simaku Website",
    description: "",
    link: "https://simaku.vercel.app/",
    github: "https://github.com/Zaidan07/landingpage",
  },
  {
    image: "/work/w4.png",
    category: "Bootstrap",
    name: "Cafe Shop Website",
    description: "",
    link: "https://kafuchino-coffe.netlify.app/",
    github: "https://github.com/Zaidan07/Kafuchino",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-tittle mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full  md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:mx-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
