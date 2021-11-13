import { VFC } from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";

const IndexPage: VFC = () => {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <Testimonials />
      <Features />
    </Layout>
  );
};

export default IndexPage;
