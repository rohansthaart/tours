import React from "react";
import banner3 from '../assets/banner3.png'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import styled from 'styled-components'
function TopCarousel() {
  return (
    <Wrapper>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={banner2} className="d-block carousel-image" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h1> At Minimum Cost</h1>
         
        </div>
      </div>
      <div className="carousel-item">
        <img src={banner3} className="d-block  carousel-image" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Quality Travelling, Quality Service</h1>
          
        </div>
      </div>
      <div className="carousel-item">
        <img src={banner1} className="d-block carousel-image" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
         <h1>One Stop For Quality Travel</h1>
          
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </Wrapper>
  );
}

const Wrapper = styled.main`
 .carousel-image{
  margin: 0;
  width: 100%;
}
@media screen and (max-width: 480px) {
  .carousel-image{
  margin: 0;
  height: 500px;
 object-fit: cover;
}
}
`


export default TopCarousel;


