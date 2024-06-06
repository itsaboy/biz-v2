export default function InputFour({ budget, setBudget }) {
  return (
    <div>
      <label
        htmlFor="initial-cost"
        className="block text-sm font-semibold leading-6 text-indigo-300 pb-2.5"
      >
        ~ Development Budget
      </label>
      <select
        id="initial-cost"
        name="initial-cost"
        value={budget}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-200 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:shadow-none sm:text-sm sm:leading-6 bg-slate-800 shadow-md shadow-indigo-400/40 ring-2 ring-slate-950"
        onChange={(e) => setBudget(e.target.value)}
      >
        <option value="Tier One">$500 - $1,000</option>
        <option value="Tier Two">$1,000 - $1,500</option>
        <option value="Tier Three">$1,500 - $3,000</option>
        <option value="Tier Four">$3,000 - $4,000</option>
        <option value="Tier Four">$4,000 - $5,000</option>
        <option value="Unsure">Unsure</option>
      </select>
    </div>
  );
}
