<template>
  <div id="app">
    <h1>JOKE GENERATOR</h1>
    <PageContainer />
  </div>
</template>

<script>
import PageContainer from './components/PageContainer.vue'

export default {
  name: 'App',
  components: {
    PageContainer
  }
}
</script>


<style>
/*Imported font for global use.*/
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Oswald:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Libre Baskerville', serif;
  }

  h1 {
    color: #34a0a4;
    font-size: 7em;
    font-style: italic;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #161618;
    padding-top: 60px;
    height: 100vw;
    width: 100vw;
  }
</style>
