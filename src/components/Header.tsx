import { VFC } from "react";
import { css } from "@emotion/react";

import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import Spacer from "./Spacer";

const headerStyles = (theme: Props["theme"]) => css`
  width: 100%;
  background-color: ${theme === "light" ? "var(--white)" : "var(--dark-blue)"};
  min-height: 100px;
  padding: 20px;
`;

const headerContentStyles = css`
  max-width: var(--max-page-width);
  margin: 0 auto;
  display: flex;
`;

interface Props {
  theme: "light" | "dark";
}

const Header: VFC<Props> = ({ theme }) => {
  return (
    <header css={headerStyles(theme)}>
      <div css={headerContentStyles}>
        <HeaderLogo theme={theme} />
        <Spacer width={10} />
        <Nav theme={theme} />
      </div>
    </header>
  );
};

export default Header;
