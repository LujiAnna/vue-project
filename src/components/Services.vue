

<template>
<div class="row">    
{{ $route.params.items }}
  <div class="col-sm-12 col-md-6">
    <table class="table table-hover">
  <thead class='thead-default'>
    <tr>
      <!-- <th scope="col">Services</th> -->
      <th scope="col">Size</th>
      <th scope="col">Price</th>
      <th scope="col">Request</th>
    </tr>
  </thead>
  <tbody v-for="item in getServiceItems">
    <tr>
      <td><strong>{{item.name}}</strong></td>
    </tr>
    <tr v-for="option in item.options">
      <td>{{option.size}}</td>
      <td>{{option.price}}</td>
      <td><button class='btn btn-sm btn-outline-primary' type='button' @click="addToCart(item, option)">+</button></td>
    </tr>
  </tbody>
</table>
</div>

<!-- SHOPPING CART -->
 <div class="col-sm-12 col-md-6">
   <div v-if='cart.length > 0'>
    <table class="table">
  <thead class='thead-default'>
    <tr>
      <!-- <th scope="col">Services</th> -->
      <th scope="col">Total</th>
      <th scope="col">Item</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody v-for='item in cart'>
    <tr>
      <td>{{item.price * item.quantity}}</td>
      <td>{{item.name}} {{item.size}}</td>
      <td><button class='btn btn-secondary btn-sm' @click="decreaseQuantity(item)">-</button>
      <span>{{item.quantity}}-</span>
      <button class='btn btn-secondary btn-sm' @click="increaseQuantity(item)">+</button></td>
    </tr>
  </tbody>
</table>
<p>Order total: </p>
<div class="d-grid gap-2">
<button class='btn btn-primary btn-block' @click="addNewQuote()">Request Quote</button>
</div> 
<!-- close if -->
</div>

<div v-else>
<p>{{cartText}}</p>
{{numberOfOrders}}
<!-- access initial store value -->
<!-- {{getServiceItems}} -->
<!-- show the order number by accessing orders from the store state or getters -->
 <!-- {{this.$serviceStore.state.orders}}  -->
 <!-- {{this.$serviceStore.orders}} -->

</div>
</div>

</div> 
</template>

<script>
// import data from store
import {useServiceStore} from '../stores/ServiceStore';

// make store to use
// const serviceStore = useServiceStore();

export default {
  data() {
    return {
      cart: [],
      cartText: 'Your cart is empty'
    //   getServiceItems: {
    //     1: {"name": 'Marine',
    //     "description": 'Sailors Management',
    //     "options":[
    //       {"size":"small", 
    //     "price":100
    //     },
    //     {"size":"big", 
    //     "price":"200"
    //     }]
    //     },
    //     2: {"name": 'Yatch',
    //     "description": 'Sailors Management',
    //     "options":[{"size":"small", 
    //     "price":"50"
    //     },
    //     {"size":"big", 
    //     "price":"80"
    //     }]
    //     },
    //      3: {"name": 'shipping',
    //     "description": 'Sailors Management',
    //     "options":[{"size":"small", 
    //     "price":59
    //     },
    //     {"size":"big", 
    //     "price":76
    //     }]
    //      } //object
    //  } //get service
  } //return
  }, //data
  computed: {
    getServiceItems(){
      // Define the return of the useServiceStore.js as serviceStore
      const serviceStore = useServiceStore();
      // return this.$stores.state.serviceItems;
      // return this.$stores.state();
      // this.$stores.state();
      // return this.$serviceStore;
      console.log(serviceStore);
      // console.log(this.$serviceStore); // undefined
      console.log(serviceStore.serviceItems);
      // return;
      return serviceStore.serviceItems;
    },
    numberOfOrders() {
      const serviceStore = useServiceStore();
      // console.log(this.$serviceStore.numberOfOrders);
      return serviceStore.getNumberOfOrders;
    }
  },
  methods: {
    addToCart(item, option) {
      this.cart.push({
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      })
    },
    removeFromCart(item){
      this.cart.splice(this.cart.indexOf(item),1);
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      item.quantity--;

      if(item.quantity ===0) {
        this.removeFromCart(item);
      }
    },
    addNewQuote() {
      console.log('hey');
      // access the store
      const serviceStore = useServiceStore();
      console.log('action log: ',serviceStore);
      // commit the change with commit method by passing mutation name created in the store
      // serviceStore.commit('addQuote');
      // Use insteads of mutation and commit
      // initiate the addition
      // serviceStore.addQuote(this.cart); //How do Actions work in Pinia? use 'return'?
      console.log(serviceStore.orders);
      // console.log(serviceStore.addQuote());
      // serviceStore.addQuote();
      serviceStore.addQuote(this.cart);
      // clean cart of quotes
      this.cart = [];
      // add message to replace the previous empty basket message
      this.cartText = 'Thanks, your order has been placed :)'
    }
  }
} //close default
</script>