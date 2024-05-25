import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import styles from "../../bubble.module.css";

export default function ContactInfo() {
  return (
    <>
      <h2 className="font-custom mt-10 text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl hover:cursor-default">
        {"Get in touch.".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-200">
        I'm excited to learn about your project and explore how we can
        collaborate to create something truly amazing. Your online success is my
        priority, and I'm ready to contribute with my skills, creativity, and
        dedication.
      </p>
      <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Address</span>
            <BuildingOffice2Icon
              className="h-7 w-6 text-blue-400"
              aria-hidden="true"
            />
          </dt>
          <dd className="text-gray-400">High Point, NC 27265</dd>
        </div>
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Telephone</span>
            <PhoneIcon className="h-7 w-6 text-blue-400" aria-hidden="true" />
          </dt>
          <dd>
            <a className="text-gray-400" href="tel:+1 (336) 880-4416">
              +1 (336) 880-4416
            </a>
          </dd>
        </div>
        <div className="flex gap-x-4">
          <dt className="flex-none">
            <span className="sr-only">Email</span>
            <EnvelopeIcon
              className="h-7 w-6 text-blue-400"
              aria-hidden="true"
            />
          </dt>
          <dd>
            <a className="text-gray-400" href="mailto:hello@example.com">
              ultimategauntletdev@gmail.com
            </a>
          </dd>
        </div>
      </dl>
    </>
  );
}
