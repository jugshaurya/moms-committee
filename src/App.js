import './App.css';
import InputMenu from './components/InputMenu';
import OutputMenu from './components/OutputMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import PdfContainer from './components/PdfContainer';
import generatePdf from './components/generatePdf';

const createPdf = (html) => generatePdf.createPdf(html);

function App() {
  return (
    <div className="App">
      <PdfContainer createPdf={createPdf}>
        <Container>
          <Row>
            <InputMenu />
            <OutputMenu committeeAmount={60000} totalMonths={12} />
          </Row>
        </Container>
      </PdfContainer>
    </div>
  );
}

export default App;
