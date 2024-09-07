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
  display: flex;
  text-align: left;
  margin: 0 auto;

  @media (max-width: 900px) {
    text-align: center;
    flex-direction: column;
  }
`;

const textStyles = css`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const imageStyles = css`
  margin-left: -50px;
`;

const ProductSummary = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div css={textStyles}>
          <Text tag="h1" type="lg-heading">
            Welcome to FishNett
          </Text>
          <Spacer height={20} />
          <Text tag="p" type="body">
            We know that keeping track of all the receipts, reports, compliance
            checks, dispatch and sales that go on in a fish co-op can be
            challenging. FishNett allows co-ops of any size to manage all their
            processes and data quickly, efficiently and in one place.
          </Text>
          <Spacer height={40} />
          <LinkButton theme="light" to="/contact">
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
