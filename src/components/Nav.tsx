import { VFC } from "react";
import { css } from "@emotion/react";

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

const bookDemoStyles = css`
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 10px 20px;
  text-decoration: none;
  :link,
  :visited {
    color: var(--white);
  }
  :hover,
  :focus {
    background-color: var(--white);
    color: var(--dark-blue);
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
      <a css={bookDemoStyles} href="/book-a-demo">
        Book a demo
      </a>
    </nav>
  );
};

export default Nav;
