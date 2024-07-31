import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const MobilePage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Mobile</title>
        <link rel="canonical" href="https://fishnett.com.au/mobile" />
      </Helmet>
      <section
        css={css`
          padding: 40px;
        `}
      >
        <body></body>
      </section>
    </Layout>
  );
};

export default MobilePage;
