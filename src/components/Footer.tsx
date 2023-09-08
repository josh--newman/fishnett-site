import { css } from "@emotion/react";
import { Link } from "gatsby";

import navItems from "./navItems";
import HeaderLogo from "./HeaderLogo";
import Spacer from "./Spacer";
import Text from "./Text";

const wrapperStyles = css`
  width: 100%;
  background-color: var(--dark-gray);
  color: var(--white);
`;

const containerStyles = css`
  color: var(--white);
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navStyles = css`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 5px;
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

const Footer = () => {
  return (
    <footer css={wrapperStyles}>
      <div css={containerStyles}>
        <HeaderLogo theme="dark" />
        <Spacer height={10} />
        <Text tag="p" type="subtitle">
          Copyright © {new Date().getFullYear()} Productive Office Australia
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
