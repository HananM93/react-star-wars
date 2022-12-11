import React, { useState, useEffect } from "react";

export default function App() {

  //setting state.. status of our app
  // 1.  each time we update state variable the app components re renders
  // 2. you can have as many state vars as you need
  // 3. you must always initialize with a default value 
  // 4. usestate is a react hook
  const [movieData, setMovieData] = useState({});
  const [movieTitle, setMovieTitle] = useState("star wars");

  // 1. useEffect is a react hook
  // 2. make sure you make your api function call inside of useEffect to prevent loops
  // 3. make sure you set state inside useEffect directly or in a called function 
  useEffect(() => {
    const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
    const makeApiCall = async () => {
      const res = await fetch(movieUrl);
      const json = await res.json();
      setMovieData(json);
    };
    makeApiCall();
  }, []);

return (
    <div></div>
    // anything above the return that changes the state triggers a rerender of the JSX here
)

}

