import { useState, useEffect } from 'react';
import './App.css';
import StarWarsData from './components/StartshipDisplay'


function App() {

  const [starWarsData, setStarWarsData] = useState(null);

  const makeApiCall = async () => {
    const StarWarUrl = 'https://swapi.dev/api/starships/';
    // make fetch request and store response
    const res = await fetch(StarWarUrl);
    // parse JSON response into a javascript object
    const json = await res.json();

    setStarWarsData(json)
  }

  useEffect(() => {
    makeApiCall()
  }, [])

  const starships = starWarsData?.results.map((ele, index) => {
    return <StarWarsData 
    {...ele} 
    key={index} />
  })

  return (
    <div className="App">
      <h1 className='header'>
        STAR WARS STARSHIPS
      </h1>
      <h2 className='main'>
        {starships}
      </h2>
      
    </div>
  );
}

export default App;
