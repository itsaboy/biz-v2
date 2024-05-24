import spinner from "../assets/icons/spinner.svg";

export default function Loading() {
  return (
    <div>
      <img className="h-10 w-auto" src={spinner} />
    </div>
  );
}
