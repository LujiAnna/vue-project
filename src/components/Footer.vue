<template>
<footer>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
           <li class="nav-item">
          <!-- <router-link to="/" class="nav-link active" aria-current="page">
          Home
          </router-link>  -->
          <router-link :to="{name: 'homePageLink'}" class="nav-link active" aria-current="page">
          Home
          </router-link> 
        </li>
        <li class="nav-item">
           <router-link :to="{name: 'aboutLink'}" class="nav-link active" aria-current="page">
          About
          </router-link> 
        </li>
        <li class="nav-item">
           <router-link :to="{name: 'adminLink'}" class="nav-link active" aria-current="page">
          Admin
          </router-link> 
        </li> 
      </ul>
    </div>
  </div>
</nav>
</footer>
</template>