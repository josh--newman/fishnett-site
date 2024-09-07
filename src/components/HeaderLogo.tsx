import { css } from "@emotion/react";
import { Link } from "gatsby";

import boatImg from "../images/fishnett-logo.svg";

const wrapperStyles = (theme: Props["theme"]) => css`
  color: ${theme === "light" ? "var(--fn-blue)" : "var(--light-cream)"};
  a {
    text-decoration: none;
    :link,
    :visited {
      color: ${theme === "light" ? "var(--fn-blue)" : "var(--light-cream)"};
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
      ? "invert(32%) sepia(51%) saturate(582%) hue-rotate(148deg) brightness(96%) contrast(88%)"
      : "invert(93%) sepia(8%) saturate(154%) hue-rotate(329deg) brightness(105%) contrast(92%)"};
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
