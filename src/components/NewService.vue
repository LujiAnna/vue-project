<template>
<form>
  <h3>Add new service:</h3>
  <div class="m-3 form-group row">
    <label for="inputName" class="form-label col-sm-3">Name</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="inputName" v-model="newService.name">
    </div>
  </div>
  
    <div class="m-3 form-group row">
    <label for="description" class="form-label col-sm-3">Description</label>
    <div class="col-sm-9">
    <textarea type="text" class="form-control" id="description" rows="4" v-model="newService.description"></textarea>
    </div>
  </div>

<p><strong>Option 1:</strong></p>
 <div class="m-3 form-group row">
    <label for="size" class="form-label col-sm-3">Size</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="size" v-model="newService.options[0].size">
    </div>
  </div>
  <div class="m-3 form-group row">
    <label for="price" class="form-label col-sm-3">Price</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="price" v-model="newService.options[0].price">
    </div>
  </div>

  <p><strong>Option 2:</strong></p>
 <div class="m-3 form-group row">
    <label for="size" class="form-label col-sm-3">Size</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="size" v-model="newService.options[1].size">
    </div>
  </div>
  <div class="m-3 form-group row">
    <label for="price" class="form-label col-sm-3">Price</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="price" v-model="newService.options[1].price">
    </div>
  </div>

  <div class="m-3 form-group row d-grid">
  <button type="button" class="btn btn-primary" @click="addServiceItem">Add</button>
  </div>
</form>
</template>

<script>
import dbServiceRef from '../firebase'
import {push } from "firebase/database";
  export default {
    data() {
      return {
         newService: {  
        "name": 'Eg. Marine',
        "description": 'Eg. Sailors Management',
        "options":[
          {"size":"small", 
        "price":100
        },
        {"size":"big", 
        "price":"200"
        }]
        }
      }
    },
    methods: {
      addServiceItem() {
        console.log("Adding Service");
        // const addedService =  push(dbServiceRef, this.newService);
        // console.log(addedService);
        push(dbServiceRef, this.newService)
      }
    }
  }
</script>
