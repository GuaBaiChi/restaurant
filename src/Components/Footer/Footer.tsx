import { Nav } from "react-bootstrap";
import { hotelData } from "../../Data/HotelData";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-info">
          <div>{hotelData.name}</div>
          <div>Phone: {hotelData.phone}</div>
          <div>Email: {hotelData.email}</div>
        </div>
        <div className="footer-links">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/book">Book</Nav.Link>
            <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
            <Nav.Link as={Link} to="/dining">Dining</Nav.Link>
            <Nav.Link as={Link} to="/spa">Spa</Nav.Link>
          </Nav>
        </div>
      </div>
      <div className="footer-icons">
        <a href="mailto:leon.antonio.rodriguez.sanpere@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/leon-r-60a370214/">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="https://github.com/GuaBaiChi">
          <i className="fa fa-github-square"></i>
        </a>
      </div>
      <div className="copyright">
        &copy; {2024} {hotelData.name}. All rights reserved. | Designed by Leon Rodriguez
      </div>
    </div>
  );
}
