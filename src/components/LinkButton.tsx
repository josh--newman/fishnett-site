import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "gatsby";

const bookDemoStyles = css`
  border: 1px solid var(--white);
  border-radius: 5px;
  cursor: pointer;
  min-width: 150px;
  width: fit-content;
  text-align: center;

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

interface Props {
  to: string;
}

const DemoButton: FC<Props> = ({ children, to }) => {
  return (
    <div role="button" tabIndex={0} css={bookDemoStyles}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default DemoButton;
