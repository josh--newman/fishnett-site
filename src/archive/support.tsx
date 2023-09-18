import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const SupportPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Support</title>
        <link rel="canonical" href="https://fishnett.com.au/support" />
      </Helmet>
      <h1>Support</h1>
    </Layout>
  );
};

export default SupportPage;
