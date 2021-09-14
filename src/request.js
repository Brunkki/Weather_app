import axios from 'axios'
const API_KEY = process.env.REACT_APP_KEY

export const getForeCast = async () => {
    const promise = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=helsinki&appid=${API_KEY}&lang=fi`)
    if (promise.status === 200) {
        return promise.data
    } else {
        throw new Error(promise.status)
    }
}