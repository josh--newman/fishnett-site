import { VFC } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import ProductSummary from "../components/ProductSummary";
import ProductWelcome from "../components/ProductWelcome";
import ProductFeature from "../components/ProductFeature";
import productFeatures from "../components/productFeatures";

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
      {productFeatures.map((feature, index) => {
        return (
          <ProductFeature
            key={index}
            index={index}
            heading={feature.heading}
            imgSrc={feature.imgSrc}
            details={feature.details}
          />
        );
      })}
    </Layout>
  );
};

export default ProductPage;
