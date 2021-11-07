import { VFC } from "react";
import { css } from "@emotion/react";

import Spacer from "./Spacer";
import boatImg from "../images/fishnett-logo-light.svg";
import fishnettLogo from "../images/fishnett-light.png";

const logoContainerStyles = css`
  display: flex;
  align-items: center;
`;

const HeaderLogo: VFC = () => {
  return (
    <div css={logoContainerStyles}>
      <img width="100px" src={boatImg} alt="fishnett logo" />
      <Spacer width={10} />
      <div>
        <img src={fishnettLogo} alt="Fishnett" />
      </div>
    </div>
  );
};

export default HeaderLogo;
