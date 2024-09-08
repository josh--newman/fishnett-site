import { Fragment } from "react";
import { Global, css } from "@emotion/react";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/nunito/900.css";

import Header from "./Header";
import Footer from "./Footer";

const pageContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --max-page-width: 1200px;
            --dark-blue: #153e56;
            --white: #ffffff;
            --light-gray: #c4c4c4;
            --dark-gray: #2c2c2c;
            --light-cream: #f5ede5;
            --fn-blue: #266a7f;
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
            overflow-x: hidden;
            background-color: var(--light-cream);
            flex-grow: 1;
          }
        `}
      />
      <main css={pageContainerStyles}>
        <Header theme="light" />
        {children}
        <Footer />
      </main>
    </Fragment>
  );
};

export default Layout;
