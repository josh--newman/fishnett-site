import { FC } from "react";
import { css } from "@emotion/react";

const tagStyles = (type: Props["type"]) => {
  switch (type) {
    case "lg-heading":
      return css`
        font-size: 44px;
        font-weight: 700;
      `;
    case "md-heading":
      return css`
        font-size: 36px;
        font-weight: 700;
      `;
    case "sml-heading":
      return css`
        font-size: 24px;
        font-weight: 600;
      `;
    case "xs-heading":
      return css`
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
      `;
    case "body":
      return css`
        font-size: 18px;
      `;
    case "subtitle":
      return css`
        font-size: 14px;
      `;
    default:
      return null;
  }
};

interface Props {
  type:
    | "lg-heading"
    | "md-heading"
    | "sml-heading"
    | "xs-heading"
    | "body"
    | "subtitle";
  tag: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
}

const Text: FC<Props> = ({ children, tag, type }) => {
  const Tag = tag;

  return <Tag css={tagStyles(type)}>{children}</Tag>;
};

export default Text;
