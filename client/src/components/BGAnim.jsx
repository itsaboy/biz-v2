import background from "../assets/background.svg";

export default function BGAnim() {
  return (
    <img
      src={background}
      alt="background of circles growing and shrinking"
      className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
    />
  );
}
