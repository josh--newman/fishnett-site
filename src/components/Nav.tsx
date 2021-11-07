import { VFC } from "react";
import { css } from "@emotion/react";

const containerStyles = css`
  color: #fff;
`;

const navStyles = css`
  display: flex;
  list-style: none;

  li {
    margin-right: 30px;
    font-size: 1.2rem;
    line-height: 1.2rem;

    a {
      text-decoration: none;
      :link,
      :visited {
        color: #fff;
      }
      :focus,
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Nav: VFC = () => {
  return (
    <nav css={containerStyles}>
      <ul css={navStyles}>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/setup">Setup</a>
        </li>
        <li>
          <a href="/solutions">Solutions</a>
        </li>
        <li>
          <a href="/support">Support</a>
        </li>
        <li>
          <a href="/learn">Learn</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
