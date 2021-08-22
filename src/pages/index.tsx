import { VFC } from "react";
import { css } from "@emotion/react";
import Layout from "../components/Layout";
import logo from "../images/fishnett-logo.png";

// styles
const pageStyles = css`
  color: #232129;
  padding: 96;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: #333;
`;

const IndexPage: VFC = () => {
  return (
    <Layout>
      <main css={pageStyles}>
        <img src={logo} />
        <h1>Watch this space</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
