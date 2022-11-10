import React from 'react'
import styled from 'styled-components'

function Specification() {
    return (
        <Wrapper>
<section className="colored-section" id="features">
  <h2 className="section-heading">Why Choose Us?</h2>
  <br/>
  <div className="row">
    <div className="features-box col-lg-3 ">
    <i className="fas fa-handshake fa-4x features-image" ></i>
      <h3 className="feature-title">Personal care and service</h3>
      <p className="features-para">Team Of High Experienced Professionals.</p>
    </div>
    <div className="features-box col-lg-3">
    <i className="fas fa-smile fa-4x features-image"></i>
      <h3 className="feature-title">Customer Satisfaction</h3>
      <p className="features-para">Better Quality And Services.</p>
    </div>
    <div className="features-box  col-lg-3">
    <i className="fas fa-clipboard-list fa-4x features-image"></i>
      <h3 className="feature-title">Insider Knowledge</h3>
      <p className="features-para">Best guide available.</p>
    </div>
    <div className="features-box  col-lg-3">
    <i className="fas fa-money-bill-alt fa-4x features-image"></i>
      <h3 className="feature-title">Best Price</h3>
      <p className="features-para">We provide travel services at minimum cost.</p>
    </div>
  </div>
</section>
</Wrapper>
    )
}

const Wrapper = styled.main`
  .colored-section {
    background-color: #031a5b;
    color: #dae1e7;
    padding: 2rem;
    text-align: center;
    margin-bottom: 1%;
  }

  .section-heading {
    line-height: 1;
    
  }
  #features {
    padding: 2% 7%;
    position: relative;
  }
  .features-image {
    margin-bottom: 1rem;
    width:100%;
    color: #dae1e7;
  }
  .features-image:hover {
    color: #c3921c;
  }  
  .features-para {
    color: #c3921c;
  }
  
  .features-box {
    padding: 2% 5% 1%;
  }
  
  .feature-title {
    font-size: 1.5rem;
  }


`


export default Specification
