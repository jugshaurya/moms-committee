import { useState } from 'react';
import './App.css';
import InputMenu from './components/InputMenu';
import OutputMenu from './components/OutputMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PdfContainer from './components/PdfContainer';
import generatePdf from './components/generatePdf';
import Rules from './components/Rules';

const createPdf = (html) => generatePdf.generate(html);

function App() {
  const [committeeAmount, setComAmount] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);
  const [startMonth, setStartMonth] = useState(0);
  const [show1Percentage, setShow1Percentage] = useState(false);
  const [show15Percentage, setShow15Percentage] = useState(false);
  const [show2Percentage, setShow2Percentage] = useState(false);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h2>Committee Generator</h2>
          </Col>
        </Row>
        <Row>
          <InputMenu
            setComAmount={setComAmount}
            setTotalMonths={setTotalMonths}
            setStartMonth={setStartMonth}
            setShow1Percentage={setShow1Percentage}
            setShow15Percentage={setShow15Percentage}
            setShow2Percentage={setShow2Percentage}
            show1Percentage={show1Percentage}
            show15Percentage={show15Percentage}
            show2Percentage={show2Percentage}
          />
        </Row>
        <PdfContainer createPdf={createPdf}>
          <Row>
            <OutputMenu
              committeeAmount={committeeAmount}
              totalMonths={totalMonths}
              startMonth={startMonth}
              show1Percentage={show1Percentage}
              show15Percentage={show15Percentage}
              show2Percentage={show2Percentage}
            />
          </Row>
          <Row>
            <Col>
              <Rules />
            </Col>
          </Row>
        </PdfContainer>
      </Container>
    </div>
  );
}

export default App;
