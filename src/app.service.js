import axios from 'axios'
import { resolve } from 'url';

axios.defaults.baseURL = 'http://openweathermap.org'

const appService = {
  getCity (cityId)
  {
    axios.get('/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
    .then(Response =>{
      resolve(Response.data)
    })
  }
}
