import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from '../Axios'
import { API_KEY } from '../../constants/Constants'
import { imageUrl } from '../../constants/Constants'
import { baseUrl } from '../../constants/Constants'

const Banner = () => {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[5])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <p className='description-1'>2015 | U/A 16+ | 2h 4m | Sci-Fi</p>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <p className='description'>{movie ? movie.overview : ""}</p>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}


export default Banner