
import React from 'react';
import { projects } from './projectdata';
export default function Project() {
  
let projectsui =projects.map((project) => (
  <div key={project.id} className="flex flex-col border-2 p-5">
    <img src={project.image} className="h-40 w-full" alt={project.title} />
    <div className="flex flex-col mt-10">
      <h1 className="mb-5 text-2xl font-bold">{project.title}</h1>
      <p>{project.description}</p>
      <div className="flex justify-evenly">
        <div className="my-5 border-2 px-5 rounded-full py-1">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="my-5 border-2 px-5 rounded-full py-1">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
))
  return (
    <div className="grid grid-cols-3 gap-10 w-9/10 mx-auto my-20">
      {projectsui}
    </div>
  );
}
