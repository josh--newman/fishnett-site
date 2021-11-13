import { VFC } from "react";
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
  max-width: var(--max-page-width);
  margin: 0 auto;
`;

const heroTextStyles = css`
  color: var(--white);
`;

const buttonContainerStyles = css`
  display: flex;
`;

const Hero: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div css={heroTextStyles}>
          <Text type="xs-heading" tag="h3">
            Automate federal & state compliance reporting
          </Text>
          <Spacer height={10} />
          <Text type="lg-heading" tag="h1">
            Streamlining the modern fishing industry
          </Text>
          <Spacer height={10} />
          <Text type="body" tag="p">
            FishNett can create an entire week’s recipient created tax invoices,
            for all your suppliers, in just 30 minutes.
          </Text>
          <Spacer height={40} />
          <div css={buttonContainerStyles}>
            <LinkButton to="/book-a-demo">Book a demo</LinkButton>
            <Spacer width={20} />
            <LinkButton to="/product">Learn more</LinkButton>
          </div>
        </div>
        <Spacer width={30} />
        <div>
          <img src={heroImage} alt="fishing boat in a harbour" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
