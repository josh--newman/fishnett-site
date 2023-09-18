import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
// import Features from "../components/Features";
import ProductSummary from "../components/ProductSummary";
import ProductWelcome from "../components/ProductWelcome";
import ProductFeature from "../components/ProductFeature";
import productFeatures from "../components/productFeatures";
import ContactForm from "../components/ContactForm";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fishnett | Home</title>
        <link rel="canonical" href="https://fishnett.co/" />
      </Helmet>
      <Hero />
      <Highlights />
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
      <ContactForm />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
