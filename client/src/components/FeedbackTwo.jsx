import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

export default function FeedbackTwo({ errorText, setSendError }) {
  return (
    <div className="rounded-md bg-red-200 p-3">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-900">{errorText}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-red-200 p-1.5 text-red-500 hover:bg-red-300 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon
                onClick={() => setSendError(null)}
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
