import { css } from "@emotion/react";

import HeaderLogo from "./HeaderLogo";
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
  justify-content: flex-end;
  width: 100%;
`;

interface Props {
  theme: "light" | "dark";
}

const Header = ({ theme }: Props) => {
  return (
    <header css={headerStyles(theme)}>
      <div css={headerContentStyles}>
        <HeaderLogo theme={theme} />
        <div css={navContainerStyles}>
          <LinkButton theme={theme} to="/book-a-demo">
            Contact us
          </LinkButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
