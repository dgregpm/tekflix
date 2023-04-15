import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './../axios';
import { movieArr } from '../lib/data';
import logo from '../tall.jpg';


function Row({title, fetchUrl, isLargeRow = false}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // *** Old ***
  // if(isLoading){

  //   return (
  //     <div className="row fadeInRow">
  //       <h2 className=''>Loading...</h2>

  //       <div className="row__posters">
  //         {console.log(movieArr)}

  //         {movieArr.map((movie) =>
  //          (
  //             <img 
  //               className={`row__poster ${isLargeRow && "row__posterLarge"}`}  
  //               src={logo}
  //               alt='Loading Movie Image'
  //             />

  //             <svg 
  //             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
  //             width="2000" 
  //             height="3000"
  //             key={movie.id}> 
  //             <rect width="2000" height="3000" fill='yellow' />
  //             </svg>

  //           )
  //         )}

  //       </div>      
  //     </div>
  //   );
  // } else {
  //           return (
  //             <div className="row fadeInRow">
  //               <h2>{title}</h2>

  //               <div className="row__posters">
  //                 {console.log(movies)}

  //                 {movies?.map((movie) =>
  //                   ((isLargeRow && movie.poster_path) || 
  //                   (!isLargeRow && movie.backdrop_path)) && (

  //                     <img 
  //                       className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
  //                       key={movie.id} 
  //                       src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
  //                       alt={movie.name} 
  //                     />

  //                   )
                  
  //                 )}

  //               </div>      
  //             </div>
  //           );
  //         }
  return (
    <div className="row fadeInRow">
      <h2>{title}</h2>

      <div className="row__posters">
        {console.log(movies)}

        {movies?.map((movie) =>
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) && (

            <img 
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
              key={movie.id} 
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name} 
              loading="lazy"
            />

          )
        
        )}

      </div>      
    </div>
  );


}

export default Row;