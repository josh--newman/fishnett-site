import { css } from "@emotion/react";
import { VFC } from "react";

import Spacer from "../Spacer";
import Text from "../Text";
import testimonialData from "./data";

import ballina from "../../images/customers/ballina.png";
import bermagui from "../../images/customers/bermagui.png";
import commercialFishCoop from "../../images/customers/commercial.png";
import ulladulla from "../../images/customers/ulladulla.png";
import wallis from "../../images/customers/wallis.png";

const wrapperStyles = css`
  width: 100%;
  background-color: var(--dark-blue);
  color: var(--white);
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  text-align: center;
`;

const gridContainer = css`
  display: grid;
  align-items: center;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const itemContainer = css`
  display: flex;
  flex-direction: column;
  text-align: left;

  img {
    width: 100%;
    height: auto;
  }
`;

const customerImageStyles = css`
  max-width: 150px;
  img {
    width: 100%;
    height: auto;
  }
`;

interface TestimonialProps {
  photoSrc: string;
  text: string;
  name: string;
  role: string;
  company: string;
}

const Testimonial: VFC<TestimonialProps> = ({
  photoSrc,
  text,
  name,
  role,
  company,
}) => {
  return (
    <article css={itemContainer}>
      <img
        style={{ backgroundColor: "lightgray" }}
        height={350}
        src={photoSrc}
      />
      <Spacer height={20} />
      <Text type="body" tag="p">
        “{text}”
      </Text>
      <Spacer height={15} />
      <Text type="subtitle" tag="p">
        {name}, {role}
      </Text>
      <Text type="subtitle" tag="p">
        {company}
      </Text>
    </article>
  );
};

const customerImages = [
  { src: ballina, alt: "Ballina Fishermen’s Co-op" },
  { src: bermagui, alt: "Bermagui Fishermen’s Co-op" },
  { src: commercialFishCoop, alt: "Commercial Fishermen’s Co-op" },
  { src: ulladulla, alt: "Ulladulla Fishermen’s Co-op" },
  { src: wallis, alt: "Wallis Lake Fishermen’s Co-op" },
];

const Testimonials: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <Spacer height={30} />
        <Text type="md-heading" tag="h2">
          Loved by the fishing industry Australia wide
        </Text>
        <Spacer height={15} />
        <Text type="xs-heading" tag="h3">
          Fully endorsed by Sydney Fish Market, the largest seafood market in
          the southern hemisphere.
        </Text>
        <Spacer height={50} />
        <div css={gridContainer}>
          {customerImages.map((item) => {
            return (
              <div css={customerImageStyles}>
                <img
                  style={{ backgroundColor: "lightgray" }}
                  height={350}
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
