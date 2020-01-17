<template>
    <div>
        <h1>{{postsCount}}</h1>
        <div class="post" v-for="post in allPosts" :key="post.id">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters(['allPosts', 'postsCount']),
    methods: mapActions(['fetchPosts']),
    async mounted() {
        this.fetchPosts();
    }
}
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin: 10px auto;
  width: 670px;
}
</style>