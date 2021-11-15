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
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const textStyles = css`
  max-width: 600px;
  margin: 0 auto;
`;

const ProductSummary: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <Spacer height={30} />
        <Text tag="h1" type="md-heading">
          Introducing the Fishnett management system
        </Text>
        <Spacer height={20} />
        <div css={textStyles}>
          <Text tag="p" type="body">
            Fishnett simplifies your operational overhead by streamlining the
            catch capturing process and automating the generation of invoices
            and reports.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
