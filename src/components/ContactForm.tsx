import { css } from "@emotion/react";
import { useFormData } from "herotofu-react";

import Button from "./Button";
import Text from "./Text";

const FORM_ENDPOINT = process.env.GATSBY_FORM_URL || "";

const wrapperStyles = css`
  width: 100%;
  background-color: var(--light-cream);
  color: var(--fn-blue);
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
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
  const { formState, getFormSubmitHandler } = useFormData(FORM_ENDPOINT);

  const message =
    formState.status === "success"
      ? "Success! Thanks for reaching out. We'll be in touch soon."
      : formState.status === "error"
      ? "Oops! Something went wrong. Please try again."
      : null;

  const isLoading = formState.status === "loading";

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
              : "Thanks for your interest in FishNett! Fill out your details here and we'll be in touch soon."}
          </Text>
        </div>
        {formState.status === "success" ? null : (
          <form
            action={FORM_ENDPOINT}
            onSubmit={getFormSubmitHandler()}
            css={formStyles}
            method="POST"
            accept-charset="UTF-8"
          >
            <label>
              Name (required)
              <input type="text" name="name" required />
            </label>

            <label>
              Email (required)
              <input type="email" name="email" required />
            </label>

            <label>
              Organisation
              <input type="text" name="organisation" />
            </label>

            <label>
              Phone
              <input type="tel" name="phone" />
            </label>

            <label>
              Inquiry
              <textarea rows={10} name="inquiry" />
            </label>

            {/* Hidden field to prevent spam */}
            <div
              style={{
                textIndent: "-99999px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "absolute",
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <Button disabled={isLoading} type="submit" theme="dark">
              <Text type="body" tag="p">
                {isLoading ? "Submitting" : "Submit"}
              </Text>
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
