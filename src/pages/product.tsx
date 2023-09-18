import { css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const ProductPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FishNett | Product</title>
        <link rel="canonical" href="https://fishnett.com.au/product" />
      </Helmet>
      <section
        css={css`
          padding: 40px;
        `}
      >
        <body>
          <h2>Slide One</h2>

          <h3>Recording Products Received</h3>
          <ul>
            <li>
              From a mobile app to an industrial touchscreen scale, effortlessly
              document and amend received products using a variety of devices.
              <ul>
                <li>
                  We currently produce the industrial scales and are looking to
                  provide a range of cheaper options for the smaller operators
                  including phone or tablet apps, bluetooth scales and
                  label/ticket printers as well as the option to include product
                  images.
                </li>
              </ul>
            </li>
            <li>
              Generate industry compliant, barcoded labels or tickets for
              products as they are received.
            </li>
            <li>
              Easily record products caught by fishing crews, specifying the
              value and quota splits among crew members.
            </li>
            <li>Generate comprehensive receipts for suppliers.</li>
          </ul>

          <h3>Stock Management</h3>
          <ul>
            <li>
              Instantly track and transfer products across multiple
              depots/warehouses, if necessary, and generate precise stock
              reports.
            </li>
            <li>
              Create reports on balances and ownership in live product tanks.
            </li>
            <li>Create reports on product spoilage.</li>
          </ul>

          <h3>eManifest Handling</h3>
          <ul>
            <li>
              Simplify the process of consigning products and generating
              eManifests for transportation and SFM.
            </li>
          </ul>

          <h3>SFMblue Listing</h3>
          <ul>
            <li>
              Effortlessly list products for sale on the SFMblue digital trading
              platform.
            </li>
          </ul>

          <h2>Slide Two</h2>

          <h3>Sales Invoicing</h3>
          <ul>
            <li>Generate electronic sales invoices for buyers.</li>
            <li>
              Import SFM and SFMblue sales data and automatically reconcile
              prices to consigned products.
            </li>
          </ul>

          <h3>Back to Boat Prices</h3>
          <ul>
            <li>
              Record Back2Boat prices and send daily notifications to your
              suppliers via SMS.
            </li>
          </ul>

          <h3>Compliance Services</h3>
          <ul>
            <li>
              Implement Barcode Traceability and uphold Chain of Custody
              standards.
            </li>
            <li>
              Generate detailed compliance reports for State and Commonwealth
              Fisheries in minutes.
            </li>
            <li>Marine Stewardship Council compliance</li>
            <li>
              Ensure compliance with Food Standards Australia New Zealand
              (FSANZ) regulations.
            </li>
            <li>
              Develop and produce Australian Institute for Food Safety reports,
              adhering to Standard 3.2.2A.
            </li>
            <li>
              Collect and lodge Catch &amp; Effort Log data with NSW DPI
              “FishOnline” on behalf of the fisherman as we currently do with
              AFMA for Commonwealth fishermen (Investigating this possibility)
            </li>
          </ul>

          <h2>Slide Three</h2>

          <h3>Recipient Created Tax Invoices (RCTIs)</h3>
          <ul>
            <li>
              Automatically generate RCTIs for suppliers, accounting for
              deductions such as fees, charges, handling, commissions, share or
              loan repayments, and more.
            </li>
            <li>
              Generate credit sales invoices to your suppliers for expenses like
              fuel, bait, ice, handling and more.
            </li>
          </ul>

          <h3>Co-operative Member Share and Loan Management</h3>
          <ul>
            <li>
              Record transactions related to member shares and loans, and
              generate balance reports.
            </li>
          </ul>

          <h3>Quota Management</h3>
          <ul>
            <li>Reconcile transactions with compliance authorities.</li>
            <li>
              Get up to date balances on remaining quota as soon as a catch is
              recorded.
            </li>
          </ul>

          <h3>Reports and Notifications</h3>
          <ul>
            <li>
              Send reports, documents, and notifications via email or SMS.
            </li>
          </ul>

          <h3>Accounting Integration</h3>
          <ul>
            <li>
              Seamlessly export data to your preferred accounting software.
            </li>
          </ul>

          <h3>POS Integration</h3>
          <ul>
            <li>Seamlessly export data to your preferred POS software.</li>
          </ul>

          <h3>Processor Operations</h3>
          <ul>
            <li>
              Document processing operations, including time and conversion
              ratios.
            </li>
          </ul>
        </body>
      </section>
    </Layout>
  );
};

export default ProductPage;
