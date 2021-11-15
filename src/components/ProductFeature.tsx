import { css } from "@emotion/react";
import { ReactNode, VFC } from "react";

import Text from "./Text";
import checkmark from "../images/icon-list-checkmark.svg";

const wrapperStyles = css`
  width: 100%;
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
`;

const listStyles = css`
  list-style-image: url(${checkmark});
`;

interface Props {
  heading: string;
  tagline: string;
  details: ReactNode[];
  imageSrc: string;
}

const ProductFeature: VFC<Props> = ({
  heading,
  tagline,
  details,
  imageSrc,
}) => {
  return (
    <div css={wrapperStyles}>
      <div css={containerStyles}>
        <Text tag="h3" type="sml-heading">
          {heading}
        </Text>
        {tagline}
        <ul css={listStyles}>
          {details.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeature;
