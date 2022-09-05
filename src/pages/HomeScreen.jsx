import React from 'react';
import requests from '../lib/Requests';
import Banner from '../components/Banner';
import Row from '../components/Row';
import './HomeScreen.css';
import Nav from '../components/Nav';
// const Row = React.lazy(() => import('../components/Row'));
// const Banner = React.lazy(() => import('../components/Banner'));


function HomeScreen() {
  return (
    <div className="homeScreen">
          <Nav />
          {/* <React.Suspense fallback={<div>Loading...</div>} > */}
            <Banner />
          {/* </React.Suspense> */}

          {/* <React.Suspense fallback={<div>Loading...</div>} > */}
            <Row 
              title='NETFLIX ORIGINALS'
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow="true"
            />
          {/* </React.Suspense> */}

          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
          {/* </React.Suspense> */}

          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
          {/* </React.Suspense>  */}
          
          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> 
          {/* </React.Suspense> */}
          
          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/> 
          {/* </React.Suspense> */}
          
          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/> 
          {/* </React.Suspense > */}
          
          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/> 
          {/* </React.Suspense> */}
          
          {/* <React.Suspense fallback={<div>Loading...</div>}> */}
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> 
          {/* </React.Suspense> */}
     
    </div>
  );
}

export default HomeScreen;