<template>
  <div id="container">
    <Search id="search"/>
    <Photo id="photo" />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Photo from "./components/Photo.vue";

export default {
  name: "app",
  components: {
    Search,
    Photo
  }
};
</script>

<style>
body {
  background: #1b1e27;
  margin: 20px;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#search {
  max-width: 400px;
  margin: 20px;
}

#photo {
  max-width: 95%;
  margin: 10px;
  border: 0;
}
</style>
