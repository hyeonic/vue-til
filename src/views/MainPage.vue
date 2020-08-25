<template>
  <div>
    <div class="posts">
      <h1>Today I Learned</h1>
      <loading-spinner v-if="isLoading">
        Loading...
      </loading-spinner>
      <ul v-else>
        <post-list-item
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        ></post-list-item>
        <!-- <li class="post" v-for="(post, index) in posts" :key="index">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-contents">{{ post.contents }}</div>
          <div class="post-created">{{ post.createdAt }}</div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index.js';

export default {
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchPosts() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.posts = data.posts;
    },
  },
  created() {
    this.fetchPosts();
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

/* .post {
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  position: relative;
}

.post-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.post-contents {
  margin-top: 0.8rem;
  height: 10rem;
}

.post-created {
  position: absolute;
  bottom: 4px;
  right: 5px;
  font-size: 14px;
  color: #9e9e9e;
} */
</style>
