import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function SingleTour({url,title,detail,id}) {
  return (
    <Wrapper>
    <div className="">
    <div className="card single-card" >
      
          <img className='card-img-top'
            src={url}/>
          
        <div className='card-body'>
        <h5
          style={{ marginLeft: "0px", textAlign:"left"}}
          className="card-title"
        >{title}
        </h5>
        <p className="card-text">{detail}...</p>
     <Link to={`/tours/${id}`}> View Details</Link>
      </div>
    </div>
    
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.single-card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .single-card{
    width: 17rem;
    height: 24rem;
  }
  .card-img-top{
    object-fit: cover;
    padding: 0.1rem;
    margin: 0px;
    width: auto;
    height: 40%;
  }

`



export default SingleTour