import React from "react";
import { css } from "@emotion/react";
import logo from "../images/logo.png";

// styles
const pageStyles = css`
  color: #232129;
  padding: 96;
  font-family: -apple-system, Roboto, sans-serif, serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  color: #333;
`;

// markup
const IndexPage = () => {
  return (
    <main css={pageStyles}>
      <img src={logo} />
      <h1>Watch this space</h1>
    </main>
  );
};

export default IndexPage;
