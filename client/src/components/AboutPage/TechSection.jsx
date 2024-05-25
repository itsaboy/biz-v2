import { motion } from "framer-motion";
import { techLogos } from "../../data/techLogos.js";
import { scrollVariants } from "../../data/animations.js";

export default function Tech() {
  return (
    <div className="mx-auto mt-2 max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-400/80 px-6 py-24 text-center shadow-xl shadow-blue-400/40 ring-2 ring-gray-900 sm:rounded-3xl sm:px-16">
        <h2 className="font-custom mx-auto max-w-2xl text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
          Technologies
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-950">
          In an ever-evolving digital landscape, staying ahead with the latest
          and most efficient technologies is paramount. My toolkit includes a
          versatile array of programming languages, frameworks, and tools
          designed to deliver high-quality, scalable, and robust web solutions.
          Here's a snapshot of what I work with:
        </p>
        <div className="mx-auto mt-20 grid sm:grid-cols-3 md:grid-cols-5 items-center gap-x-8 gap-y-12">
          {techLogos.map((logo) => (
            <motion.img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="place-self-center"
              whileHover={{ scale: 1.1 }}
              variants={scrollVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            />
          ))}
        </div>
        <div
          className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-blue-800 to-blue-900 opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
