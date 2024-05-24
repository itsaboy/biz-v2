

export default function InputThree() {
  return (
    <div>
      <label
        htmlFor="pricing-plan"
        className="block text-sm font-semibold leading-6 text-blue-300 pb-2.5"
      >
        Pricing Plan
      </label>
      <select
        id="pricing-plan"
        name="pricing-plan"
        value={currentPlan}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 focus:shadow-none sm:text-sm sm:leading-6 bg-gray-800 shadow-md shadow-blue-400/40 ring-2 ring-gray-950"
      >
        <option value="Static Website">Static Website</option>
        <option value="Fullstack Web Application">
          Fullstack Web Application
        </option>
        <option value="Custom">Custom</option>
      </select>
    </div>
  );
}
