import React from 'react'
import ToursDetails from '../components/ToursDetails'
import PageHero from '../components/PageHero'
import {useParams} from 'react-router-dom'
import {useTourContext} from '../context/tour_context'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
function SingleTourPage() {

  const {id} = useParams()
  const {tours,isLoading} = useTourContext();
  const selectedTour = tours.filter((tour)=> tour._id === id);

if(isLoading){
  return <Loader/>
}
  return (
    < >
  <Navbar/>
        <PageHero title={selectedTour.map((tour)=>tour.destination)} tours="Tour to Upper Nepal"/>
        
        {selectedTour.map((tour,i)=> <ToursDetails key={i}/>  )}
    
    </>
  )
}

export default SingleTourPage