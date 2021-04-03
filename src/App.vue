<template>
  <div id="app">
    <!-- <add-new-page></add-new-page> -->
    <!-- <memory-page></memory-page> -->
    <router-view></router-view>

  </div>
</template>

<script>
;
import MemoryPage from './components/MemoryPage';
import AddNewPage from './components/AddNewPage';
export default {
  name: 'App',
  components:{
    MemoryPage,
    AddNewPage,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
