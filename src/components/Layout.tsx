import { Fragment, FC } from "react";
import { Global, css } from "@emotion/react";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import Header from "./Header";

const pageContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --max-page-width: 1200px;
            --dark-blue: #153e56;
            --white: #ffffff;
            --light-gray: #c4c4c4;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body,
          h1,
          h2,
          h3,
          h4,
          p,
          li,
          figure,
          figcaption,
          blockquote,
          dl,
          dd {
            margin: 0;
          }

          body {
            font-family: "Open Sans", Helvetica, sans-serif;
          }
        `}
      />
      <main css={pageContainerStyles}>
        <Header />
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
