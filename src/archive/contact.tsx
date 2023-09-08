import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fishnett | Contact</title>
        <link rel="canonical" href="https://fishnett.co/contact" />
      </Helmet>
      <h1>Contact</h1>
    </Layout>
  );
};

export default ContactPage;
