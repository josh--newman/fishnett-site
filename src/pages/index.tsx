import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";

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
      <Testimonials />
      <Features />
    </Layout>
  );
};

export default IndexPage;
