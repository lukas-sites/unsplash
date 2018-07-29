<template>
  <el-card :body-style="{ padding: '0px' }">
    <img class="image" :src="photoURL"/>
  </el-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Photo",
  computed: {
    ...mapState(["photoURL"])
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
</style>
