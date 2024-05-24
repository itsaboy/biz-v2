import { Link } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import ButtonOne from "../ButtonOne";
import styles from "../../bubble.module.css";
import logo from "../../assets/logo.svg";

export default function HomeTextSection() {
  return (
    <div className="px-6 lg:px-0 lg:pt-4">
      <div className="mx-auto max-w-2xl">
        <div className="max-w-lg">
          <img
            className="h-16 drop-shadow-2xl border-4 rounded-full border-blue-400"
            src={logo}
            alt="Your Company"
          />
          <div className="mt-12" />
          <h2 className="mt-10 text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl hover:cursor-default">
            {"Building digital experiences that resonate."
              .split("")
              .map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From concept to creation, your vision is the blueprint for a
            uniquely crafted website that speaks directly to your audience.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link to="/pricing">
              <ButtonOne
                text={"Pricing Plans"}
                icon={<CurrencyDollarIcon className="h-6 w-auto" />}
              />
            </Link>
            <a
              href="https://github.com/itsaboy"
              target="_blank"
              className="text-sm font-semibold leading-6 text-gray-200 hover:text-blue-600"
            >
              View GitHub <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
