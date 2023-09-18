import { css } from "@emotion/react";
import { useState, ChangeEvent, FormEvent } from "react";

const wrapperStyles = css`
  width: 100%;
  background-color: var(--dark-blue);
  color: var(--white);
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  text-align: center;
`;

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/4281365/3rweevc/",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      alert("Form submitted!");
    } catch (error) {
      console.error("Failed to submit form: " + error);
    }
  };

  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required onChange={handleChange} />
          </label>

          <label>
            Organisation:
            <input
              type="text"
              name="organisation"
              required
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input type="email" name="email" required onChange={handleChange} />
          </label>

          <label>
            Phone:
            <input type="tel" name="phone" onChange={handleChange} />
          </label>

          <label>
            Inquiry:
            <input
              type="textarea"
              required
              name="inquiry"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
