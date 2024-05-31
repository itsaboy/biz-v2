import { CheckIcon } from "@heroicons/react/20/solid";
import { devOps } from "../../data/devOps.js";

export default function DevOpsCards() {
  return (
    <>
      {devOps.map((tier) => (
        <div
          key={tier.id}
          className="flex flex-col justify-between rounded-3xl bg-gray-900 p-8 sm:p-10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
        >
          <div>
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-blue-300"
            >
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-200">
                {tier.projectPrice}
                <span className="pl-2 text-base tracking-wide font-semibold leading-7 text-gray-400">
                  /mo
                </span>
              </span>
            </div>
            <p className="mt-6 text-semibold leading-7 text-gray-400">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-4 space-y-4 text-sm leading-6 text-gray-300"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-blue-400"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
