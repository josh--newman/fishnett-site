import { useState } from "react";

const useForm = ({ additionalData }: any) => {
  const [status, setStatus] = useState<"success" | "error" | "loading" | null>(
    null
  );
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    const formElement = event.target as HTMLFormElement;
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const finalFormEndpoint = formElement.action;
    const data = Array.from(formElement.elements)
      .filter((input: any) => input.name)
      .reduce(
        (obj: any, input: any) =>
          Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    if (additionalData) {
      Object.assign(data, additionalData);
    }

    fetch(finalFormEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(additionalData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = additionalData[key];

            formElement.appendChild(el);
          });

          formElement.setAttribute("target", "_blank");
          formElement.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        formElement.reset();
        setMessage("Success! Thanks for reaching out. We'll be in touch soon.");
        setStatus("success");
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus("error");
      });
  };

  return { handleSubmit, status, message };
};

export default useForm;
