import { Fragment, FC } from "react";
import { Global, css } from "@emotion/react";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={css`
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
      {children}
    </Fragment>
  );
};

export default Layout;
