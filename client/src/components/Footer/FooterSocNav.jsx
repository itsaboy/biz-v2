import { socMediaNav } from "../../data/navigation.jsx";

export default function FooterSocNav() {
  return (
    <div className="mt-10 flex justify-center space-x-10">
      {socMediaNav.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-slate-400 hover:text-slate-300"
          target="_blank"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
