import React, { useEffect, useState } from 'react'
import "./banner.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
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
      <div className='banner-gradient'></div>
        <div className='content'>
            <img className='content-logo' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/dgifpk0-1b521bce-cc2b-4531-80e7-55d5c1db7991.png/v1/fit/w_828,h_262/dune_part_2_logo_png_4k_2024_by_andrewvm_dgifpk0-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDA0IiwicGF0aCI6IlwvZlwvYTU4YTc3MTktMGRjZi00ZTBiLWI3YmItZDJiNzI1ZGJiYjhlXC9kZ2lmcGswLTFiNTIxYmNlLWNjMmItNDUzMS04MGU3LTU1ZDVjMWRiNzk5MS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hIZWnscQ410evQ3VeNKCmwwk5gQWcajZgO_k_zuCEDE" alt="" />
            <p className='title'>{movie ? movie.title : ""}</p>
            <p className='description-1'>2024 | U/A 16+ | 2h 4m | Sci-Fi</p>
            <div className='banner-buttons'>
                <button className='button-play'><i className="fas fa-play"></i>Play</button>
                <button className='button'><i className="fas fa-plus"></i>My List</button>
            </div>
            <p className='description'>{movie ? movie.overview : ""}</p>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}


export default Banner