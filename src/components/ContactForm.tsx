import { css } from "@emotion/react";

import Button from "./Button";
import Text from "./Text";
import useForm from "./useForm";

const FORM_ENDPOINT = process.env.GATSBY_FORM_URL || "";

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
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const introStyles = css`
  margin: 0 auto;
  max-width: 400px;
  text-align: left;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const formStyles = css`
  max-width: 500px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    align-items: flex-start;
  }

  input,
  textarea {
    margin-top: 5px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: large;
  }
`;

const ContactForm = () => {
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({ additionalData });

  const isLoading = status === "loading";

  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div css={introStyles}>
          <Text type="md-heading" tag="h3" id="contact">
            Contact us
          </Text>
          <Text type="body" tag="p">
            {message
              ? message
              : "Have a question? Want to book a demo? We'd love to hear from you! Fill out your details here and we'll be in touch soon."}
          </Text>
        </div>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          css={formStyles}
          method="POST"
          accept-charset="UTF-8"
        >
          <label>
            Name (required)
            <input type="text" name="name" required />
          </label>

          <label>
            Organisation (required)
            <input type="text" name="organisation" required />
          </label>

          <label>
            Email (required)
            <input type="email" name="email" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" />
          </label>

          <label>
            Inquiry
            <textarea rows={10} name="inquiry" />
          </label>

          <Button disabled={isLoading} type="submit" theme="dark">
            <Text type="body" tag="p">
              {isLoading
                ? "Submitting"
                : status === "success"
                ? "Success!"
                : "Submit"}
            </Text>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
