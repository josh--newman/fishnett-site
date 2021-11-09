import { VFC } from "react";
import { css } from "@emotion/react";
import Spacer from "./Spacer";
import heroImage from "../images/hero-image.png";
import Text from "../components/Text";

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

const Hero: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div css={heroTextStyles}>
          <Text tag="h3">Automate federal & state compliance reporting</Text>
          <Spacer height={10} />
          <Text tag="h1">Streamling the modern fishing industry</Text>
          <Spacer height={10} />
          <Text tag="p">
            FishNett can create an entire week’s recipient created tax invoices,
            for all your suppliers, in just 30 minutes.
          </Text>
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
