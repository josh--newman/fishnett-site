import { css } from "@emotion/react";

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

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    ul {
      text-align: left;
    }
  }
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

const ProductFeature = ({ index, heading, imgSrc, details }: Props) => {
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
                <li key={item}>
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
