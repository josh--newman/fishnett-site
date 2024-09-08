import { css } from "@emotion/react";

const buttonStyles = (theme: Props["theme"]) => css`
  border: 1px solid
    ${theme === "light" ? "var(--fn-blue)" : "var(--light-cream)"};
  background-color: var(--fn-blue);
  color: var(--light-cream);
  border-radius: 5px;
  cursor: pointer;
  min-width: 150px;
  width: fit-content;
  text-align: center;
  width: 100%;
  padding: 20px;

  :hover {
    background-color: ${theme === "light"
      ? "var(--fn-blue)"
      : "var(--light-cream)"};
    color: ${theme === "light" ? "var(--light-cream)" : "var(--fn-blue)"};
    border: 1px solid
      ${theme === "light" ? "var(--light-cream)" : "var(--fn-blue)"};
    filter: ${theme === "light" ? "brightness(85%)" : "none"};
  }
`;

interface Props {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  theme: "light" | "dark";
  children: React.ReactNode;
}

const Button = ({ children, disabled = false, theme, type }: Props) => {
  return (
    <button type={type} disabled={disabled} css={buttonStyles(theme)}>
      {children}
    </button>
  );
};

export default Button;
