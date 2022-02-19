import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  generate = (html) => {
    savePDF(html, {
      paperSize: 'Letter',
      fileName: `committee-${new Date()}.pdf`,
      margin: 3,
    });
  };
}

const Doc = new DocService();
export default Doc;
