import axios from 'axios'
import data from './data.js'
// import { resolve } from 'url';

axios.defaults.baseURL = 'http://openweathermap.org'

const appService = {
  getCity (cityId) {
    return new Promise((resolve) => {
      axios.get('/data/2.5/weather?q=' + data[cityId - 1].title + ',uk&appid=b6907d289e10d714a6e88b30761fae22')
        .then(Response => {
          resolve(Response.data)
        })
    })
  }
}
export default appService
