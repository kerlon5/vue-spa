<template>
<div class="columns">
  <div class="column">
  <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <!-- <h1 class="title">
                                Liverpool
                            </h1> -->
<div class="control has-icons-left">
  <div class="select is-large">
    <select @change="onChange($event.target.value)">
       <option v-for="post in posts" v-bind:key="post.id" :value="post.id" :selected="post.id == $route.query.id">{{ post.title }} </option>
    </select>
  </div>
  <span class="icon is-large is-left">
    <!-- <i class="fas fa-globe"></i> -->
    <!-- <svg class="svg-inline--fa fa-globe fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg> -->
  </span>
</div>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>
                </div>
                 <div class="column">
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <!-- <p class="title"></p> -->
                                <img v-if="weather.weather[0].main === 'Clouds'" style="width:50px;" src="https://image.flaticon.com/icons/svg/414/414927.svg"/>
                                <img v-else-if="weather.weather[0].main === 'Rain'" style="width:50px;" src="https://image.flaticon.com/icons/svg/861/861056.svg"/>
                                <img v-else style="width:50px;" src="https://image.flaticon.com/icons/svg/414/414927.svg"/>
                                <p class="subtitle">{{weather.weather[0].main}}</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{weather.main.temp_max}}</p>
                                <p class="subtitle">Temp Max</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{weather.main.temp_min}}</p>
                                <p class="subtitle">Temp Min</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{weather.main.humidity}}</p>
                                <p class="subtitle">Humidity</p>
                            </article>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{weather.main.pressure}}</p>
                                <p class="subtitle">Pressure</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">{{weather.wind.speed}}m/s</p>
                                <!-- <p class="subtitle"><img style="transform: rotate({{weather.wind.degree}}deg);" src="https://image.flaticon.com/icons/svg/109/109617.svg"/></p> -->
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3.4k</p>
                                <p class="subtitle">Open Orders</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">19</p>
                                <p class="subtitle">Exceptions</p>
                            </article>
                        </div>
                    </div>
                </section>
                 </div>
</div>
</template>
<script>
import postsdata from '../data.js'
import appService from '../app.service.js'
export default {
  data () {
    return {
      posts: postsdata,
      weather: null
    }
  },
  methods: {
    onChange (id) {
      this.$route.query.id = id
      this.loadWeather()
    },
    loadWeather () {
      appService.getCity(this.$route.query.id).then(data => {
        console.log(JSON.stringify(data))
        this.weather = data
        window.weather = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadWeather()
    }
  },
  created () {
    this.loadWeather()
  }
}
</script>
