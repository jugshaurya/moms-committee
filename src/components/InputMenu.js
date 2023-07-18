import React from 'react';
import { Form } from 'react-bootstrap';

const InputMenu = ({
  setComAmount,
  setTotalMonths,
  setStartMonth,
  setShow1Percentage,
  setShow15Percentage,
  show1Percentage,
  show15Percentage,
  show2Percentage,
  setShow2Percentage,
}) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="totalCommitteeAmount">
          <Form.Label>Total Committee Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            step="10000"
            onChange={({ target: { value } }) => setComAmount(value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="numberOfMonths">
          <Form.Label> Number of Months</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Month Count"
            onChange={({ target: { value } }) => setTotalMonths(value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label> Enter Starting Month</Form.Label>
          <Form.Select
            aria-label="JAN"
            onChange={({ target: { value } }) => setStartMonth(value)}
          >
            <option>---</option>
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">Aug</option>
            <option value="8">Sept</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Check
            type="checkbox"
            id={`one-checkbox`}
            label={`Need 1% ?`}
            checked={show1Percentage}
            onChange={() => {
              setShow1Percentage(!show1Percentage);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Check
            type="checkbox"
            id={`onehalf-checkbox`}
            label={`Need 1.5% ?`}
            checked={show15Percentage}
            onChange={() => {
              setShow15Percentage(!show15Percentage);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Check
            type="checkbox"
            id={`two-checkbox`}
            label={`Need 2% ?`}
            checked={show2Percentage}
            onChange={() => {
              setShow2Percentage(!show2Percentage);
            }}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default InputMenu;
