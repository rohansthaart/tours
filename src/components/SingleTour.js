import React from 'react'
import "./singleTour.css"
function SingleTour({url,title,detail}) {
  return (
    <div className="card single-card" style={{width: "18rem", height:"24rem", margin:"20px"}}>
          <img className='card-img-top'
            src={url}
            style={{ objectFit: "fill", padding: "1px",margin:"0px", width: "100%" }}
          />
        <div className='card-body'>
        <h5
          style={{ marginLeft: "6px", textAlign: "left"}}
          className="card-title"
        >{title}
        </h5>
        <p class="card-text">{detail}...</p>
        <a href="#" class="btn btn-primary">View Details</a>
      </div>
    </div>
  )
}

export default SingleTour