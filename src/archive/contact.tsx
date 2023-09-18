import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Contact</title>
        <link rel="canonical" href="https://fishnett.com.au/contact" />
      </Helmet>
      <h1>Contact</h1>
    </Layout>
  );
};

export default ContactPage;
