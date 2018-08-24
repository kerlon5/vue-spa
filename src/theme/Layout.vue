<template>
    <div>
      <app-header></app-header>
      <section class="main-section section">
        <div class="container content">
          <city></city>
</div>
      </section>
      <app-footer></app-footer>
    </div>
</template>
<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import City from './City.vue'
  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'city': City
    }
  }
</script>
<style lang="scss">
$primary: #287ab1;
@import '~bulma';

.columns{
  flex-wrap: wrap
}
</style>
