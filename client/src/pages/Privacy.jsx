import { useEffect, useContext } from "react";
import {
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { NavContext } from "../context/NavContext";

export default function PrivacyPolicy() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Privacy");
  }, [setCurrentPage]);

  return (
    <div className="bg-transparent px-6 py-16 lg:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-slate-300">
        <p className="text-base leading-7 text-indigo-300">
          <span className="font-semibold">Effective Date:</span> 5-30-2024
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-xl leading-8">
          At Zach of All Trades, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard your information when you visit our
          website and use our services.
        </p>
        <div className="mt-10 max-w-2xl">
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">
            Information we collect
          </h2>
          <p className="mt-2">
            When you visit our website or fill out a form, we may collect the
            following information:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-4 text-slate-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">Your name</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">
                Your email address
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">
                Your phone number
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">
                Any other information you submit through a form
              </span>
            </li>
          </ul>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">
            How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information we collect for the following purposes:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-4 text-slate-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">
                To respond to your inquiries and provide customer support
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">
                To improve our website and services
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-300"
                aria-hidden="true"
              />
              <span className="font-semibold text-slate-200">
                To send periodic emails related to your inquiries or our
                services
              </span>
            </li>
          </ul>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">
            Information Sharing and Disclosure
          </h2>
          <p className="mt-2">
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information. Your information is only used
            by us and is not shared with any third-party organizations.
          </p>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">
            Data Security
          </h2>
          <p className="mt-2">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, please be aware that no
            method of transmission over the internet, or method of electronic
            storage, is 100% secure. Therefore, while we strive to use
            commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">
            Your Consent
          </h2>
          <p className="mt-2">
            By using our website, you consent to our privacy policy.
          </p>
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200">
            Changes to Our Privacy Policy
          </h2>
          <p className="mt-2">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </div>

        <div className="mt-10 max-w-2xl">
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-200 mb-3">
            Contact Us
          </h2>
          <p className="text-slate-300 mb-2">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="text-slate-400 mb-4 font-semibold">
            Email:{" "}
            <a
              href="mailto:ultimategauntletdev@gmail.com"
              className="text-indigo-300 font-normal hover:text-indigo-400"
            >
              ultimategauntletdev@gmail.com
            </a>
            <br />
            Phone:{" "}
            <a className="text-slate-300" href="tel:+1 (336) 880-4416">
              +1 (336) 880-4416
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
