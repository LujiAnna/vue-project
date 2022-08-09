import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useServiceStore = defineStore('ServiceStore', {
  // other options...
  // change order name to QUOTES
  // state
  state: () => {
    return {
      serviceItems: {
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
    }, // serviceItems
    // orders: ['a', 'b', 'c'],
    // orders: 1,
    orders: [], 
    currentUser: null,
    } // return
  }, // state

  // getters
  getters: {
    // remove, not necesary
    // getServiceItems(state) {
    //   return getServiceItems;
    // },
    // getServiceItems() {
    //     return this.serviceItems;
    //   },

    // or use arrow function
    // getServiceItems: state => state.serviceItems,
    // getServiceItems: () => this.serviceItems,
    // getNumberOfOrders: state => state.orders.length,
    // getNumberOfOrders: state => state.orders.length + 10,
    getNumberOfOrders: state => state.orders,
    currentUser: state => state.currentUser
  },

  // mutations
  // mutations: {
  //   addQuote(state) {
  //     return state.orders++; 
  //   }
    // or arror function
    // addQuote: state => state.orders++
  // }

  // Also use instead of mutation and commit
  // actions
    // here mutate-change-update the state
        actions: {
          // addQuote() {
          //   this.orders++
          // },
          addQuote(orders) {
            this.orders.push(orders);
          },
          userStatus(user) {
            if(user) {
              this.currentUser = user;
            } else {
                this.currentUser = null;
              } 
        },
                // setUser(context, user) {
                //   context.commit('userStatus', user)
                // }
                // setUser({commit}, user) {
                //   commit('userStatus', user)
                // }
                setUser(user) {
                  this.userStatus(user);
                }
  }
})