import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "gatsby";

const bookDemoStyles = (theme: Props["theme"]) => css`
  border: 1px solid ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
  border-radius: 5px;
  cursor: pointer;
  min-width: 150px;
  width: fit-content;
  text-align: center;

  :hover,
  :focus {
    background-color: ${theme === "light"
      ? "var(--dark-blue)"
      : "var(--white)"};
  }

  a {
    display: block;
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    :link,
    :visited {
      color: ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
    }
    :hover,
    :focus {
      color: ${theme === "light" ? "var(--white)" : "var(--dark-blue)"};
    }
  }
`;

interface Props {
  to: string;
  theme: "light" | "dark";
}

const LinkButton: FC<Props> = ({ children, to, theme }) => {
  return (
    <div role="button" tabIndex={0} css={bookDemoStyles(theme)}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default LinkButton;
