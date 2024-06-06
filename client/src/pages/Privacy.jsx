import { useEffect, useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function PrivacyPolicy() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Privacy");
  }, [setCurrentPage]);

  return (
    <div className="max-w-4xl mx-auto my-24 p-6 bg-slate-200 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-slate-700 mb-4">
        <strong>Effective Date:</strong> 5-30-2024
      </p>
      <p className="text-slate-700 mb-4">
        At Zach of All Trades, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your information when you visit our
        website and use our services.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
      <p className="text-slate-700 mb-4">
        When you visit our website or fill out a form, we may collect the
        following information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-slate-700">Your name</li>
        <li className="text-slate-700">Your email address</li>
        <li className="text-slate-700">Your phone number</li>
        <li className="text-slate-700">
          Any other information you provide in the form
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">
        How We Use Your Information
      </h2>
      <p className="text-slate-700 mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-slate-700">
          To respond to your inquiries and provide customer support
        </li>
        <li className="text-slate-700">To improve our website and services</li>
        <li className="text-slate-700">
          To send periodic emails related to your inquiries or our services
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">
        Information Sharing and Disclosure
      </h2>
      <p className="text-slate-700 mb-4">
        We do not sell, trade, or otherwise transfer to outside parties your
        personally identifiable information. Your information is only used by us
        and is not shared with any third-party organizations.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
      <p className="text-slate-700 mb-4">
        We implement a variety of security measures to maintain the safety of
        your personal information. However, please be aware that no method of
        transmission over the internet, or method of electronic storage, is 100%
        secure. Therefore, while we strive to use commercially acceptable means
        to protect your personal information, we cannot guarantee its absolute
        security.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Your Consent</h2>
      <p className="text-slate-700 mb-4">
        By using our website, you consent to our privacy policy.
      </p>
      <h2 className="text-2xl font-semibold mb-3">
        Changes to Our Privacy Policy
      </h2>
      <p className="text-slate-700 mb-4">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on our website. You are
        advised to review this Privacy Policy periodically for any changes.
        Changes to this Privacy Policy are effective when they are posted on
        this page.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="text-slate-700 mb-2">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p className="text-slate-700 mb-4">
        Email:{" "}
        <a
          href="mailto:ultimategauntletdev@gmail.com"
          className="text-indigo-500"
        >
          ultimategauntletdev@gmail.com
        </a>
        <br />
        Phone: (336) 880-4416
      </p>
    </div>
  );
}
