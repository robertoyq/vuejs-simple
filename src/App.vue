<template>
  <div id="app">
    <Header />
    <Form @updated="updateItems" />
    <List :items="list" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

export default {
  name: "App",
  components: {
    Header,
    Form,
    List
  },

  data() {
    return {
      list: {}
    };
  },

  methods: {
    updateItems(event) {
      this.list = event;
    }
  }
};
</script>

<style>
#app {
  background: transparent url("./assets/img/wave.svg") no-repeat top center;
  background-size: 100% auto;
}
body {
  background: url("./assets/img/pattern.png");
}
</style>
