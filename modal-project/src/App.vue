<template>
  <div>
    <h1>
      {{ title }}
    </h1>

    <input type="text" ref="name">
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'My first VUE App'
    }
  },
  methods: {
    handleClick(){
     this.$refs.name.classList.add('active')
     this.$refs.name.focus();
     console.log(this.$refs.name)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
