import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Contact</title>
        <link rel="canonical" href="https://fishnett.com.au/contact" />
      </Helmet>

      <body>
        <ContactForm />
      </body>
    </Layout>
  );
};

export default ContactPage;
