import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>

      <section id="footer">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-3 col-6">
              <ul>
                <li className='footer-header'>
                  <a href="/">
                    <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/Ecomus.svg?v=1699583364&width=272" alt="logo" />
                  </a>
                </li>
                <li>Address: 1234 Fashion Street, Suite 567,</li>
                <li>New York, NY</li>
                <li>Email: info@fashionshop.com</li>
                <li>Phone: (212)555-1234</li>
                <li>
                  <button className='footer-btn'>
                    Get direction
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <ul>
                <li className='footer-header'>Help</li>
                <Link to='/privacy' className='link'>
                  <li>Privacy Policy</li>
                </Link>
                <Link to='/Exchanges' className='link'>
                  <li>Returns + Exchanges</li>
                </Link>
                <Link to='/Shipping' className='link'>
                  <li>Shipping</li>
                </Link>
                <Link to='/Conditions' className='link'>
                  <li>Terms & Conditions</li>
                </Link>
                <Link to='/Wishlist' className='link'>
                  <li>My Wishlist</li>
                </Link>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <ul>
                <li className='footer-header'>About us</li>
                <li>Our Story</li>
                <li>Visit Our Store</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Account</li>
              </ul>
            </div>
            <div className="col-md-5 col-6">
              <ul>
                <p className='footer-header'>Sign Up for Email</p>
                <p>
                  Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!
                </p>
                <input type="text" className='p-1' placeholder='Enter email address' />
                <button className='btn'>Subscribe</button>
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <p className='p-4'>© 2024 Ecomus . All rights reserved.</p>
        </div>
      </section>

    </>
  )
}

export default Footer