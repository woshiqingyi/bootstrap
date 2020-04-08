<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  created(){
    this.getWight()
  },
  methods:{
    getWight(){
       var Width = document.documentElement.clientWidth;
        /* if(Width>300){
          window.product_layout = 'display:flex;flex-wrap:wrap;align-items:center;width:1000px;'
        }else{
          window.product_layout = 'display:flex;flex-direction:column;justify-content:center;align-items:center; width:1000px;'
        } */
    }
  },
   mounted() {
    window.onresize = () => {
      return (() => {
       /*  this.getWight() */
      })();
    };
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
