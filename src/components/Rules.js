import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './rules.css';

const Rules = () => {
  const showDates = (id) => {
    return (
      <select class="small" id={id}>
        <option value="">--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
    );
  };

  return (
    <ListGroup>
      <ListGroup.Item>
        (1) Payment to be done between {showDates('from')} and {showDates('to')}{' '}
        of a Month.
      </ListGroup.Item>
      <ListGroup.Item>
        (2) Committee will be given on {showDates('committeeDate')} and of the
        Month.
      </ListGroup.Item>
      <ListGroup.Item>
        (3) Rs. {showDates('penalty')} and per day will be the fine for both
        Owner and Members.
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Rules;
