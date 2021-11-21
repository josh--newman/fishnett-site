import { VFC } from "react";
import { css } from "@emotion/react";

import HeaderLogo from "./HeaderLogo";
import Nav from "./Nav";
import LinkButton from "./LinkButton";

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
  gap: 10px;
`;

const navContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const buttonContainerStyles = css`
  @media (max-width: 770px) {
    display: none;
  }
`;

interface Props {
  theme: "light" | "dark";
}

const Header: VFC<Props> = ({ theme }) => {
  return (
    <header css={headerStyles(theme)}>
      <div css={headerContentStyles}>
        <HeaderLogo theme={theme} />
        <div css={navContainerStyles}>
          <Nav theme={theme} />
          <div css={buttonContainerStyles}>
            <LinkButton theme={theme} to="/book-a-demo">
              Book a demo
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
