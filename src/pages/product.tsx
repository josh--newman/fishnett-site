import { VFC } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const ProductPage: VFC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fishnett | Product</title>
        <link rel="canonical" href="https://fishnett.co/product" />
      </Helmet>
      <h1>Product</h1>
    </Layout>
  );
};

export default ProductPage;
