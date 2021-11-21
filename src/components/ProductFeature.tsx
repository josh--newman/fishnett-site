import { css } from "@emotion/react";
import { VFC } from "react";

import Spacer from "./Spacer";
import Text from "./Text";

const wrapperStyles = css`
  width: 100%;
`;

const containerStyles = (index: number) => css`
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  display: flex;
  flex-direction: ${index % 2 === 0 ? "row-reverse" : "row"};
`;

const listStyles = css`
  list-style-image: none;
`;

interface Props {
  index: number;
  heading: string;
  imgSrc: string;
  details: string[];
}

const ProductFeature: VFC<Props> = ({ index, heading, imgSrc, details }) => {
  return (
    <div css={wrapperStyles}>
      <div css={containerStyles(index)}>
        <div>
          <Text tag="h3" type="md-heading">
            {heading}
          </Text>
          <ul css={listStyles}>
            {details.map((item) => {
              return (
                <li>
                  <Text type="body" tag="p">
                    {item}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
        <Spacer width={100} />
        <div>
          <img src={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
