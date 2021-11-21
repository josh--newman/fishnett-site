import receiptImg from "../images/receipt-feature.png";
import dispatchImg from "../images/dispatch-feature.png";
import salesImg from "../images/sales-feature.png";

const productFeatures = [
  {
    heading: "Receipt",
    imgSrc: receiptImg,
    summary: "Find, view, and modify batches in multiple ways.",
    details: [
      "Find, view and modify batches and product by date, batch number, fisher, fishery, SFM Vendor number, FRN, FBN & more.",
      "Generate distribution reports, batch tally reports, catch by fisherman and compliance reports.",
      "AFMA & CCSBT including disposal records, catch tagging forms and CTAU Book numbers",
    ],
  },
  {
    heading: "Dispatch",
    imgSrc: dispatchImg,
    summary:
      "Keep track of product on hand, bulk bins, catch monitoring forms and CMAU Book numbers, and more.",
    details: [
      "Keep track of product on hand, bulk bins, catch monitoring forms and CMAU Book numbers.",
      "Generate, view and modify consignments. Search by date, consignment number, destination, market type, carrier and more.",
      "Generate consignment reports, transport manifests and other reports about dispatch.",
    ],
  },
  {
    heading: "Sales & Reports",
    imgSrc: salesImg,
    summary:
      "Import and reconcile sales data as well as generate product sales invoices, and more.",
    details: [
      "Import and reconcile sales data as well as generate product sales invoices.",
      "Generate RCTIs and crew distribution reports.",
      "DPI Fish Receiver.",
      "Find, view and modify documents and reports.",
      "Export selected documents to MYOB, Quicken or Zero.",
    ],
  },
];

export default productFeatures;
