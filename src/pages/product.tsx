import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const ProductPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Product</title>
        <link rel="canonical" href="https://fishnett.com.au/product" />
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

export default ProductPage;
