import './Home.css';
import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';

// data
import { Hotel, hotelData, rooms } from '../../Data/FoodData';
import { SHIP_PICS } from '../../Data/HotelImagesData';
import { FOOD_PICS } from '../../Data/FoodImagesData';
import { HOTEL_PICS } from '../../Data/HotelImagesData';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function HotelLandingPage({ hotel }: { hotel: Hotel }) {
  return (
    <>
      <div className="about">
        <h1>{hotel.name}</h1>
        <p>{hotel.description}</p>
        <main>
          <div className="">
            <img src={hotel.imageUrl} alt={hotel.name} />
          </div>
          <div className="">
            <h2>About {hotel.name}</h2>
            <p>{hotel.description}</p>
            <p>Phone: {hotel.phone}</p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </main>
        <p>Contact us: {hotel.email}</p>
      </div>
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

function Home() {
  return (
    <>
      <HomeCarousel items={FOOD_PICS} />
      <div className="home-container">
        <div className="home">
          <HotelLandingPage hotel={hotelData} />
        </div>
      </div>
    </>
  );
}



export default Home;
