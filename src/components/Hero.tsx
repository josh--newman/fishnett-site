import { css } from "@emotion/react";
import Spacer from "./Spacer";
import heroImage from "../images/hero-image.png";
import Text from "../components/Text";
import LinkButton from "./LinkButton";

const wrapperStyles = css`
  background-color: var(--dark-blue);
  width: 100%;
`;

const containerStyles = css`
  padding: 40px;
  display: flex;
  flex-direction: column;
  max-width: var(--max-page-width);
  margin: 0 auto;

  @media (min-width: 35em) {
    flex-direction: row;
  }
`;

const heroTextStyles = css`
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const buttonContainerStyles = css`
  display: flex;
  gap: 20px;
`;

const imgStyles = css`
  img {
    width: 100%;
    height: auto;
  }
`;

const Hero = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div css={heroTextStyles}>
          <Text type="xs-heading" tag="h3">
            Streamline your business
          </Text>
          <Text type="lg-heading" tag="h1">
            A simple management system for the commercial seafood industry
          </Text>
          <Text type="body" tag="p">
            FishNett can create an entire week’s recipient created tax invoices,
            for all your suppliers, in just 30 minutes.
          </Text>
          <div css={buttonContainerStyles}>
            <LinkButton theme="dark" to="/book-a-demo">
              Contact us
            </LinkButton>
          </div>
        </div>
        <Spacer width={30} />
        <div css={imgStyles}>
          <img src={heroImage} alt="fishing boat in a harbour" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
