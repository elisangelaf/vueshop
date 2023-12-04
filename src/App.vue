<template>
  
  <HeaderMain></HeaderMain>
  <ProductsMain></ProductsMain>
  <FooterMain></FooterMain>
 

 <main>
  <router-view/>
 </main>

</template>

<script>

import HeaderMain from './components/HeaderMain.vue'
import ProductsMain from './components/ProductsMain.vue'
import FooterMain from './components/FooterMain.vue'
export default{
components: {
  HeaderMain,
  ProductsMain,
  FooterMain
}
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
