import { useState } from "react";

export const useSendMessage = () => {
  const [sendSuccess, setSendSuccess] = useState(null);
  const [sendError, setSendError] = useState(null);
  const [sendLoading, setSendLoading] = useState(false);

  const sendMessage = async (
    firstName,
    lastName,
    email,
    phoneNumber,
    initialBudget,
    monthlyBudget,
    message
  ) => {
    setSendLoading(true);
    setSendSuccess(null);
    setSendError(null);
    const req = "/api/messages/send";
    const res = await fetch(req, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        initialBudget: initialBudget,
        monthlyBudget: monthlyBudget,
        message: message,
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      setSendLoading(false);
      setSendSuccess(null);
      setSendError(data.error);
    } else {
      setSendLoading(false);
      setSendSuccess("Message sent successfully");
      setSendError(null);
    }
  };

  return {
    sendMessage,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  };
};
