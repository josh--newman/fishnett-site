import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import ProductSummary from "../components/ProductSummary";
import ProductFeature from "../components/ProductFeature";
import productFeatures from "../components/productFeatures";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Home</title>
        <link rel="canonical" href="https://fishnett.com.au/" />
      </Helmet>
      <Hero />
      <Highlights />
      <ProductSummary />
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
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
