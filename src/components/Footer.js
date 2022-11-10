import React from 'react'
import "./footer.css";
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer() {
  const categories = [
    "Nepal",
    "Trekking",
    "Adventure",
    "Wellness and Meditation",
    "Outbound","Kailash Mansarovar"
  ]
  return (
    <footer id="contact">
    <div className="site-footer">
      <div className="">
        <div className="row" style={{margin:'0px'}}>
          <div className="col-md-3 col-sm-6 col-lg-3">
            <img
              src={logo}
              style={{ height: "80%", width: "80%" }}
            />
          </div>

          <div className="col-md-2 col-sm-6 col-lg-2">
            <h6><Link to="/about">ABOUT</Link></h6><br/>
            {categories.map((category,i)=>{
            return <p key={i}>
              <Link to={`/category/${category}`}>{category}</Link>
              <br/></p>
            }
            )}
        
          </div>
          
          <div className="col-md-4 col-sm-6 col-lg-2">
            <h6>ASSOCIATED WITH</h6>
            <div className="row ">
            <div className="col-3 ">

            <img src="https://admin.ntb.gov.np/image-cache/ntb_logo-1664168472.jpg?p=main&s=7fc637904b916806a88407a28df202e7" alt="" className='footer-logo'/>
            </div>
            <div className="col-3">

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Emblem_of_Nepal_%282020%29.svg" alt="" className='footer-logo'/>
            </div>
            </div>
            <h6>WE ACCEPT</h6>
            <div className="row ">
            <div className="col-2 ">

            <img src="https://esewa.com.np/common/images/esewa-icon-large.png" alt="" className='footer-logo'/>
            </div>
            <div className="col-2">
            <img src="https://banner2.cleanpng.com/20180418/xie/kisspng-paypal-logo-e-commerce-payment-system-paypal-5ad78137f1e9c2.9153968515240727599909.jpg" alt="" className='footer-logo'/>
            </div>
            <div className="col-2">
            <img src="https://banner2.cleanpng.com/20180802/xri/kisspng-logo-mastercard-vector-graphics-font-visa-mastercard-logo-png-photo-png-arts-5b634298cd58d5.9008352515332317688411.jpg" alt="" className='footer-logo'/>
            </div>
            </div>

            
          </div>
          <div className="col-md-2 col-sm-6 col-lg-2"  style={{ padding: "0" }}>
           <h6>Contact Us</h6>
           <p><a href="tel:+9779843686191"><i className="fas fa-phone-alt"></i> +977  9803748848 </a></p>
            <p><a href="mailto:toalltours@gmail.com"><i className="fas fa-inbox"></i> toalltours@gmail.com</a></p>
            <p><i className="fas fa-map"></i> 1F,Near Shrestha PhotoCopy, Putalisadak, Kathmandu, Nepal</p>

          </div>
        </div>
        <hr />
      </div>

      
        <div className="">
          <div className="center col-sm-6 col" style={{marginLeft:"2rem"}}>
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Teju & Oju Alltours Pvt. Ltd. by S.I.D. International Pvt. Ltd.
            </p>
              Terms & Conditions
          </div>
        </div>


        <div className='social'>
          <ul>
        <li><FacebookIcon /></li>
        <li><InstagramIcon /></li>
            <li><TwitterIcon /></li>
            <li><LinkedInIcon /></li>
          </ul>
        </div>
      
    </div>
    </footer>
  );
}

export default Footer;

 

