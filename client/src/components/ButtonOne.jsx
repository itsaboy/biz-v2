export default function ButtonOne({ text, icon }) {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-indigo-300 px-4 py-2 font-semibold
          uppercase text-indigo-300 transition-all duration-500
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-indigo-300
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:text-neutral-900
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
