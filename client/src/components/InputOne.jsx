export default function InputOne({
  htmlFor,
  label,
  type,
  name,
  id,
  autoComplete,
  state,
  setState,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-semibold leading-6 text-indigo-300"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          name={name}
          id={id}
          autoComplete={autoComplete}
          onChange={(e) => setState(e.target.value)}
          value={state}
          required
          className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-200 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:shadow-none sm:text-sm sm:leading-6 bg-slate-800 shadow-md shadow-indigo-400/40 ring-2 ring-slate-950"
        />
      </div>
    </div>
  );
}
