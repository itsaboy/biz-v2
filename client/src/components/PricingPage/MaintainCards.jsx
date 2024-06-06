import { CheckIcon } from "@heroicons/react/20/solid";
import { maintain } from "../../data/maintain.js";

export default function MaintainCards() {
  return (
    <>
      {maintain.map((tier) => (
        <div
          key={tier.id}
          className="flex flex-col justify-between rounded-3xl bg-slate-900 p-8 sm:p-10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-lg shadow-indigo-400/40 ring-2 ring-slate-900"
        >
          <div>
            <h3
              id={tier.id}
              className="text-base font-semibold leading-7 text-indigo-300"
            >
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-200">
                {tier.projectPrice}
                <span className="pl-2 text-base tracking-wide font-semibold leading-7 text-slate-400">
                  /mo
                </span>
              </span>
            </div>
            <p className="mt-6 text-semibold leading-7 text-slate-400">
              {tier.description}
            </p>
            <ul
              role="list"
              className="mt-4 space-y-4 text-sm leading-6 text-slate-300"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-400"
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
