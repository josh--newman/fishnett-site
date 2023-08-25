import { css } from "@emotion/react";
import { Link } from "gatsby";

const bookDemoStyles = (theme: Props["theme"]) => css`
  border: 1px solid ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
  background-color: var(--dark-blue);
  color: var(--white);
  border-radius: 5px;
  cursor: pointer;
  min-width: 150px;
  width: fit-content;
  text-align: center;

  :hover {
    background-color: ${theme === "light"
      ? "var(--dark-blue)"
      : "var(--white)"};
    color: ${theme === "light" ? "var(--white)" : "var(--dark-blue)"};
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
    <div role="button" tabIndex={-1} css={bookDemoStyles(theme)}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default LinkButton;
