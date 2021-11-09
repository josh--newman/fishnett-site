import { FC } from "react";
import { css } from "@emotion/react";

const tagStyles = (tag: Props["tag"]) => {
  switch (tag) {
    case "h1":
      return css`
        font-size: 44px;
        font-weight: 700;
      `;
    case "h2":
      return css`
        font-size: 36px;
        font-weight: 700;
      `;
    case "h3":
      return css`
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      `;
    case "p":
      return css`
        font-size: 18px;
      `;
    default:
      return null;
  }
};

interface Props {
  tag: "h1" | "h2" | "h3" | "p";
}

const Text: FC<Props> = ({ children, tag }) => {
  const Tag = tag;

  return <Tag css={tagStyles(tag)}>{children}</Tag>;
};

export default Text;
