import React from 'react'
import Grid from '@material-ui/core/Grid';

import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import SchoolIcon from '@material-ui/icons/School';

import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';

 import './specification.css'
function Specification() {
    return (
        
<section className="colored-section" id="features">
  <h2 className="section-heading">Why Choose Us?</h2>
  <br/>
  <div className="row">
    <div className="features-box col-lg-3 ">
    <i class="fas fa-handshake fa-4x features-image" ></i>
      <h3 className="feature-title">Personal care and service</h3>
      <p className="features-para">Team Of High Experienced Professionals.</p>
    </div>
    <div className="features-box col-lg-3">
    <i class="fas fa-smile fa-4x features-image"></i>
      <h3 className="feature-title">Customer Satisfaction</h3>
      <p className="features-para">Better Quality And Services.</p>
    </div>
    <div className="features-box  col-lg-3">
    <i className="fas fa-clipboard-list fa-4x features-image"></i>
      <h3 className="feature-title">Insider Knowledge</h3>
      <p className="features-para">Best guide available.</p>
    </div>
    <div className="features-box  col-lg-3">
    <i class="fas fa-money-bill-alt fa-4x features-image"></i>
      <h3 className="feature-title">Best Price</h3>
      <p className="features-para">We provide travel services at minimum cost.</p>
    </div>
  </div>
</section>
    )
}

export default Specification
