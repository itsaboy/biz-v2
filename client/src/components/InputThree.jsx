export default function InputThree({ budget, setBudget }) {
  return (
    <div>
      <label
        htmlFor="monthly-cost"
        className="block text-sm font-semibold leading-6 text-blue-300 pb-2.5"
      >
        ~ Monthly Budget
      </label>
      <select
        id="monthly-cost"
        name="monthly-cost"
        value={budget}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
        onChange={(e) => setBudget(e.target.value)}
      >
        <option value="Tier One">$150 - $300</option>
        <option value="Tier Two">$300 - $400</option>
        <option value="Tier Three">$400 - $600</option>
        <option value="Tier Four">$600 - $800</option>
        <option value="Tier Four">$800 - $1,000</option>
        <option value="Unsure">Unsure</option>
      </select>
    </div>
  );
}
