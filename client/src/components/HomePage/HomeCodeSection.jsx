import { useState } from "react";
import HTMLSnippet from "./HTMLSnippet";
import ReactSnippet from "./ReactSnippet";

export default function HomeCodeSection() {
  const [code, setCode] = useState("html");

  const handleClick = (code) => {
    setCode(code);
  };

  return (
    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
      <div className="shadow-lg shadow-blue-400/40 ring-2 ring-gray-900 md:rounded-3xl">
        <div className="bg-blue-800 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
          <div
            className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-200 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
            aria-hidden="true"
          />
          <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
            <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
              <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                <div className="flex bg-gray-800/60 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                    <button
                      className={
                        code === "html"
                          ? `border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-gray-200 hover:cursor-default`
                          : `border-r border-gray-600/10 px-4 py-2`
                      }
                      onClick={() => handleClick("html")}
                    >
                      index.html
                    </button>
                    <button
                      className={
                        code === "react"
                          ? `border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-gray-200 hover:cursor-default`
                          : `border-r border-gray-600/10 px-4 py-2`
                      }
                      onClick={() => handleClick("react")}
                    >
                      App.jsx
                    </button>
                  </div>
                </div>
                <div className="px-6 pb-14 pt-6 text-blue-200/80">
                  {code === "html" && <HTMLSnippet />}
                  {code === "react" && <ReactSnippet />}
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
