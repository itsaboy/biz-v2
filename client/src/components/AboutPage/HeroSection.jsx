import AboutSVG from "./AboutSVG";
import styles from "../../bubble.module.css";
import img0005 from "../../assets/images/img0005.webp";

export default function Hero() {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-transparent pt-0 md:pt-14">
      <AboutSVG />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl lg:col-span-2 xl:col-auto hover:cursor-default">
            {"We can create web solutions that not only stand out but also stand the test of time."
              .split("")
              .map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-300">
              My dedication to is rooted in a relentless pursuit of excellence
              and a continuous learning ethos. The digital landscape is forever
              changing, and staying at the forefront of emerging trends and
              technologies is not just a professional obligation—it's a personal
              passion. This drive compels me to consistently hone my skills,
              ensuring that every project not only meets but exceeds client
              expectations.
            </p>
          </div>
          <img
            src={img0005}
            alt="a server rack ina  dark room"
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
          />
        </div>
      </div>
    </div>
  );
}
