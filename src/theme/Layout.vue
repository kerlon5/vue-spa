<template>
    <div>
      <nav class="nav has-shadow">
        <div class="container">
          <a href="/">
            <img src="http://bit.ly/vue-img"
              alt="Vue SPA" />
          </a>
        </div>
      </nav>
      <section class="main-section section">
        <div class="container content">
  <div class="columns">
    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
      <div class="card">
        <div class="card-content">
          <h3>{{ post.title }}</h3>
          {{ post.content }}
        </div>
        <footer class="card-footer">
          <a class="card-footer-item" :href="post.link" target="_blank">Read More</a>
        </footer>
      </div>
    </div>
  </div>
</div>
      </section>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            Follow us on
            <a href="https://twitter.com/bstavroulakis"
            target="_blank">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
</template>
<script>
export default {
  data () {
    return {
      posts: [
        { id: 1, title: 'London', content: 'is the capital of the GB' },
        { id: 2, title: 'Birmingham', content: 'yet another city' }
      ]
    }
  }
}
</script>
<style lang="scss">
@import '~bulma';
</style>
