import { VFC } from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

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
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--white);
  }

  a {
    display: block;
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    :link,
    :visited {
      color: var(--white);
    }
    :hover,
    :focus {
      color: var(--dark-blue);
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
          <Link activeStyle={activeLinkStyles} to="/solutions">
            Solutions
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/support">
            Support
          </Link>
        </li>
        <li>
          <Link activeStyle={activeLinkStyles} to="/learn">
            Learn
          </Link>
        </li>
      </ul>
      <div role="button" tabIndex={0} css={bookDemoStyles}>
        <Link to="/book-a-demo">Book a demo</Link>
      </div>
    </nav>
  );
};

export default Nav;
