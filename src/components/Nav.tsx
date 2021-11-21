import { VFC } from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import navItems from "./navItems";

const containerStyles = (theme: Props["theme"]) => css`
  width: 100%;
  color: ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navStyles = (theme: Props["theme"]) => css`
  display: flex;
  list-style: none;

  li {
    margin-right: 30px;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      :link,
      :visited {
        color: ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
      }
      :focus,
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const activeLinkStyles = {
  textDecoration: "underline",
};

interface Props {
  theme: "light" | "dark";
}

const Nav: VFC<Props> = ({ theme }) => {
  return (
    <nav css={containerStyles(theme)}>
      <ul css={navStyles(theme)}>
        {navItems.map((item) => {
          return (
            <li>
              <Link activeStyle={activeLinkStyles} to={item.to}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
