import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useTourContext} from '../context/tour_context'
import SingleTour from '../components/SingleTour'
import PageHero from '../components/PageHero'
import Navbar from '../components/Navbar'
function SubCategoryPage() {
    const {tours} = useTourContext();
    const {name} = useParams();

    const queryTour = tours.filter(
        (tour)=> tour.subCategory === name);
    
        useEffect(()=>{
            document.title=name
        })


  return (<>
    <Navbar/>
      <PageHero head={name}/>
      <div className='container' style={{alignItem:'center',justifyContent:'center'}}>
      <h2 style={{textAlign:"center"}}>{name}</h2>
      <div className='row'>
        {queryTour.map((tour)=>{
            return (
                <div key={tour._id} className="col-lg-3 col-md-4 col-sm-6" style={{padding:'1rem'}}>
                    <SingleTour id={tour._id} url={tour.image[0]} title={tour.destination} detail={tour.overview.details.slice(0,85)}/>
                </div>
            )
        })}
      </div>
    </div>
    </>
  )
}

export default SubCategoryPage