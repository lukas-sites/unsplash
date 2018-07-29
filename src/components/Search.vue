<template>
  <el-input @keyup.enter.native="query" placeholder="Please type a keyword" v-model="keyword">
    <el-button type="primary" slot="append" icon="el-icon-search" @click.prevent="query"></el-button>
  </el-input>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    ...mapActions(["queryPhoto"]),
    query() {
      this.queryPhoto(this.keyword);
    }
  }
};
</script>
