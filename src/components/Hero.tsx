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

  @media (min-width: 900px) {
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
  height: 100%;
  width: 100%;
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
            Streamline your operations
          </Text>
          <Text type="lg-heading" tag="h1">
            Innovative solutions for a more profitable and sustainable Seafood
            Industry
          </Text>
          <div css={buttonContainerStyles}>
            <LinkButton theme="dark" to="#contact">
              Contact us
            </LinkButton>
          </div>
          <Spacer height={10} />
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
