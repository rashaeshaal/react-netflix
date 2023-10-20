import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../../constants/constants';
import axios from 'axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState();

  async function fetchBannerImage() {
    try {
      const response = await axios.get(
 `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      );
      console.log(response.data.results);
      setMovie(response.data.results[17]);
    } catch (error) {
      console.error('Error fetching banner image:', error);
    }
  }

  useEffect(() => {
    fetchBannerImage();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ''}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  );
}

export default Banner;
