import { useState } from "react";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import InputOne from "../InputOne";
import InputTwo from "../InputTwo";
import InputThree from "../InputThree";
import InputFour from "../InputFour";
import SubmitButton from "../SubmitButton";
import FeedbackOne from "../FeedbackOne";
import FeedbackTwo from "../FeedbackTwo";
import Loading from "../Loading";
import { useSendMessage } from "../../hooks/useSendMessage";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [initialBudget, setInitialBudget] = useState("Unsure");
  const [monthlyBudget, setMonthlyBudget] = useState("Unsure");
  const [message, setMessage] = useState("");

  const {
    sendMessage,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(
      firstName,
      lastName,
      email,
      phoneNumber,
      initialBudget,
      monthlyBudget,
      message
    );
    if (sendSuccess) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setInitialBudget("Unsure");
      setMonthlyBudget("Unsure");
      setMessage("");
    } else {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <InputOne
            htmlFor={"first-name"}
            label={"First Name*"}
            type={"text"}
            name={"first-name"}
            id={"first-name"}
            autoComplete={"given-name"}
            state={firstName}
            setState={setFirstName}
          />
          <InputOne
            htmlFor={"last-name"}
            label={"Last Name*"}
            type={"text"}
            name={"last-name"}
            id={"last-name"}
            autoComplete={"family-name"}
            state={lastName}
            setState={setLastName}
          />
          <InputOne
            htmlFor={"email"}
            label={"Email*"}
            type={"email"}
            name={"email"}
            id={"email"}
            autoComplete={"email"}
            state={email}
            setState={setEmail}
          />
          <InputOne
            htmlFor={"phone-number"}
            label={"Phone Number*"}
            type={"tel"}
            name={"phone-number"}
            id={"phone-number"}
            autoComplete={"tel"}
            state={phoneNumber}
            setState={setPhoneNumber}
          />

          <InputFour budget={initialBudget} setBudget={setInitialBudget} />
          <InputThree budget={monthlyBudget} setBudget={setMonthlyBudget} />
          <div className="sm:col-span-2">
            <InputTwo
              htmlFor={"message"}
              label={"Message*"}
              name={"message"}
              id={"message"}
              state={message}
              setState={setMessage}
              value={message}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end h-10 w-full">
          {sendSuccess ? (
            <FeedbackOne
              successText={sendSuccess}
              setSendSuccess={setSendSuccess}
            />
          ) : sendError ? (
            <FeedbackTwo errorText={sendError} setSendError={setSendError} />
          ) : !sendLoading ? (
            <SubmitButton
              disabled={sendLoading}
              type={"submit"}
              text="Send Message"
              icon={<EnvelopeOpenIcon className="h-6 w-auto" />}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </form>
  );
}
