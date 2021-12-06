import axios from "axios"

export const getMovies = async (text) => {
    console.log("text is", text)

    return axios.get(`http://www.omdbapi.com/?s=${text}&apikey=ab21da7a`)
    .then(res=> {
        return res.data.Search})
}

export const getMovieDetail = async (id) => {
    return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=ab21da7a`)
    .then(res=> {
        return res.data})
}