import React,{useEffect,useState} from 'react'
import { API_KEY, imageUrl } from '../../../constants/constants';
import axios from '../../../axios';

import "./RowPost.css"
import Youtube from 'react-youtube'

function RowPost(props) {
  const[movies,setMovies]= useState([])

  const [urlId,setUrlId] = useState()
   
  useEffect(()=>{
    
   axios.get(props.url).then(response=>{
    console.log(response.data);
    setMovies(response.data.results)
   })
   .catch((err) => {
    // alert('Network Error')
  });
}, []);


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1,
    },
  };

  const handleCloseVideo = () => {
    setUrlId(null); // Reset URL to close the video
  };

  const handleMovie=(id)=>{
  console.log(id);
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
     }else{
      console.log("Array is Empty");
     }
  })
  }

  
  
  return (
    <div className='row'>
      <h2>{props.title} </h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img onClick={()=> handleMovie(obj.id)}className={props.isSmall?'smallPoster' : "poster" } alt="poster" src={`${imageUrl+obj.backdrop_path }`}></img>

          )} 
           
        </div>
        <div style={{ marginTop: "20px", position: "relative", textAlign: "right" }}>
        {urlId && <button className="close-btn" onClick={handleCloseVideo}>×</button>}
        {urlId && <Youtube videoId={urlId.key} opts={opts} />}
      </div> 
    </div>
  )
}



export default RowPost