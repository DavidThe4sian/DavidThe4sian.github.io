import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDF extends React.Component {
  render() {
    return (
    <Document file="resume.pdf" onLoadError={console.error} onLoadSuccess={(pdf) => this.forceUpdate()}>
    <Page pageNumber={1}/>
    </Document>);
  }
}

export default PDF;
