import { css } from "@emotion/react";
import { VFC } from "react";

import Spacer from "./Spacer";
import Text from "./Text";

const wrapperStyles = css`
  width: 100%;
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  text-align: center;
  margin: 0 auto;
`;

const ProductWelcome: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <Text type="lg-heading" tag="h2">
          Welcome to Fishnett
        </Text>
        <Spacer height={20} />
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Text type="body" tag="p">
            We know that keeping track of all the receipts, reports, compliance
            checks, dispatch and sales that go on in a fish co-op can be
            challenging. FishNett allows co-ops of any size to manage all their
            processes and data quickly, efficiently and in one place.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ProductWelcome;
