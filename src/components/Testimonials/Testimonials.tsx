import { css } from "@emotion/react";
import { VFC } from "react";

import Spacer from "../Spacer";
import Text from "../Text";
import testimonialData from "./data";

const wrapperStyles = css`
  width: 100%;
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
  grid-column-gap: 50px;
  grid-row-gap: 50px;
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

const Testimonials: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <Spacer height={30} />
        <Text type="md-heading" tag="h2">
          Loved by the fishing industry Australia wide
        </Text>
        <Spacer height={50} />
        <div css={gridContainer}>
          {testimonialData.map((item, i) => {
            return (
              <Testimonial
                key={i}
                photoSrc={item.photoSrc}
                text={item.text}
                name={item.name}
                role={item.role}
                company={item.company}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
