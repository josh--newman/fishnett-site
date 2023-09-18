import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const SetupPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Setup</title>
        <link rel="canonical" href="https://fishnett.com.au/setup" />
      </Helmet>
      <h1>Setup</h1>
    </Layout>
  );
};

export default SetupPage;
