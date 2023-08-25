import { Fragment, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import navItems from "./navItems";
import menuIcon from "../images/menu-icon.svg";
import menuCloseIcon from "../images/menu-close-icon.svg";

const containerStyles = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const navStyles = (theme: Props["theme"], isOpen: boolean) => css`
  color: ${theme === "light" ? "var(--dark-blue)" : "var(--white)"};
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 770px) {
    z-index: 1000;
    font-size: 1.2rem;
    color: var(--white);
    position: fixed;
    inset: 0 0 0 30%;
    flex-direction: column;
    padding: 6em 2em;
    gap: 1em;
    background: hsl(0 0% 0% / 0.75);
    transform: ${isOpen ? "none" : "translateX(100%)"};
    transition: transform 350ms ease;

    @supports (backdrop-filter: blur(1rem)) {
      background: hsl(0 0% 0% / 0.1);
      backdrop-filter: blur(1rem);
    }
  }

  li {
    margin-right: 30px;
    font-weight: 900;
    text-transform: uppercase;
    a {
      text-decoration: none;
      :link,
      :visited {
        color: inherit;
      }
      :focus,
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const activeLinkStyles = {
  textDecoration: "underline",
};

interface Props {
  theme: "light" | "dark";
}
const menuText = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: Fra1px;
`;

const menuToggleStyles = (isOpen: boolean) => css`
  cursor: pointer;
  display: none;

  @media (max-width: 770px) {
    display: block;
    position: absolute;
    background: url("${isOpen ? menuCloseIcon : menuIcon}");
    background-repeat: no-repeat;
    width: 35px;
    border: 0;
    aspect-ratio: 1;
    top: 2rem;
    right: 2rem;
    z-index: 9999;
  }
`;

const Nav = ({ theme }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <button
        css={menuToggleStyles(isOpen)}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span css={menuText}>Menu</span>
      </button>
      <nav css={containerStyles}>
        <ul id="primary-navigation" css={navStyles(theme, isOpen)}>
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <Link activeStyle={activeLinkStyles} to={item.to}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
