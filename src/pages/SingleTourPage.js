import React from 'react'
import ToursDetails from '../components/ToursDetails'
import PageHero from '../components/PageHero'
import {useParams} from 'react-router-dom'
import {useTourContext} from '../context/tour_context'

function SingleTourPage() {
  const {} = useTourContext();
  const {id} = useParams()
  const {tours,isLoading} = useTourContext();
  const selectedTour = tours.filter((tour)=> tour._id === id);

  return (
    <div >

        <PageHero title={selectedTour.map((tour)=>tour.destination)} tours="Tour to Upper Nepal"/>
        
        {selectedTour.map((tour,i)=> <ToursDetails key={i}/>  )}
    
    </div>
  )
}

export default SingleTourPage