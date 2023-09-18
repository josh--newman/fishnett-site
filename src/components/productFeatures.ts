import receiptImg from "../images/receipt-feature.png";
import dispatchImg from "../images/dispatch-feature.png";
import salesImg from "../images/sales-feature.png";

const productFeatures = [
  {
    heading: "Recording products received",
    imgSrc: receiptImg,
    summary: "Find, view, and modify batches in multiple ways.",
    details: [
      "From a mobile app to an industrial touchscreen scale, effortlessly document and amend received products using a variety of devices.",
      "Generate industry compliant, barcoded labels or tickets for products as they are received.",
      "Easily record products caught by fishing crews, specifying the value and quota splits among crew members.",
      "Generate comprehensive receipts for suppliers",
    ],
  },
  {
    heading: "Stock Management",
    imgSrc: dispatchImg,
    summary:
      "Keep track of product on hand, bulk bins, catch monitoring forms and CMAU Book numbers, and more.",
    details: [
      "Instantly track and transfer products across multiple depots/warehouses, if necessary, and generate precise stock reports.",
      "Create reports on balances and ownership in live product tanks.",
      "Create reports on product spoilage.",
      "Simplify the process of consigning products and generating eManifests for transportation and SFM.",
      "Effortlessly list products for sale on the SFMblue digital trading platform",
    ],
  },
  {
    heading: "Sales & Invoicing",
    imgSrc: salesImg,
    summary:
      "Import and reconcile sales data as well as generate product sales invoices, and more.",
    details: [
      "Import SFM and SFMblue sales data and automatically reconcile prices to consigned products.",
      "Automatically generate RCTIs for suppliers, accounting for deductions such as fees, charges, handling, commissions, share or loan repayments, and more.",
      "Generate credit sales invoices to your suppliers for expenses like fuel, bait, ice, handling and more.",
    ],
  },
  {
    heading: "Compliance Services",
    imgSrc: salesImg,
    summary:
      "Import and reconcile sales data as well as generate product sales invoices, and more.",
    details: [
      "Implement Barcode Traceability and uphold Chain of Custody standards.",
      "Generate detailed compliance reports for State and Commonwealth Fisheries in minutes.",
      "Ensure compliance with Food Standards Australia New Zealand (FSANZ) regulations",
      "Develop and produce Australian Institute for Food Safety reports, adhering to Standard 3.2.2A.",
    ],
  },
];

export default productFeatures;
