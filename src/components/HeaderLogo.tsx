import { css } from "@emotion/react";
import { Link } from "gatsby";

import boatImg from "../images/fishnett-logo.svg";

const wrapperStyles = (theme: Props["theme"]) => css`
  color: ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
  a {
    text-decoration: none;
    :link,
    :visited {
      color: ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
    }
  }

  img {
    display: none;
  }

  @media (min-width: 900px) {
    img {
      display: block;
    }
  }
`;

const logoContainerStyles = (theme: Props["theme"]) => css`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    filter: ${theme === "light"
      ? "invert(18%) sepia(35%) saturate(1302%) hue-rotate(161deg) brightness(90%) contrast(88%)"
      : "invert(100%) sepia(0%) saturate(7500%) hue-rotate(72deg) brightness(99%) contrast(99%)"};
  }
`;

const logoTextStyles = css`
  font-family: "Nunito";
  font-weight: 900;
  letter-spacing: -0.1rem;
  font-size: 42px;
  font-feature-settings: "kern" off;
`;

interface Props {
  theme: "light" | "dark";
}

const HeaderLogo = ({ theme }: Props) => {
  return (
    <div css={wrapperStyles(theme)}>
      <Link to="/">
        <div css={logoContainerStyles(theme)}>
          <img width="100px" src={boatImg} alt="fishnett logo" />
          <span css={logoTextStyles}>FishNett</span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
