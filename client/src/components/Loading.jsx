import spinner from "../assets/icons/spinner.svg";

export default function Loading() {
  return (
    <div className="absolute z-50 inset-0 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 flex items-center justify-center">
      <img className="h-32 sm:h-64" src={spinner} />
    </div>
  );
}
