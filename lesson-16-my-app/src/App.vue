<!--First we define the template !-->
<template>

  <div id="app">
    <message>Hello there</message>
    <message>Hello again</message>
  </div>

</template>


<script>

  import Message from "./components/Message.vue"; // Import any components that App requires

  export default {
    name: 'app',

    components: { Message }, // Nested components that App requires

    data () {
      return {

      }
    }
  }

</script>


<style>

</style>
