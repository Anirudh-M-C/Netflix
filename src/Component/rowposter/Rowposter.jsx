import React, { useEffect, useState} from 'react'
import './rowposter.css'
import axios from 'axios'
import { imageUrl } from '../../constants/Constants'


const Rowposter = (props) => {
  const [movies, setMovies]= useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err=>{
      // alert("error")
    })
  },[])
  return (
    <div className='row'>
        <p>{props.title}</p>
        <div className='posters'>
          {movies.map((movie)=>{
            return (
              <div  key={movie.id}>
                <img className={props.isSmall? 'small_poster': 'poster'} src={`${imageUrl+movie.backdrop_path}`} alt={movie.name} />
                <p className='movieposter-name'>{props.isSmall ? movie.title:movie.name}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Rowposter