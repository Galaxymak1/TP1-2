import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './Calendar.css';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <Container className="">
        <h1 className='text-light p-3 fw-bold  bg-black  rounded shadow-sm '>Calendrier</h1>
      <Container className="">
        <Container className="">
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        </Container>
      </Container>
    </Container>
  );
}