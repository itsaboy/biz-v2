import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function FeedbackOne({ successText, setSendSuccess }) {
  return (
    <div className="rounded-md bg-green-200 p-3">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-900">{successText}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-200 p-1.5 text-green-500 hover:bg-green-300 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon
                onClick={() => setSendSuccess(null)}
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
