<template>
  <body>
    <main>
      <div class="background">
        <h1>ATS: the leader in the domain of the rental of boats in Guinea </h1> 
        <button type="button" class="btn btn-info" @click='goToServices'>Ask for a quote</button>
      </div> 
    </main>
  </body>
</template>

<script>
export default {
  methods: {
    goToServices() {
      // this.$router.go(-1)
      // this.$router.replace('/services')
      // this.$router.replace({name: 'servicesLink'})
      this.$router.push({name: 'servicesLink'})
    }
  }
}
</script>

<style>
main {
  /* background-image: url('~@/assets/banner.jpg'); */
  /* background-image: url('./assets/banner.jpg'); */
}
h1, h2 {
  margin: 6%;
  color: white;
  text-align: center;
}
.background {
background: black;
opacity: 0.7;
max-width: 80%;
margin: 0 auto;
padding: 20px 0;
}

button {
  max-width: 60%;
  margin-left: 10%;
}

</style>