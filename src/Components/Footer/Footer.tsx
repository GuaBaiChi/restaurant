import { Nav } from "react-bootstrap";
import { hotelData } from "../../Data/HotelData";
import "./Footer.css";
import { Link } from "react-router-dom";
import zaloIcon from "../../Images/ZaloIcon/letter-z3.png";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-info">
          <div>{hotelData.name}</div>
          <div>Phone: {hotelData.phone}</div>
          <div>Email: {hotelData.email}</div>
          <div>Address: {hotelData.address}</div>
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
        {/* <a href="https://www.linkedin.com/in/leon-r-60a370214/">
          <i className="fa fa-linkedin-square">LinkedIn</i>
        </a>
        <a href="https://github.com/GuaBaiChi">
          <i className="fa fa-github-square">Github</i>
        </a> */}
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
