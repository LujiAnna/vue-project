<script setup>
import Header from './components/Header.vue'
// import HomePage from './components/HomePage.vue'
import Footer from './components/Footer.vue'
// import Services from './components/Services.vue'
// import Admin from './components/Admin.vue'

</script>

<template>
  <div id="app">
    <section class="container">
      <Header />
    </section>
    <!-- <section >
      <HomePage />
    </section>
    <section class="container">
      <Services></Services>
    </section>
    <section class="container">
      <Admin />
    </section> -->
    <router-view></router-view>

   <section class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuideLink"></router-view>
        </div>
         <div class="col-sm-12 col-md-4">
          <router-view name="deliveryLink"></router-view>
        </div> 
        <div class="col-sm-12 col-md-4">
          <router-view name="historyLink"></router-view>
        </div>
      </div>
    </section> 

    <section class="container">
      <Footer />
    </section> 
  </div>
</template>

<style>

main {
  background-image: url('./assets/banner.jpg');
  /* height: 800px; */
  background-size: cover;
  padding: 10%;
}

</style>
