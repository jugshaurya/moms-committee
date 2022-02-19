import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Rules = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        (1) Payment to be done between 7th and 12th of a Month.
      </ListGroup.Item>
      <ListGroup.Item>
        (2) Committee will be given on 15th of the Month.
      </ListGroup.Item>
      <ListGroup.Item>
        (3) Rs.20 per day will be the fine for both Owner and Members.
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Rules;
