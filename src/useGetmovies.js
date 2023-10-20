import axios from "./axios"
import { API_KEY } from "./constants";
import { useState,useEffect } from "react";

export const useGetMovies=()=>{

const [movie, setMovie] = useState();


  useEffect(() => {

    getData();

  }, []);

  const getData = async () => {


    try {
    
      const response = await axios.get(
    
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    
        );

       
        const ranfomIndex=Math.floor(Math.random()*response.data.results.length)
        
        setMovie(response.data.results[ranfomIndex]);

         

        
      } catch (error) {
    
        console.error("Error fetching data:", error);
    
      }
  
    }
    return movie
    
}
   