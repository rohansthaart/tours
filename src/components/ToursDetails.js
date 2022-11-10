import React,{useState,useEffect} from 'react'
import {useTourContext} from '../context/tour_context'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Overview from './Overview'
import './toursDetails.css'
import EnquiryForm from './EnquiryForm'
function ToursDetails() {


  const {tours} = useTourContext();
  const { id } = useParams();
  const selectedTour = tours.filter((tour)=> tour._id === id)[0];
  const {
    destination,
    location,
    transportation,
    groupSize,
    maxAttitude,
    bestSeason,
    category,
    subCategory,
    permits,
    difficulty,
    accomodation,
    image,
    itenerary,
    included,
    notIncluded,
    overview,
  }= selectedTour
  const [selectedImage,setSelectedImage] = useState(image[0]);
   const [title,setTitle] = useState("Overview")
const [temp,setTemp] = useState('')
   const fetchWeather = async (location)=>{

     try{
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=57c68f8333b59b483dfc2a4117be17ae&units=metric`)
       const res = await response.data.main
       console.log(res);
      
      const temperature = await (res.temp);
     
      setTemp(temperature.toString())
      }
     catch(error){
         console.log(error);
     }
     
   }
   
useEffect(()=>{
  document.title= destination
  fetchWeather(location)
},[])  

  return (

    <div className="container">
      {id}
    
    <div className='row'>
       <div className=" col-sm-12 col-md-12 col-lg-12 col-xl-8">
    
          <div id="myCarouselArticle" className="carousel" data-ride="false">
            <div className="carousel-item active">
              <img className="slide-image " src={selectedImage} alt={`${destination}`}/>
            </div>
          </div>
        
       
        <div className="" style={{ margin: "0px",padding:"0px" }}>
        <ul  style={{ marginLeft: "55px" }}>
                {selectedTour.image.map((img,i) => (
                  <li className='ba' key={i+500}>
                    <a data-target="#myCarouselArticle" data-slide-to={"{0++}"}>
                      <img
                        className="img-fluid fit-image"
                        src={img}
                        onClick={() => setSelectedImage(img)}
                      />
                    </a>
                  </li>
                ))}
              </ul>
        </div>
      
    
       </div>


       
       <div className=" card details-card col-sm-12 col-md-12 col-lg-12 col-xl-4 ">
        <div className='details'>

        
        <h2>{destination}</h2>
        <h3>Starts at Just <span className='price'>$500/-</span> </h3>
        
       {location? <h3> <i className="fas fa-temperature-low"></i> Temperature: <span className='temperature'>{temp}&#8451;</span> ({location}) </h3>:null}
     
        {transportation?<h3><i className="fas fa-shuttle-van"></i> Transportation:</h3>:null}
        <h4>{transportation}</h4>
        <h3><i className="fas fa-users"></i> Group Size:</h3>
        <h4><span>  </span> {groupSize}</h4>
        <h3><i className="fas fa-hotel"></i> Accomodation:</h3>
        <h4>{accomodation}</h4>
        <h3><i className="fas fa-cloud-sun-rain"></i> Best Season:</h3>
        <h4>{bestSeason}</h4>
        <h3><i className="fas fa-hiking"></i> Tour type:</h3>
        <h4>{subCategory?subCategory:category}</h4>
        {difficulty?<>
        <h3>Difficuty: </h3>
        <h4>{difficulty}</h4>
        </>:null}
        {maxAttitude?<>
        <h3><i className="fas fa-mountain"></i> Max Altitude: </h3>
        <h4>{maxAttitude}</h4>
        </>:null}
        <h3><i className="fas fa-id-card"></i> Permits:</h3>
        <h4>{permits?permits:"not required"}</h4>
        </div>
       </div>
       </div>
    
    <div className="row">
    <div className=" card details-card col-sm-12 col-md-12 col-lg-8 col-xl-8">
    <div className="overview " key={id + 100} >
        <div>
          <button
            className="btn"
            onClick={() => setTitle("Overview")}>
            <h3>Overview</h3>
          </button>
          {itenerary !="" ?
          <button className="btn" onClick={() => setTitle("Itinerary")}>
            <h3>Itinerary</h3>
          </button>:null}
          {(included !="")?<button className="btn" onClick={() => setTitle("Included")}>
            <h3>What's Included</h3>
          </button>:null}
        </div>
       
      {title === "Overview"?<div><p>
        <span dangerouslySetInnerHTML={{__html:overview.details}}></span></p>
        <h3>Trip Hightlights</h3>
        <ul>
        {overview.highlights.map((highlight,i)=><p key={i+100} dangerouslySetInnerHTML={{__html:highlight}}></p>)}
        </ul>
      </div>:title==="Itinerary"?<div>
      {itenerary.map((day,i)=><div key={i}>
      <div className="wrap itinerary-item" data-bs-toggle="collapse"  type="button" data-bs-target={`#multiCollapseExample${day.days}`} aria-controls={`multiCollapseExample1${day.days}`} href={`#multiCollapseExample${day.days}`}>
        <span className=''><h3 >Day {day.days}: {day.title} </h3></span>
   <span><h3><i className="fas fa-plus" ></i></h3></span>

  </div>
  <p>
  <span className="collapse multi-collapse" id={`multiCollapseExample${day.days}`} dangerouslySetInnerHTML={{__html:day.description}}>
  </span>     
  </p>

      </div>)}
      </div>:<>
        <h3>Inclusions</h3>
        {included.map(((include,i)=>
          <p key={i+200}><i className="far fa-check-circle" style={{color:"green"}}></i> {include}</p>
          ))}
        <h3>Exclusions</h3>
        {notIncluded.map(((notInclude,i)=>
          <p key={i+300}><i className="far fa-times-circle" style={{color:"red"}}></i>  {notInclude}</p>
          ))}
      </>}
      
      </div>
      </div>
      <div className=" card details-card col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
      </div>
      <div className="card details-card col-sm-12 col-md-12 col-lg-8 col-xl-8">
      <div className="">
      <EnquiryForm packages={destination}/>

      </div>
      </div>
      </div>
   
  )
}

export default ToursDetails