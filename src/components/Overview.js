import React,{useState} from 'react'

import {useTourContext} from '../context/tour_context'
function Overview({highlights,details}) {
  const {tours,isLoading} = useTourContext();

    const [title,setTitle] = useState("Overview")
  return (
    <div className="container">
        <div>
          <button
            className="btn"
            onClick={() => setTitle("Overview")}
          >
            <h3>Overview</h3>
          </button>
          <button className="btn" onClick={() => setTitle("Itinerary")}>
            <h3>Itinerary</h3>
          </button>
          <button className="btn" onClick={() => setTitle("Included")}>
            <h3>What's Included</h3>
          </button>
        </div>
       
      {title === "Overview"?<div><p>{details}</p>
        <h3>Trip Hightlights</h3>
        <ul>

        <li>{highlights}</li>
        </ul>
      </div>:title==="Itinerary"?<div>
        Day:1
      </div>:"Included in Package"}
      </div>
  )
}

export default Overview
