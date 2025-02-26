import { useState } from "react";

const projects = [
    {
        title: "Currency Converter",
        img: `${import.meta.env.BASE_URL}projectA.jpg`,
        link: "https://sudhaanshu94.github.io/currencyConverter/",
        github: "https://github.com/sudhaanshu94/currencyConverter",
        techStack: ["JavaScript", "CSS", "HTML", "API Integration"]
    },
    {
        title: "Project B",
        img: `${import.meta.env.BASE_URL}hero.png`,
        link: `${import.meta.env.BASE_URL}project-b`,
        github: "https://github.com/sudhaanshu94/project-b",
        techStack: ["React", "Tailwind", "Firebase"]
    },
    {
        title: "Project C",
        img: `${import.meta.env.BASE_URL}hero.png`,
        link: `${import.meta.env.BASE_URL}project-c`,
        github: "https://github.com/sudhaanshu94/project-c",
        techStack: ["Node.js", "Express", "MongoDB"]
    },
    {
        title: "Project D",
        img: `${import.meta.env.BASE_URL}hero.png`,
        link: `${import.meta.env.BASE_URL}project-d`,
        github: "https://github.com/sudhaanshu94/project-d",
        techStack: ["Python", "Flask", "PostgreSQL"]
    },
    {
        title: "Project E",
        img: `${import.meta.env.BASE_URL}hero.png`,
        link: `${import.meta.env.BASE_URL}project-e`,
        github: "https://github.com/sudhaanshu94/project-e",
        techStack: ["Next.js", "TypeScript", "Tailwind"]
    },
];

export default function ProjectGrid() {
    return (
        <div className="p-6">
            <div className="flex flex-wrap justify-center gap-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative w-56 h-72 rounded-xl shadow-lg bg-neutral-200 border-3 border-zinc-800 p-3 flex flex-col items-center transition-all duration-300 hover:scale-105 group"
                    >
                        {/* Image Section (Expands to Touch Tech Stack Top) */}
                        <div className="relative w-[95%] h-[75%] rounded-lg border-3 border-gray-500 overflow-hidden bg-gray-100">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Tech Stack (Appears on Hover) */}
                            <div className="absolute inset-0 bg-neutral-800 bg-opacity-90 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-sm font-bold ">Tech Stack</p>
                                <div className="flex flex-wrap justify-center gap-2 mt-2 w-[90%]">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="bg-gray-700 text-white px-2 py-1 text-xs rounded-md font-semibold shadow-md w-full text-center">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-xl mb-2 font-bold text-neutral-900">{project.title}</h3>

                        {/* Buttons */}
                        <div className="w-full mt-4 flex gap-2">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-stone-200 border-gray-900 border-2 text-gray-900 py-2 rounded-lg text-xs font-semibold hover:bg-stone-300 transition"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-stone-700 text-white py-2 rounded-lg text-xs font-semibold hover:bg-stone-600 transition"
                            >
                                Go Live
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
