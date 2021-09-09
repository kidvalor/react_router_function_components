import React, { useState, useEffect } from 'react'
// axios is just anothe API we can use to make AJAX calls
import axios from 'axios'

const Giphy = () => {
  const [gifURL, setGifURL] = useState('')

  // useEffect is a React hook we have to import
  // useEffect takes two arguments
  // first argument is the function, second argument is the dependency array
  useEffect(() => {
    console.log("Hey we mounted our Giphy component")
//try/catch and async/await
//try/catch - tell our code to run the block of code and not break our application
// const fetchGif = async () => {
    // try{
        // ajax call
        // you can only use await in async functions 
        // const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9')
        // console.log(response)
    // }catch(err) {
        // console.log(err)
    // }
// }


fetchGif()





    // empty dependency array tells useEffect to only run once when the component mounts/render
  }, [])

  // function expression
  // const randomGIF = () => {
  //   fetch('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9')
  //     .then(response => response.json())
  //     // gif here holds our data that was turned from json()
  //     .then(gif => setGifURL(gif.data.fixed_height_downsampled_url))
  //     .catch(err => console.log(err))
  // }
  // data.fixed_height_downsampled_url

  return (
    <div>
      <h1>Random GIF</h1>
      <button>Random</button>
      <div>
        <img src={gifURL} alt="random gif" />
      </div>
    </div>
  );
};

export default Giphy;






