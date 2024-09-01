import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const styles = {
  container: css`
    max-width: 48rem;
    margin: 0 auto;
    padding: 2rem 1rem;
  `,
  heading1: css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  `,
  heading2: css`
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  `,
  paragraph: css`
    margin-top: 1rem;
  `,
  list: css`
    list-style-type: disc;
    padding-left: 1.25rem;
    margin-bottom: 1rem;
  `,
  link: css`
    color: #0000ee;
    text-decoration: underline;
    &:visited {
      color: #551a8b;
    }
  `,
};

const MobilePage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Privacy Policy</title>
        <link rel="canonical" href="https://fishnett.com.au/privacy-policy" />
      </Helmet>
      <section
        css={css`
          padding: 40px;
        `}
      >
        <body>
          <div css={styles.container}>
            <h1 css={styles.heading1}>Privacy Policy</h1>
            <p css={styles.paragraph}>
              This privacy policy applies to the FishNett app (hereby referred
              to as "Application") for mobile devices that was created by
              Productive Office Australia (hereby referred to as "Service
              Provider") as a Free service. This service is intended for use "AS
              IS".
            </p>

            <h2 css={styles.heading2}>Information Collection and Use</h2>
            <p css={styles.paragraph}>
              The Application collects information when you download and use it.
              This information may include information such as{" "}
            </p>
            <ul css={styles.list}>
              <li>Your device's Internet Protocol address (e.g. IP address)</li>
              <li>
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages
              </li>
              <li>The time spent on the Application</li>
              <li>The operating system you use on your mobile device</li>
            </ul>
            <p css={styles.paragraph}>
              The Application does not gather precise information about the
              location of your mobile device.
            </p>

            <p css={styles.paragraph}>
              The Service Provider may use the information you provided to
              contact you from time to time to provide you with important
              information, required notices and marketing promotions.
            </p>

            <p css={styles.paragraph}>
              For a better experience, while using the Application, the Service
              Provider may require you to provide us with certain personally
              identifiable information, including but not limited to Email,
              first name, last name, phone number, organisation, user ID. The
              information that the Service Provider request will be retained by
              them and used as described in this privacy policy.
            </p>

            <h2 css={styles.heading2}>Third Party Access</h2>
            <p css={styles.paragraph}>
              Only aggregated, anonymized data is periodically transmitted to
              external services to aid the Service Provider in improving the
              Application and their service. The Service Provider may share your
              information with third parties in the ways that are described in
              this privacy statement.
            </p>

            <p css={styles.paragraph}>
              Please note that the Application utilizes third-party services
              that have their own Privacy Policy about handling data. Below are
              the links to the Privacy Policy of the third-party service
              providers used by the Application:
            </p>
            <ul css={styles.list}>
              <li>
                <a
                  css={styles.link}
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  css={styles.link}
                  href="https://expo.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Expo
                </a>
              </li>
            </ul>

            <p css={styles.paragraph}>
              The Service Provider may disclose User Provided and Automatically
              Collected Information:
            </p>
            <ul css={styles.list}>
              <li>
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </li>
              <li>
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;
              </li>
              <li>
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information we disclose to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement.
              </li>
            </ul>

            <h2 css={styles.heading2}>Opt-Out Rights</h2>
            <p css={styles.paragraph}>
              You can stop all collection of information by the Application
              easily by uninstalling it. You may use the standard uninstall
              processes as may be available as part of your mobile device or via
              the mobile application marketplace or network.
            </p>

            <h2 css={styles.heading2}>Data Retention Policy</h2>
            <p css={styles.paragraph}>
              The Service Provider will retain User Provided data for as long as
              you use the Application and for a reasonable time thereafter. If
              you'd like them to delete User Provided Data that you have
              provided via the Application, please contact them at
              josh@fishnett.com.au and they will respond in a reasonable time.
            </p>

            <h2 css={styles.heading2}>Children</h2>
            <p css={styles.paragraph}>
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            <p css={styles.paragraph}>
              The Application does not address anyone under the age of 13. The
              Service Provider does not knowingly collect personally
              identifiable information from children under 13 years of age. In
              the case the Service Provider discover that a child under 13 has
              provided personal information, the Service Provider will
              immediately delete this from their servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact the Service Provider
              (josh@fishnett.com.au) so that they will be able to take the
              necessary actions.
            </p>

            <h2 css={styles.heading2}>Security</h2>
            <p css={styles.paragraph}>
              The Service Provider is concerned about safeguarding the
              confidentiality of your information. The Service Provider provides
              physical, electronic, and procedural safeguards to protect
              information the Service Provider processes and maintains.
            </p>

            <h2 css={styles.heading2}>Changes</h2>
            <p css={styles.paragraph}>
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </p>

            <p css={styles.paragraph}>
              This privacy policy is effective as of 2024-09-01
            </p>

            <h2 css={styles.heading2}>Your Consent</h2>
            <p css={styles.paragraph}>
              By using the Application, you are consenting to the processing of
              your information as set forth in this Privacy Policy now and as
              amended by us.
            </p>

            <h2 css={styles.heading2}>Contact Us</h2>
            <p css={styles.paragraph}>
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at josh@fishnett.com.au.
            </p>
          </div>
        </body>
      </section>
    </Layout>
  );
};

export default MobilePage;
