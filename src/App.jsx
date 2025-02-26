import heroImage from "/portfolioSudhanshu/hero.png";
import pra from "/portfolioSudhanshu/projectA.jpg";

import { useState, useEffect } from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProf, setProf] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const [showSummary, setShowSummary] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen no-select">
            <div className="flex flex-col items-center justify-center w-[60vw] mx-auto">

                {/* Navbar */}
                <nav className="bg-slate-700 text-white rounded-b-2xl p-4 w-[130%] shadow-lg">
                    <div className="flex justify-between items-center">

                        {/* Left Section */}
                        <div className="flex items-center gap-5">
                            <button onClick={() => setProf(!isProf)}
                                className={`p-3 rounded-2xl text-lg font-bold shadow-md transition w-15 
    ${isProf ? "bg-slate-900 text-white" : "bg-white text-slate-900"} 
    hover:bg-slate-800 hover:text-gray-200 hover:scale-110`}
                            >
                                S
                            </button>
                            <span className="text-lg font-semibold">Sudhanshu's Portfolio</span>
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <button
                            className="md:hidden text-2xl focus:outline-none transition-transform duration-300 hover:scale-105"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? "✖" : "☰"}
                        </button>

                        {/* Right Section (Desktop) */}
                        <div className="hidden md:flex items-center gap-5">
                            {/* <button onClick={() => setProf(!isProf)} className={`hover:bg-slate-800 hover:text-gray-200 p-2 rounded-lg transition ${isProf ? "bg-slate-900 " : ""}`} >Profile</button> */}
                            <button onClick={() => scrollToSection("education")} className="hover:bg-slate-800 hover:text-gray-200 p-2 rounded-lg transition">Education</button>
                            <button onClick={() => scrollToSection("skills")} className="hover:bg-slate-800 hover:text-gray-200 p-2 rounded-lg transition">Skills</button>
                            <button onClick={() => scrollToSection("projects")} className="hover:bg-slate-800 hover:text-gray-200 p-2 rounded-lg transition">Projects</button>
                            
                            <button onClick={() => scrollToSection("achievements")} className="hover:bg-slate-800 hover:text-gray-200 p-2 rounded-lg transition">Achievements</button>
                            <button onClick={toggleVisibility} className="bg-white text-slate-900 w-full p-2 font-bold rounded-lg shadow-md transition hover:scale-105">
                                {isVisible ? "Profile Pic" : "Contact"}
                            </button>


                        </div>


                    </div>

                    {/* Mobile Dropdown Menu */}
                    <div
                        className={`flex flex-col items-center gap-2 mt-4 bg-slate-800 text-white py-3 rounded-lg shadow-lg transition-all duration-300 transform ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"} md:hidden`}
                    >
                        {/* <button onClick={() => setProf(!isProf)} className={`hover:bg-slate-600 hover:text-gray-200 p-2 rounded-lg transition ${isProf ? "bg-slate-900 " : ""}`} >Profile</button> */}
                        <button onClick={() => scrollToSection("education")} className="hover:bg-slate-600 hover:text-gray-200 p-2 px-6 rounded-lg transition">Education</button>
                        <button onClick={() => scrollToSection("skills")} className="hover:bg-slate-600 hover:text-gray-200 p-2 px-6 rounded-lg transition">Skills</button>
                        <button onClick={() => scrollToSection("projects")} className="hover:bg-slate-600 hover:text-gray-200 p-2 px-6 rounded-lg transition">Projects</button>
                        <button onClick={() => scrollToSection("achievements")} className="hover:bg-slate-600 hover:text-gray-200 p-2 rounded-lg transition">Achievements</button>
                        <button onClick={toggleVisibility} className="bg-white text-slate-900 w-[96%] p-2 font-bold rounded-lg shadow-md transition hover:bg-slate-600 hover:text-gray-200 ">
                            {isVisible ? "Profile Pic" : "Contact"}
                        </button>
                    </div>

                    <div
                        className={`flex flex-wrap items-center justify-start gap-2 p-3 mt-4 bg-slate-800 text-white py-3 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${isProf ? "opacity-100 scale-100 translate-y-0 flex" : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none hidden"
                            }`}
                    >
                        <a
                            href="https://github.com/sudhaanshu94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:w-auto w-full py-3 bg-[#181717] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#333] hover:scale-105 hover:shadow-xl"
                        >Github</a>
                        <a
                            href="https://www.linkedin.com/in/sudhanshu-singh-943181288/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:w-auto w-full py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#005582] hover:scale-105 hover:shadow-xl"
                        >Linkedin</a>
                        <a
                            href="https://leetcode.com/u/sudhaanshu94/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:w-auto w-full py-3 bg-[#222] text-[#FFA116] font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#333] hover:scale-105 hover:shadow-xl"
                        >Leetcode</a>
                        <a
                            href="https://codeforces.com/profile/sudhaanshu94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:w-auto w-full py-3 bg-[#1F1F1F] text-[#FFCC00] font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#333] hover:scale-105 hover:shadow-xl"

                        >Codeforces</a>
                        <a
                            href="https://codolio.com/profile/sudhaanshu94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 sm:w-auto w-full py-3 bg-[#1F1F1F] text-orange-100 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:bg-[#333] hover:scale-105 hover:shadow-xl"

                        >Codolio</a>
                    </div>


                </nav>

                {/* Hero Section */}
                <div className="flex flex-wrap justify-center gap-6 w-[125%] p-6">

                    {/* Left Side - Intro Card */}
                    <div className="flex overflow-hidden items-center justify-center  rounded-3xl bg-slate-900 h-[45vh] w-full md:w-[48%]  transition  hover:scale-102">
                        <div
                            className="flex items-center justify-center border-2 bg-neutral-100 border-gray-300 rounded-3xl w-full shadow-xl h-[45vh] pl-3 pt-3 overflow-hidden transition hover:scale-102 cursor-pointer"
                            onClick={() => setShowSummary(!showSummary)}
                        >
                            {showSummary ? (
                                <div className="flex flex-wrap justify-between items-center h-full w-full p-3">
                                    <h1 className="text-3xl sm:text-3xl font-bold text-slate-900 mb-2">
                                        Professional Summary
                                    </h1>
                                    <p className="text-gray-800 text-lg leading-relaxed break-words text-justify p-2">
                                        Passionate software engineer with expertise in problem-solving, full-stack development, and machine learning. Adept at designing scalable and efficient solutions, optimizing performance, and collaborating in dynamic team environments. Strong ability to adapt to emerging technologies, streamline workflows, and drive innovation in software development.
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-wrap justify-between items-center h-full w-full">
                                    <div className="px-6 sm:mt-3 w-full overflow-hidden">
                                        <small className="text-lg text-gray-500 block">Hi, I'm</small>
                                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 sm:mt-1 leading-tight">
                                            Sudhanshu Singh
                                        </h1>
                                        <p className="sm:mt-3 text-gray-800 text-lg leading-relaxed break-words overflow-hidden text-ellipsis">
                                            CSE 3rd year student | Enthusiastic engineer eager to work efficiently and solve problems effectively.
                                        </p>
                                        <div className="md:hidden sm:flex lg:flex flex-wrap justify-start gap-3 sm:mt-6 mt-4">
                                            <a
                                                className="border-2 border-gray-300 text-slate-900 px-5 mr-1 py-2 rounded-lg shadow-lg bg-gray-200 transition-transform duration-300 hover:scale-105"
                                                href="https://docs.google.com/document/d/10hrkU2UyrM5Y0lCp_IqFJykF82GX47DP/edit?usp=drive_link&amp;ouid=113589517672613341860&amp;rtpof=true&amp;sd=true"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e)=>e.stopPropagation()}
                                            >
                                                View Resume
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Right Side - Image */}
                    <button onClick={toggleVisibility} className="flex hero-yellow overflow-hidden items-center justify-center border-2 rounded-3xl bg-slate-900 h-[45vh]  w-full md:w-[48%]    transition  hover:scale-102">

                        {/* Right Side - Image (Below) not enlarged */}
                        {!isVisible && <div className="hero-image w-[48%] h-[112%] md:w-[48%] flex justify-center ">
                            <img
                                src={heroImage}
                                alt="hero image"
                                className="hero max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-cover h-auto"
                            />
                        </div>
                        }
                        {isVisible && (
                            <div className="p-6 bg-gradient-to-br from-slate-100 to-gray-200 shadow-xl rounded-lg w-full border border-gray-300 flex flex-col items-center">
                                {/* Profile Icon */}
                                <div className="w-25 h-25 bg-slate-800 hero-yellow overflow-hidden text-white flex items-center justify-center rounded-full text-3xl font-bold shadow-lg object-cover overflow:hidden">
                                    <img
                                        src={heroImage}
                                        alt="hero image"
                                        className="hero object-cover h-auto"
                                    />
                                </div>

                                {/* Name */}
                                <h2 className="text-2xl font-bold text-gray-900 mt-3">Sudhanshu Singh</h2>

                                {/* Contact Details */}
                                <div className="mt-4 space-y-3 text-center">
                                    <p className="text-gray-700">
                                        📧 <span className="font-semibold text-gray-900">Email:</span>
                                        <a href="mailto:sudhaanshu94@gmail.com" className="text-blue-600 hover:underline ml-1">sudhaanshu94@gmail.com</a>
                                    </p>
                                    <p className="text-gray-700">
                                        📞 <span className="font-semibold text-gray-900">Phone:</span>
                                        <a href="tel:+917009690827" className="text-blue-600 hover:underline ml-1">+91 70096 90827</a>
                                    </p>
                                    <p className="text-gray-700">
                                        📍 <span className="font-semibold text-gray-900">Address:</span> Moonak, Punjab, India
                                    </p>
                                </div>

                                {/* Social Media Links */}
                                <div className="mt-5 flex gap-4">
                                    <a href="https://github.com/sudhaanshu94" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition transform hover:scale-110">
                                        🔗 GitHub
                                    </a>
                                    <a href="https://codeforces.com/profile/sudhaanshu94" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition transform hover:scale-110">
                                        🔗 Codeforces
                                    </a>
                                </div>
                            </div>

                        )}



                    </button>
                </div>

                {/* Education Section */}
                <h1 id="education" className="text-center mt-14 mb-6 ">
                    <div className="font-extrabold text-5xl text-gray-900 drop-shadow-lg">Education</div>
                    <div className="text-gray-500 text-lg tracking-widest uppercase">Background</div>
                </h1>

                <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-full border-3 rounded-xl gap-2 p-8 bg-zinc-200 shadow-lg">

                    {/* 10th (CBSE) */}
                    <div className="p-4 bg-gray-50 shadow-sm rounded-lg border border-gray-300 w-full sm:w-[30%]">
                        <h2 className="text-lg font-semibold text-slate-900">10th (CBSE)</h2>
                        <p className="text-gray-700">B.B.B. D.A.V. Sr. Sec. Public School, Moonak</p>
                        <p className="text-gray-800 font-medium">93.00% | 2019</p>
                    </div>

                    {/* 12th (CBSE) */}
                    <div className="p-4 bg-gray-50 shadow-sm rounded-lg border border-gray-300 w-full sm:w-[30%]">
                        <h2 className="text-lg font-semibold text-slate-900">12th (CBSE)</h2>
                        <p className="text-gray-700">B.B.B. D.A.V. Sr. Sec. Public School, Moonak</p>
                        <p className="text-gray-800 font-medium">96.40% | 2021</p>
                    </div>

                    {/* Bachelor of Engineering */}
                    <div className="p-4 bg-gray-50 shadow-sm rounded-lg border border-gray-300 w-full sm:w-[30%]">
                        <h2 className="text-lg font-semibold text-slate-900">Bachelors Of Engineering (CSE) (AI & ML)</h2>
                        <p className="text-gray-700">Chandigarh University, Mohali</p>
                        <p className="text-gray-800 font-medium">9.03 CGPA | 2022 - 2026</p>
                    </div>

                </div>



                {/* Skills Section */}
                <h1 id="skills" className="text-center mb-6 mt-14">
                    <div className="text-gray-500 text-lg tracking-widest uppercase">About Me</div>
                    <div className="font-extrabold text-5xl text-slate-900 drop-shadow-md">Skills</div>
                </h1>

                <section className="flex flex-wrap md:flex-nowrap justify-between items-center w-full border-3 rounded-xl py-2 px-5 bg-zinc-200 shadow-lg">
                    {/* Left Side - Technical Skills */}
                    <div className="flex flex-wrap gap-4 w-full md:w-1/2 p-1">
                        {["DSA", "Competitive Programming", "C++", "React", "Tailwind", "JavaScript", "Machine Learning", "SQL Server", "OS - Linux"].map((skill, index) => (
                            <span
                                key={index}
                                className="bg-zinc-600 w-full md:w-auto text-white border border-zinc-700 p-3 
                           rounded-md shadow-md font-semibold text-lg text-center 
                           transition-transform duration-300 hover:bg-zinc-700 hover:scale-105"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Right Side - Text with Bold Keywords */}
                    <div className="text-left w-full md:w-1/2 p-5 text-gray-800 text-lg leading-relaxed justify-text">

                        <b>Technical Skills : </b>
                        Hi, I'm <span className="font-bold text-slate-900">Sudhanshu Singh</span>, a
                        <span className="font-bold text-zinc-700"> Bachelor of Engineering (CSE) student</span>, eager to apply my technical skills in
                        <span className="font-bold text-zinc-700"> problem-solving</span>,
                        <span className="font-bold text-zinc-700"> software development</span>, and
                        <span className="font-bold text-zinc-700"> data-driven applications</span>.
                        My expertise spans across
                        <span className="font-bold text-zinc-700"> Competitive Programming</span>,
                        <span className="font-bold text-zinc-700"> Full-Stack Development</span>, and
                        <span className="font-bold text-zinc-700"> Machine Learning (ML)</span>,
                        making me a well-rounded and adaptable developer.
                    </div>
                </section>

                {/* Internal/Personal Skills Section */}
                <section className="flex flex-wrap md:flex-nowrap justify-between items-center w-full border-3 rounded-xl py-2 px-5 bg-neutral-300 mt-2 shadow-lg">
                    {/* Left Side - Personal Skills */}
                    <div className="flex flex-wrap gap-4 w-full md:w-1/2 p-1">
                        {["Leadership", "Teamwork", "Time Management", "Adaptability", "Critical Thinking", "Creativity", "Communication", "Proactive"].map((skill, index) => (
                            <span
                                key={index}
                                className="bg-neutral-600 w-full md:w-auto text-white border border-zinc-700 p-3 
                           rounded-md shadow-md font-semibold text-lg text-center 
                           transition-transform duration-300 hover:bg-zinc-700 hover:scale-105"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Right Side - Description */}
                    <div className="text-left w-full md:w-1/2 p-6 text-gray-800 text-lg leading-relaxed justify-text">
                        <b>Interpersonal Skills : </b>
                        Beyond technical expertise, I believe in the power of
                        <span className="font-bold text-zinc-700"> effective communication</span>,
                        <span className="font-bold text-zinc-700"> teamwork</span>, and
                        <span className="font-bold text-zinc-700"> leadership</span> to drive innovation and success.
                        My ability to <span className="font-bold text-zinc-700"> adapt</span> and
                        <span className="font-bold text-zinc-700"> think critically</span> allows me to solve complex problems efficiently.
                        Whether it's <span className="font-bold text-zinc-700"> time management</span> or
                        <span className="font-bold text-zinc-700"> creativity</span>, I strive to bring a holistic approach to both professional and personal growth.
                    </div>
                </section>


                {/* projects */}
                <section id="projects" className="mt-18 w-[130%] h-auto">
                    <h1 className="text-center mb-6 ">
                    <div className="text-gray-500 text-lg tracking-widest uppercase">recent creations</div>
                    <div className="font-extrabold text-5xl text-gray-900 drop-shadow-lg">Projects</div>
                    </h1>

                    <div className="p-6">
                        <div className="flex flex-wrap justify-center w-full h-full p-5 gap-15">
                            {[
                                { title: "Currency Converter", img: pra, link: "https://sudhaanshu94.github.io/currencyConverter/" },
                                { title: "Project B", img: heroImage, link: "/project-b" },
                                { title: "Project C", img: heroImage, link: "/project-c" },
                                { title: "Project D", img: heroImage, link: "/project-d" },
                                { title: "Project E", img: heroImage, link: "/project-e" },
                            ].map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-auto h-[30vh] rounded-3xl overflow-hidden shadow-xl transform transition-all duration-200 hover:scale-105 hover:-rotate-2"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(15px)",
                                        border: "1px solid rgba(255, 255, 255, 0.3)",
                                        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
                                    }}
                                >
                                    {/* Image Section */}
                                    <div className="relative w-full h-[85%] overflow-hidden">
                                        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    </div>

                                    {/* Title Section */}
                                    <div className="absolute bottom-0 bg-gray-100 text-gray-900 text-xl font-semibold text-center w-full p-2">
                                        {project.title}
                                    </div>

                                    {/* Subtle Light Glow on Hover */}
                                    {/* <div className="absolute -inset-2 bg-white/10 opacity-0 group-hover:opacity-30 transition duration-500 blur-2xl"></div> */}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Achievements & Responsibilities Section */}
                <h1 id="achievements" className="text-center mt-14 mb-6 ">
                    <div className="font-extrabold text-5xl text-gray-900 drop-shadow-lg">Achievements & Responsibilities</div>
                    <div className="text-gray-500 text-lg tracking-widest uppercase">Milestones & Leadership</div>
                </h1>

                <div className="sm:w-full bg-zinc-200 shadow-lg rounded-xl p-8 border-3 overflow-hidden w-[120%]">
                    {/* Competitive Programming Achievements */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 drop-shadow-md border-l-4 border-slate-500 pl-4">
                            Competitive Programming
                        </h2>
                        <ul className="list-disc pl-8 text-gray-800 text-lg leading-relaxed mt-3 space-y-2">
                            <li>Achieved a CodeForces max rating of<span className="font-semibold text-green-900"> 1322  (Pupil)</span>.</li>
                            <li>Among Sparkplug <span className="font-semibold text-green-900">Top 100</span> YEAR-2025.</li>
                            <li>Solved over <span className="font-semibold text-red-900">500+ Data Structures & Algorithms problems</span> across multiple coding platforms.</li>
                        </ul>
                    </div>

                    {/* Academic & Exam Achievements */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 drop-shadow-md border-l-4 border-neutral-500 pl-4">
                            Academic Excellence
                        </h2>
                        <ul className="list-disc pl-8 text-gray-800 text-lg leading-relaxed mt-3 space-y-2">
                            <li>Secured <span className="font-semibold text-red-900">Rank 7</span> in AMCAT, CSE Department at Chandigarh University.</li>
                            <li>Selected for the <span className="font-semibold text-red-900">Elite Kargil Batch</span> in the second year, recognizing academic and technical excellence.</li>
                        </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 drop-shadow-md border-l-4 border-gray-500 pl-4">
                            Leadership & Responsibilities
                        </h2>
                        <ul className="list-disc pl-8 text-gray-800 text-lg leading-relaxed mt-3 space-y-2">
                            <li>Serving as the <span className="font-semibold text-red-900">Training, Placement, and Program Representative</span> for Batch 2026 (AIT CSE, Chandigarh University).</li>
                        </ul>
                    </div>

                </div>




                <div className="m-15"></div>
            </div>
        </div>
    );
}

export default App;
