import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import SingleTour from '../components/SingleTour'
import { useTourContext } from '../context/tour_context';
import PageHero from '../components/PageHero';
import Navbar from '../components/Navbar';
function CategoryPage() {
    const {tours} = useTourContext()
    const {categoryName} = useParams()
    const searchedTours = tours.filter((p) => p.category === categoryName);
    console.log(searchedTours);
    useEffect(()=>{
        document.title= categoryName
    })
  return (
    <>
      <Navbar/>
        <PageHero head={categoryName}/>
       
        <div className='container' style={{alignItem:'center',justifyContent:'center'}}>
        <h2 style={{textAlign:"center"}}>{categoryName}</h2>
    <div className="row" >
        {searchedTours.map((tour)=>{
            return(
                <div key={tour._id} className="col-lg-3 col-md-4 col-sm-6" style={{padding:'1rem'}}>
    <SingleTour  id={tour._id} url={tour.image[0]} title={tour.destination} detail={tour.overview.details.slice(0,85)}/>
                </div>
            )
        })}
    
    </div>
    
</div>
       
    </>
  )
}

export default CategoryPage