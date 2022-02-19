import { Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

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

const generateRows = (committeeAmount, totalMonths) => {
  const perPersonCommitteeAmount = committeeAmount / totalMonths;
  const tableRows = [];

  for (let index = 0; index < totalMonths; index++) {
    const profit15 = committeeAmount * 0.015 * (totalMonths - index - 1);
    const profit20 = committeeAmount * 0.02 * (totalMonths - index - 1);
    if (index === 1) {
      tableRows.push({
        month: months[index % 12],
        profit15: 0,
        prePerson15: perPersonCommitteeAmount,
        profit20: 0,
        prePerson20: perPersonCommitteeAmount,
      });

      continue;
    }
    tableRows.push({
      month: months[index % 12],
      profit15,
      prePerson15: perPersonCommitteeAmount - profit15 / totalMonths,
      profit20,
      prePerson20: perPersonCommitteeAmount - profit20 / totalMonths,
    });
  }

  return tableRows;
};

const OutputMenu = ({ committeeAmount, totalMonths }) => {
  return (
    <Col xs="auto">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Month</th>
            <th>Total Profit Box (1.5%)</th>
            <th>perPerson Monthly Payment(1.5%)</th>
            <th>Total Profit Box (2%)</th>
            <th>perPerson Monthly Payment(2%)</th>
          </tr>
        </thead>
        <tbody>
          {generateRows(committeeAmount, totalMonths).map((tableRow, idx) => (
            <tr key={idx}>
              <td>{tableRow.month}</td>
              <td>{tableRow.profit15 === 0 ? '-' : tableRow.profit15}</td>
              <td>{tableRow.prePerson15 === 0 ? '-' : tableRow.prePerson15}</td>
              <td>{tableRow.profit20 === 0 ? '-' : tableRow.profit20}</td>
              <td>{tableRow.prePerson20 === 0 ? '-' : tableRow.prePerson20}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default OutputMenu;
