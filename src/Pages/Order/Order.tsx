import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './Order.css';
import { rooms } from '../../Data/FoodData';
import ReservationMenu from '../../Components/ReservationMenu/ReservationMenu';

function Order() {
  return (
    <>
      <ReservationMenu onSubmit={function (data: { startDate: string; endDate: string; guestCount: string; }): void {
        throw new Error('Function not implemented.');
      }} />
      <div className="room-cards-container">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <Card style={{ width: '14rem', height: '100%' }}>
              <Card.Img variant="top" src={room.imageUrl} />
              <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <Card.Text>Price: ${room.price} per night</Card.Text>
                <div className="button-container">
                  <Link to={`/room/${room.id}`} className="btn btn-primary">View Room</Link>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Order;
