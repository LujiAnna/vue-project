<script>
import NewService from './NewService.vue'
import Login from './Login.vue'

import {useServiceStore} from '../stores/ServiceStore';

export default {
  components: {
    NewService,
    Login
  },
  // data() {
  //   return {
  //     name: 'Anna'
  //   }
  // },
  // beforeRouteEnter: (to, from, next) => {
  //   // alert('Hi' + this.name)
  //   next(vm=> {
  //     alert('Hey ' + vm.name)
  //   })
  // }
  computed: {
    // setup(){

    // }
    getServiceItems(){
      // Define the return of the useServiceStore.js as serviceStore
      const serviceStore = useServiceStore();
      // console.log(serviceStore);
      // console.log(serviceStore.serviceItems);
      return serviceStore.serviceItems;
      // return serviceStore.getServiceItems;
},
    numberOfOrders(){
      const serviceStore = useServiceStore();
      console.log(serviceStore);
      console.log(serviceStore.getNumberOfOrders);
      return serviceStore.getNumberOfOrders;
    }
  },
   beforeRouteLeave: (to, from, next) => {
    if(confirm('Have you remembered to log out?') == true) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<template>
<div class="row">
  <div class="col-sm-12 col-md-6">
 <!-- new service component -->
    <NewService />
</div>

 <div class="col-sm-12 col-md-6">
   <h3>Services:</h3>
    <table class="table table-hover">
  <thead class='thead-default'>
    <tr>
      <!-- <th scope="col">Services</th> -->
      <th scope="col">Item</th>
      <th scope="col">Remove from Service</th>
    </tr>
  </thead>
  <tbody v-for="item in getServiceItems">
    <tr>
<!-- <td>Marine</td> -->
<td>{{item.name}}</td>
<td>
<button class='btn btn-outline-danger btn-sm'>x</button>
</td>
    </tr>
  </tbody>
</table>
 </div>
</div> 

<div class="row">
  <div class="col-sm-12">
       <h3>Current Quotes: {{numberOfOrders}}</h3>
    <table class="table table-sm">
  <thead class='thead-default'>
    <tr>
      <!-- <th scope="col">Services</th> -->
      <th scope="col">Item</th>
      <th scope="col">Size</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>

<div class='order-number'>
  <strong><em>Order Number: 1</em></strong>
  <button class='btn btn-outline-danger btn-sm'>x</button>
</div>

    <tr>
<td>Marine</td>
<td> small </td>
<td> 1 </td>
<td> 60 </td>

    </tr>
  </tbody>
</table>
  </div>

<hr>
  <div class="row">
    <div class="col-sm-12 col-lg-6">
      <Login></Login>
    </div>
  </div>

</div>

</template>

