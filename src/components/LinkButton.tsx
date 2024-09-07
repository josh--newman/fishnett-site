import { css } from "@emotion/react";
import { Link } from "gatsby";

const buttonStyles = (theme: Props["theme"]) => css`
  border: 1px solid
    ${theme === "light" ? "var(--fn-blue)" : "var(--light-cream)"};
  background-color: var(--fn-blue);
  color: var(--light-cream);
  border-radius: 5px;
  cursor: pointer;
  min-width: 150px;
  width: fit-content;
  text-align: center;

  :hover {
    background-color: ${theme === "light"
      ? "var(--fn-blue)"
      : "var(--light-cream)"};
    color: ${theme === "light" ? "var(--light-cream)" : "var(--fn-blue)"};
    filter: ${theme === "light" ? "brightness(85%)" : "none"};
  }

  a {
    display: block;
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    :link,
    :visited {
      color: inherit;
    }
  }
`;

interface Props {
  to: string;
  theme: "light" | "dark";
  children: React.ReactNode;
}

const LinkButton = ({ children, to, theme }: Props) => {
  return (
    <div role="button" tabIndex={-1} css={buttonStyles(theme)}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default LinkButton;
