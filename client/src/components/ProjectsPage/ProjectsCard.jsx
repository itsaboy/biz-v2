import React from "react";
import { projects } from "../../data/projects.js";

export default function ProjectsCard() {
  return (
    <>
      {projects.map((post) => (
        <article
          key={post.id}
          className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-slate-600 p-4 rounded-2xl shadow-lg shadow-indigo-400/40 ring-2 ring-slate-900"
        >
          <div className="relative w-full">
            <img
              src={post.imageUrl}
              alt={post.alt}
              className="aspect-[16/9] w-full rounded-2xl bg-slate-950 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          </div>
          <div className="max-w-xl">
            <div className="mt-6">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-indigo-300 hover:text-slate-400">
                <a href={post.href} target="_blank">
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 mb-2 text-sm leading-6 text-slate-200">
                {post.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
