import { Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Badge } from 'react-bootstrap';
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getprecisionBy2 = (num) => num.toFixed(2);

const generateRows = (ca, tm, sm) => {
  const committeeAmount = parseInt(ca);
  const totalMonths = parseInt(tm);
  const startMonth = parseInt(sm);

  const perPersonCommitteeAmount = committeeAmount / totalMonths;
  const tableRows = [];

  for (let index = 0; index < totalMonths; index++) {
    const interestMonths = totalMonths - index - 1;
    const profit15 = committeeAmount * 0.015 * interestMonths;
    const perPerson15 =
      index === 1
        ? getprecisionBy2(perPersonCommitteeAmount)
        : getprecisionBy2(perPersonCommitteeAmount - profit15 / totalMonths);

    const currentYear = new Date().getFullYear();
    const indexYear = currentYear + parseInt((index + startMonth) / 12);
    const currentMonth = months[(index + startMonth) % 12] + ' - ' + indexYear;

    tableRows.push({
      month: currentMonth,
      profit15: index === 1 ? 0 : profit15,
      perPerson15: perPerson15,
    });
  }

  return tableRows;
};

const OutputMenu = ({ committeeAmount, totalMonths, startMonth }) => {
  return (
    <Col xs="auto" className="outputmenu">
      <hr />

      <div>
        <strong>
          Total Committee Amount:{' '}
          <Badge bg="success">Rs. {committeeAmount}</Badge>
        </strong>
        <br />
        <strong>
          Total Duration: <Badge bg="success">{totalMonths} Months</Badge>
        </strong>
      </div>
      <hr />

      <Table striped bordered hover responsive="sm" className="outputmenutable">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Month/Year</th>
            <th>Profit (1.5%)</th>
            <th>Monthly Payment of a Person(1.5%)</th>
            {/* <th>Total Profit Box (2%)</th>
            <th>perPerson Monthly Payment(2%)</th> */}
          </tr>
        </thead>
        <tbody>
          {generateRows(committeeAmount, totalMonths, startMonth).map(
            (tableRow, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{tableRow.month}</td>
                <td>{tableRow.profit15 === 0 ? '-' : tableRow.profit15}</td>
                <td>
                  {tableRow.perPerson15 === 0 ? '-' : tableRow.perPerson15}
                </td>
                {/* <td>{tableRow.profit20 === 0 ? '-' : tableRow.profit20}</td>
              <td>{tableRow.prePerson20 === 0 ? '-' : tableRow.prePerson20}</td> */}
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </Col>
  );
};

export default OutputMenu;
