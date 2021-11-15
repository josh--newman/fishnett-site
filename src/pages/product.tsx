import { VFC } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import ProductSummary from "../components/ProductSummary";
import ProductWelcome from "../components/ProductWelcome";

const ProductPage: VFC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fishnett | Product</title>
        <link rel="canonical" href="https://fishnett.co/product" />
      </Helmet>
      <ProductSummary />
      <ProductWelcome />
    </Layout>
  );
};

export default ProductPage;
