import React, { useEffect, useState } from 'react';
import './rowposter.css';
import axios from 'axios';
import { API_KEY, imageUrl, baseUrl } from '../../constants/Constants';
import YouTube from 'react-youtube';

const Rowposter = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(err => {
        console.error("Error fetching movies", err);
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        console.log(response.data);
        const trailer = response.data.results.find(video => video.name.toLowerCase().includes('trailer'));
        if (trailer) {
          setUrlId(trailer);
        } else {
          console.log('No trailer found');
        }
      })
      .catch(err => {
        console.error("Error fetching movie video", err);
      });
  };

  return (
    <div className='row'>
      <p>{props.title}</p>
      <div className='posters'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img 
              onClick={() => handleMovie(movie.id)} 
              className={props.isSmall ? 'small_poster' : 'poster'} 
              src={`${imageUrl}${movie.backdrop_path}`} 
              alt={movie.title || movie.name} 
            />
            <p className='movieposter-name'>
              {props.isSmall ? (props.isAnime ? movie.name : movie.title) : movie.name}
            </p>
          </div>
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
};

export default Rowposter;