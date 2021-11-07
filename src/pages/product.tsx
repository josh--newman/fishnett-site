import { VFC } from "react";
import { css } from "@emotion/react";
import Layout from "../components/Layout";

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

const ProductPage: VFC = () => {
  return (
    <Layout>
      <main css={pageStyles}>
        <h1>Product</h1>
      </main>
    </Layout>
  );
};

export default ProductPage;
