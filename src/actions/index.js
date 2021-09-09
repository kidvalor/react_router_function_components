import axios from "axios"
export const GET_URL_START = 'GET_URL_START'

const fetchGif = async () => {

    dispatch({ type: GET_URL_START })
    try{
        //ajax call
        // you can only use await in async functions 
        const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9')
        console.log(response)
        setGifURL(response.data.data.fixed_height_downsampled_url)
    }catch(err) {
        console.log(err)
    }
}
