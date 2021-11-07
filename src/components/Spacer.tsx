import { VFC } from "react";

interface Props {
  width?: number;
  height?: number;
}

const Spacer: VFC<Props> = ({ width, height }) => (
  <div
    style={{
      width,
      height,
    }}
  ></div>
);

export default Spacer;
