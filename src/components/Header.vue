<template>
<header>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ATS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <router-link :to="homePageLink" class="nav-link active" aria-current="page">
          Home
          </router-link>  -->
          <router-link :to="{name: 'homePageLink'}" class="nav-link active" aria-current="page">
          Home
          </router-link> 
        </li>
        <li class="nav-item">
           <!-- <router-link to="/services" class="nav-link active" aria-current="page">
          Services
          </router-link>  -->
          <router-link :to="{name: 'servicesLink'}" class="nav-link active" aria-current="page">
          Services
          </router-link> 
        </li>
      
      </ul>
    </div>
  </div>
</nav>
</header>
</template>

<script>
export default {
  // data() {
  //   return {
  //     homePageLink: '/'
  //   }
  // }
}
</script>

<style>
  header {
    margin-bottom: 20px;
  }
  .navbar-brand {
    font-size: 1.5em;
  }

</style>