import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoURL:
      "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3840&h=2160&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=2e888638a63be71683df7506c78ac4d2"
  },
  mutations: {
    UPDATE_PHOTO_URL: (state, url) => {
      state.photoURL = url;
    }
  },
  actions: {
    queryPhoto: (context, keyword) => {
      const url = new URL(`https://source.unsplash.com/1920x1080/?${keyword}`);
      fetch(url)
        .then(resp => context.commit("UPDATE_PHOTO_URL", resp.url))
        .catch(reason => console.error(reason));
    }
  }
});
