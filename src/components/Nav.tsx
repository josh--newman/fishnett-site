import { VFC } from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import LinkButton from "./LinkButton";
import navItems from "./navItems";

const containerStyles = css`
  width: 100%;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navStyles = css`
  display: flex;
  list-style: none;

  li {
    margin-right: 30px;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      :link,
      :visited {
        color: var(--white);
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

const Nav: VFC = () => {
  return (
    <nav css={containerStyles}>
      <ul css={navStyles}>
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
      <LinkButton to="/book-a-demo">Book a demo</LinkButton>
    </nav>
  );
};

export default Nav;
