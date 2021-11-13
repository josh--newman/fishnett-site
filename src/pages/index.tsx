import { VFC } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";

const IndexPage: VFC = () => {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
