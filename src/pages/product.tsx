import { VFC } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import ProductSummary from "../components/ProductSummary";
import ProductFeature from "../components/ProductFeature";

const ProductPage: VFC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fishnett | Product</title>
        <link rel="canonical" href="https://fishnett.co/product" />
      </Helmet>
      <ProductSummary />
      <ProductFeature
        heading="Feature one"
        tagline="A tagline about feature one"
        details={["So cool", "Very useful", "Saves so much time and money"]}
        imageSrc=""
      />
    </Layout>
  );
};

export default ProductPage;
