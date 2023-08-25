
interface Props {
  width?: number;
  height?: number;
}

const Spacer = ({ width, height }: Props) => (
  <div
    style={{
      width,
      height,
    }}
  ></div>
);

export default Spacer;
