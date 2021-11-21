import { css } from "@emotion/react";
import { Fragment, VFC } from "react";

import LinkButton from "./LinkButton";
import productFeatures from "./productFeatures";
import Spacer from "./Spacer";
import Text from "./Text";

const wrapperStyles = css`
  width: 100%;
  background-color: var(--dark-blue);
`;

const containerStyles = css`
  padding: 40px;
  max-width: var(--max-page-width);
  margin: 0 auto;
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
`;

const featureListStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const featureItemStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: fit-content;
  padding: 0;

  img {
    background-color: papayawhip;
    width: 64px;
    height: 64px;
    border-radius: 10px;
  }
`;

interface FeatureItemProps {
  iconUrl: string;
  title: string;
  subtitle: string;
}

const FeatureItem: VFC<FeatureItemProps> = ({ iconUrl, title, subtitle }) => {
  return (
    <li css={featureItemStyles}>
      <img src={iconUrl} />
      <Spacer width={20} />
      <div>
        <Text type="sml-heading" tag="p">
          {title}
        </Text>
        <Text type="body" tag="p">
          {subtitle}
        </Text>
      </div>
    </li>
  );
};

const Features: VFC = () => {
  return (
    <section css={wrapperStyles}>
      <div css={containerStyles}>
        <div>
          <Text type="md-heading" tag="p">
            Make your day to day operations simpler
          </Text>
          <Spacer height={20} />
          <Text type="body" tag="p">
            Fishnett simplifies your operational overhead by streamlining the
            catch capturing process and automating the generation of invoices
            and reports.
          </Text>
          <Spacer height={40} />
          <LinkButton theme="dark" to="/product">
            Learn more
          </LinkButton>
        </div>
        <ul css={featureListStyles}>
          {productFeatures.map((feature, index) => {
            return (
              <Fragment>
                <FeatureItem
                  key={index}
                  iconUrl=""
                  title={feature.heading}
                  subtitle={feature.summary}
                />
                <Spacer height={30} />
              </Fragment>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
