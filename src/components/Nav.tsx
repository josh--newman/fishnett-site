import { VFC } from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import LinkButton from "./LinkButton";

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
        <li>
          <Link activeStyle={activeLinkStyles} to="/product">
            Product
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/setup">
            Setup
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/support">
            Support
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <LinkButton to="/book-a-demo">Book a demo</LinkButton>
    </nav>
  );
};

export default Nav;
