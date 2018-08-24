<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <app-post :link="post.link">
        <h3 slot="title">{{ post.title }}</h3>
        <span slot="content">{{ post.content }}</span>
      </app-post>
    </div>
  </div>
</template>
<script>
import Post from './Post.vue'
export default {
  components: {
    'app-post': Post
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'London', content: 'is the capital and most populous city of England and the United Kingdom' },
        { id: 2, title: 'Manchester', content: 'is the third-most visited city in the UK' },
        { id: 3, title: 'Liverpool', content: 'The popularity of The Beatles and other groups from the Merseybeat era contributes to Liverpool\'s status as a tourist destination' },
        { id: 4, title: 'Birmingham', content: 'is frequently referred to as the second city of England' },
        { id: 5, title: 'Reading', content: 'is a major commercial centre, with involvement in information technology and insurance' },
        { id: 6, title: 'Bristol', content: 'The Sunday Times named it as the best city in Britain in which to live in 2014 and 2017' },
        { id: 7, title: 'Leicester', content: 'is one of the oldest cities in England, with a history going back at least two millennia' },
        { id: 8, title: 'Nottingham', content: 'has links to the legend of Robin Hood' },
        { id: 9, title: 'Middlesbrough', content: 'yet another city' },
        { id: 10, title: 'Southampton', content: 'is noted for its association with the RMS Titanic' }
      ]
    }
  }
}
</script>
<style scoped>
  .card{
    padding-bottom: 40px;
    height:100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>

