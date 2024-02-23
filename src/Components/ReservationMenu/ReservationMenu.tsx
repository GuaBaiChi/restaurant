import React, { useState, ChangeEvent, FormEvent } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import ShadowBox from "../ShadowBox/ShadowBox";

type FormData = {
  startDate: string;
  endDate: string;
  guestCount: string;
};

type ReservationMenuProps = {
  onSubmit: (data: FormData) => void;
};

const ReservationMenu: React.FC<ReservationMenuProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    // If the end date is on or before the selected start date, reset it
    if (endDate <= selectedStartDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedEndDate = e.target.value;
    // If the selected end date is on or before the start date, prevent setting it
    if (selectedEndDate <= startDate) {
      return;
    }
    setEndDate(selectedEndDate);
  };

  const handleGuestCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestCount(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      startDate,
      endDate,
      guestCount,
    };
    onSubmit(formData);
  };

  return (
    <div>
      <ShadowBox mode="mid">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h3>Choose Your Stay</h3>
              <p>We are excited to have you. Please let us know more about your upcoming stay.</p>
            </Col>
            <Col>
              <Row>
                <Form.Group controlId="startDate" style={{ width: "100%" }}>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    min={today} // Set minimum date to today
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="endDate" style={{ width: "100%" }}>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    min={startDate || today} // Set minimum date to selected start date or today
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="guestCount" style={{ width: "100%" }}>
                  <Form.Label>Guest Count</Form.Label>
                  <Form.Control
                    as="select"
                    value={guestCount}
                    onChange={handleGuestCountChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Col>
                  <Button variant="success" type="submit" size="lg" className="input-form-button mt-5" style={{ "float": "right" }}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </ShadowBox>
    </div>
  );
};

export default ReservationMenu;
