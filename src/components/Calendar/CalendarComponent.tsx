import React, { useState } from 'react';
import './Calendar.css';
import { Container, Button, Form, Row, Col, Stack, Modal } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const localizer = momentLocalizer(moment);

type CalendarEvent = {
  id: number;
  title: string;
  start: Date | null;
  end: Date | null;
};

export default function CalendarComponent() {
  const [events, setEvents] = useState<CalendarEvent[]>([]); 
  const [newEvent, setNewEvent] = useState<CalendarEvent>({ id: 0, title: '', start: null, end: null });
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null); 
  const [showModal, setShowModal] = useState(false); 

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert('Please fill all fields');
      return;
    }

    if (selectedEvent) {
      const updatedEvents = events.map(event => event.id === selectedEvent.id ? newEvent : event);
      setEvents(updatedEvents);
      setSelectedEvent(null);
    } else {
      const eventToAdd: CalendarEvent = {
        ...newEvent,
        id: events.length + 1,
      };
      setEvents([...events, eventToAdd]);
    }

    setNewEvent({ id: 0, title: '', start: null, end: null });
    setShowModal(false); 
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setShowModal(true); 
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const filteredEvents = events.filter(event => event.id !== selectedEvent.id);
      setEvents(filteredEvents);
      setNewEvent({ id: 0, title: '', start: null, end: null });
      setSelectedEvent(null);
      setShowModal(false); 
    }
  };

  return (
    <Container className="pt-3">
      <h1 className="text-dark p-3 fw-bold">Calendrier</h1>
      <Row>
        <Col xs={12}>
          <Button variant="outline-info" onClick={() => setShowModal(true)}>
            Add Event
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Container className="mt-4">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectEvent={(event) => handleSelectEvent(event as CalendarEvent)}
            />
          </Container>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent ? 'Edit Event' : 'Add Event'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Stack gap={3}>
              <Form.Group className="mb-3">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="Enter event title"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className='pe-3'>Start Time</Form.Label>
                <DatePicker
                  selected={newEvent.start}
                  onChange={(date) => setNewEvent({ ...newEvent, start: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label  className='pe-3'>End Time</Form.Label>
                <DatePicker
                  selected={newEvent.end}
                  onChange={(date) => setNewEvent({ ...newEvent, end: date })}
                  showTimeSelect
                  dateFormat="Pp"
                  className="form-control"
                />
              </Form.Group>
            </Stack>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {selectedEvent && (
            <Button variant="danger" onClick={handleDeleteEvent}>
              Delete Event
            </Button>
          )}
          <Button variant="primary" onClick={handleAddEvent}>
            {selectedEvent ? 'Update Event' : 'Add Event'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
