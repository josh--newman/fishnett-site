import { VFC } from "react";
import { css } from "@emotion/react";

import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import Spacer from "./Spacer";

const headerStyles = css`
  width: 100%;
  background-color: var(--dark-blue);
  min-height: 100px;
  padding: 20px;
`;

const headerContentStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const Header: VFC = () => {
  return (
    <header css={headerStyles}>
      <div css={headerContentStyles}>
        <HeaderLogo />
        <Spacer width={10} />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
