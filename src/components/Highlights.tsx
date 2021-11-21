import { css } from "@emotion/react";
import { FC, VFC } from "react";
import Text from "./Text";
import Spacer from "./Spacer";

import cupIcon from "../images/cup.png";
import australiaIcon from "../images/australia.png";
import boatIcon from "../images/fishing-boat.png";

const wrapperStyles = css`
  width: 100%;
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  border-bottom: 1px solid var(--light-gray);

  @media (min-width: 35em) {
    flex-direction: row;
  }
`;

const highlightStyles = css`
  display: flex;
  align-items: center;

  img {
    width: 65px;
    height: 65px;
  }
`;

interface HighlightProps {
  iconSrc: string;
}

const Highlight: FC<HighlightProps> = ({ children, iconSrc }) => {
  return (
    <div css={highlightStyles}>
      <img src={iconSrc} />
      <Spacer width={20} />
      <Text type="body" tag="p">
        {children}
      </Text>
    </div>
  );
};

const Highlights: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <Highlight iconSrc={cupIcon}>
          Leader in fishing industry management
        </Highlight>
        <Highlight iconSrc={australiaIcon}>
          Australian fishing industry's most used software
        </Highlight>
        <Highlight iconSrc={boatIcon}>
          Developed in consultation with the fishing industry
        </Highlight>
      </div>
    </section>
  );
};

export default Highlights;
