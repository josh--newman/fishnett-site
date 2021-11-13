import { VFC } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const SetupPage: VFC = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fishnett | Setup</title>
        <link rel="canonical" href="https://fishnett.co/setup" />
      </Helmet>
      <h1>Setup</h1>
    </Layout>
  );
};

export default SetupPage;
