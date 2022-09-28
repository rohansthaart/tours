import React from 'react'
import SingleTour from './SingleTour'
import {tour} from '../utils/data'
function Tours() {
  return (
    <>

    <div className='section'>
    <div className="row">
        {tour.map((tour)=>{
            return(
                <div className="col-md-3 col-sm-6 ">
    <SingleTour url={tour.url} title={tour.title} detail={tour.details.slice(0,85)}/>
                </div>
            )
        })}
    
    </div>
    </div>
    </>
  )
}

export default Tours