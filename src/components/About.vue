<template>
<div>
<p>Click on the links below for more information:</p>
<nav class="navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <!-- <router-link to="/history" class="nav-link active" aria-current="page">
          Our History
          </router-link>  -->
          <router-link :to="{name: 'historyLink'}" class="nav-link active" aria-current="page">
          Our History
          </router-link> 
        </li>
        <li class="nav-item">
           <router-link :to="{name: 'contactLink'}" class="nav-link active" aria-current="page">
          Contact us
          </router-link> 
        </li>
          <li class="nav-item">
           <router-link :to="{name: 'orderingGuideLink'}" class="nav-link active" aria-current="page">
          Ordering Guide
          </router-link> 
        </li>
        <li class="nav-item">
           <router-link :to="{name: 'deliveryLink'}" class="nav-link active" aria-current="page">
          Delivery
          </router-link> 
        </li>    
      </ul>
</nav>
    <router-view></router-view>
</div>
</template>

