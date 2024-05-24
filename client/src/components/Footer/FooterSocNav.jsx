import { socMediaNav } from "../../data/navigation.jsx";

export default function FooterSocNav() {
  return (
    <div className="mt-10 flex justify-center space-x-10">
      {socMediaNav.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-gray-300"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
