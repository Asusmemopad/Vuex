import axios from 'axios'

export default {
  state: {
    posts: []
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost){
      state.posts.unshift(newPost);
    }
  },
  actions: {
    async fetchPosts(ctx) {
      const res = await axios.get("http://localhost:9000/api/v1/articles");
      const posts = await res.data._embedded.articles;
      ctx.commit("updatePosts", posts);
    }
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    postsCount(state){
      return state.posts.lenght;
    }
  }
};
