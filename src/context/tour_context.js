import axios from 'axios';
import React,{useContext,useEffect,useState} from 'react'
import {tour_url as url} from '../utils/constants'

const TourContext = React.createContext()

export const TourProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false);
    const [tours,setTours] = useState([]);
    
    

    const fetchTours = async (url)=>{
        setIsLoading(true)
        try{
            const response = await axios.get(url)
            const tour= await response.data
            setIsLoading(false)
            setTours(tour)
            return true
        
        }catch(error){
            console.log(error)
        }
    }
useEffect(()=>{
    fetchTours(url)
},[])

const [category, setCategory] = useState(()=>[...new Set(tours.map(c=>c.category))])
return (
    <TourContext.Provider value={{tours,isLoading,category}}>
        {children}
    </TourContext.Provider>
)


}

export const useTourContext = ()=>{
    return useContext(TourContext)
}