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
<button class='btn btn-primary btn-block'>Request Quote</button>
</div> 
<!-- close if -->
</div>

<div v-else>
<p>{{cartText}}</p>
</div>
</div>

</div> 
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartText: 'Your cart is empty',
      getServiceItems: {
        1: {"name": 'Marine',
        "description": 'Sailors Management',
        "options":[
          {"size":"small", 
        "price":100
        },
        {"size":"big", 
        "price":"200"
        }]
        },
        2: {"name": 'Yatch',
        "description": 'Sailors Management',
        "options":[{"size":"small", 
        "price":"50"
        },
        {"size":"big", 
        "price":"80"
        }]
        },
         3: {"name": 'shipping',
        "description": 'Sailors Management',
        "options":[{"size":"small", 
        "price":59
        },
        {"size":"big", 
        "price":76
        }]
        } //object
    } //get menu
  } //return
  }, //data
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
  }
} //close default
</script>