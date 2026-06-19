"use client";

import { useState } from "react";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";
import { MdEmail, MdSearch, MdWork } from "react-icons/md";
import Link from "next/link";
import { getPortfolioData, Project } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { lang, setLang } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const data = getPortfolioData(lang);
  const { profile, projects, ui } = data;

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    const matchTitle = project.title.toLowerCase().includes(searchLower);
    const matchTech = project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchLower)
    );
    const matchDesc = project.description.some((desc) =>
      desc.toLowerCase().includes(searchLower)
    );
    return matchTitle || matchTech || matchDesc;
  });

  const personalProjects = filteredProjects.filter(p => p.category === "personal");
  const professionalProjects = filteredProjects.filter(p => p.category === "professional");

  const ProjectCard = ({ project }: { project: Project }) => (
    <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900">
          {project.title}
        </h3>
        <span className="text-sm text-gray-500 mt-1 sm:mt-0 whitespace-nowrap bg-gray-50 px-2 py-1 rounded">
          {project.period}
        </span>
      </div>
      
      <p className="text-blue-600 font-medium text-sm mb-4">
        {project.role}
      </p>
      
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base">
        {project.description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-blue-50 text-blue-700 border border-blue-100 px-2 py-1 rounded text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline flex items-center mt-2"
        >
          <FaGithub size={14} className="mr-1" />
          {ui.viewRepo}
        </a>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-white shadow-sm py-12 px-6 sm:px-12 lg:px-24 relative">
        <div className="absolute top-6 right-6 flex items-center space-x-2">
          <FaGlobe className="text-gray-400" />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as "ja" | "en")}
            className="bg-transparent border-none text-sm text-gray-600 focus:ring-0 cursor-pointer"
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl text-blue-600 font-medium">
            {profile.title}
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <strong className="font-semibold">{profile.catchphrase}</strong>
            <br />
            {profile.description}
          </p>
          
          <div className="mt-6 flex items-center space-x-2 text-gray-600 bg-blue-50 w-fit px-4 py-2 rounded-md border border-blue-100">
            <MdWork size={20} className="text-blue-500" />
            <span className="font-medium text-sm sm:text-base">{profile.availability}</span>
          </div>

          <div className="mt-8 flex space-x-4">
            <Link
              href="/solutions"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition"
            >
              {ui.viewProduct}
            </Link>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition"
            >
              <FaGithub size={24} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={profile.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition"
            >
              <FaYoutube size={24} />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
            >
              <MdEmail size={24} />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 sm:px-12 lg:px-0">
        {/* Qualifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">{ui.qualifications}</h2>
          <ul className="space-y-3">
            {profile.qualifications.map((qual, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <span className="font-semibold text-gray-800">{qual.name}</span>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0 whitespace-nowrap">{qual.date}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">{ui.techStack}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.frontend.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.backend.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Infra / Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.infra.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">AI / Data</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.ai_data.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects / Experience Section */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b pb-2">
            <h2 className="text-2xl font-bold mb-4 sm:mb-0">{ui.experience}</h2>
            <div className="relative">
              <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder={ui.searchPlaceholder}
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-12">
            {filteredProjects.length === 0 ? (
              <p className="text-gray-500 italic">{ui.noProjects}</p>
            ) : (
              <>
                {/* Professional Experience Section */}
                {professionalProjects.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm mr-3">Work</span>
                      {ui.professionalExp}
                    </h3>
                    <div className="space-y-6">
                      {professionalProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Personal Development Section */}
                {personalProjects.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm mr-3">Personal</span>
                      {ui.personalDev}
                    </h3>
                    <div className="space-y-6">
                      {personalProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-8 mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nakano System. All rights reserved.</p>
      </footer>
    </div>
  );
}
