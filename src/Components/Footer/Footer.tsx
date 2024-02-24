import { Nav } from "react-bootstrap";
import { hotelData } from "../../Data/FoodData";
import "./Footer.css";
import { Link } from "react-router-dom";
import zaloIcon from "../../Images/ZaloIcon/zalo-icon.png";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-info">
          <div>{hotelData.name}</div>
          <div>
            <i className="fa fa-phone-square" aria-hidden="true"></i>
            {" "}Phone: {hotelData.phone}</div>
          {/* <div>Email: {hotelData.email}</div> */}
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            {" "}Address:{" "}
            {/* https://maps.app.goo.gl/1nbUgNKBi3aP8NDEA */}
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelData.address)}`} target="_blank">

              {hotelData.address}
            </a>
          </div>
        </div>
        <div className="footer-links">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/order">Order</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          </Nav>
        </div>
      </div>
      <div className="footer-icons">
        <a href="mailto:leon.antonio.rodriguez.sanpere@gmail.com">
          <i className="fa fa-envelope">Email</i>
        </a>
        <a href="https://github.com/GuaBaiChi">
          <i className="fa fa-facebook-square" aria-hidden="true">Facebook</i>
        </a>
        <a href="https://github.com/GuaBaiChi">
          <i className="fa fa-instagram" aria-hidden="true">Instagram</i>
        </a>
        <a href="https://icons8.com/icon/0m71tmRjlxEe/zalo" className="zalo-link">
          <img src={zaloIcon} alt="Zalo" />
          Zalo
        </a>
      </div>
      <div className="copyright">
        &copy; {2024} {hotelData.name}. All rights reserved. | Designed by Leon Rodriguez
      </div>
    </div>
  );
}
