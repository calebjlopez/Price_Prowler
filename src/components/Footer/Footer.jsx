import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer">
        <div className="footer-links">
            <ul>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="#">Terms & Conditions</NavLink></li>
                <li><NavLink to="#">Privacy Policy</NavLink></li>
            </ul>
        </div>
        <div className="copyright">
            <p>Price Prowler LLC &copy; All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
