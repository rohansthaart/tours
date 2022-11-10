import axios from 'axios';
import React,{useContext,useEffect,useState} from 'react'
import {query_url as url} from '../utils/constants'

const QueryContext =React.createContext()

export const QueryProvider = ({children})=>{
    const [isLoading,setIsLoading] = useState(false);
    const [query,setQuery] = useState([]);

    const fetchQuery = async (url)=>{
        setIsLoading(true)
        try{
            const response = await axios.get(url)
            const query= await response.data
            
            setIsLoading(false)
            setQuery(query)
            return true
        }catch(error){
            console.log(error)
        }
    }
useEffect(()=>{
    fetchQuery(url)
},[])


return (
    <QueryContext.Provider value={{query,isLoading,fetchQuery}}>
        {children}
    </QueryContext.Provider>
)


}

export const useQueryContext = ()=>{
    return useContext(QueryContext)
}