import { css } from "@emotion/react";

import Spacer from "./Spacer";
import Text from "./Text";
import productImg from "../images/product-image.png";
import LinkButton from "./LinkButton";

const wrapperStyles = css`
  width: 100%;
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 0 auto;
`;

const textStyles = css`
  max-width: 600px;
  text-align: left;
`;

const imageStyles = css`
  margin-left: -50px;
`;

const ProductSummary = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div>
          <Spacer height={30} />
          <Text tag="h1" type="lg-heading">
            Speed up your invoicing & reporting
          </Text>
          <Spacer height={20} />
          <div css={textStyles}>
            <Text tag="p" type="body">
              FishNett can create an entire week’s recipient created tax
              invoices, for all your suppliers, in just 30 minutes.
            </Text>
          </div>
          <Spacer height={40} />
          <LinkButton theme="light" to="#contact">
            Contact us
          </LinkButton>
        </div>
        <div css={imageStyles}>
          <img src={productImg} />
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
