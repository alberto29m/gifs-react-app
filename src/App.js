import React, {useEffect, useState} from 'react';
import './App.css';


const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=xVRHX3xGqIi52kV4fXBgfV8xu79Yr5Qh&q=rinoceronte&limit=25&offset=0&rating=g&lang=en';

function App() {

  const [gifs, setGifs] = useState([]);
  
  useEffect(function () {
    console.log('actualizando gifs');
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response;
        const gifs = data.map(image => image.images.downsized_medium.url);
        console.log(gifs);
      })


  }, []);




  return (
    <div className="App">
      <div className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} /> )
        }
        
      </div>
    </div>
  );
}

export default App;
