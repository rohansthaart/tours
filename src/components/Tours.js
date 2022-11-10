import React from 'react'
import SingleTour from './SingleTour'
import {useTourContext} from '../context/tour_context'
import Loader from './Loader'
function Tours() {
  const {tours,isLoading} = useTourContext()
 
  console.log(tours);

  if(isLoading){
    return <Loader/>
  }
  return (
    <>
    <div className='container' style={{alignItem:'center',justifyContent:'center'}}>
    <div className="row" >
        {tours.map((tour)=>{
            return(
                <div key={tour._id} className="col-lg-3 col-md-4 col-sm-6" style={{padding:'1rem'}}>
    <SingleTour  id={tour._id} url={tour.image[0]} title={tour.destination.slice(0,40)} detail={tour.overview.details.slice(0,150)}/>
                </div>
            )
        })}
    
    </div>
    </div>
    </>
  )
}

export default Tours