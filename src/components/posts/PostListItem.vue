<template>
  <li class="post">
    <div class="post-title">{{ post.title }}</div>
    <div class="post-contents">{{ post.contents }}</div>
    <div class="post-created">
      {{ post.createdAt }}
      <ion-icon name="create-outline" size="large" @click="editItem"></ion-icon>
      <ion-icon
        name="trash-outline"
        size="large"
        @click="deleteItem"
      ></ion-icon>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts.js';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.post._id);
        this.$emit('refresh');
      }
    },
    editItem() {
      const id = this.post._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style scoped>
.post {
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  position: relative;
  flex-grow: 1;
  width: 30%;
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
  bottom: 1rem;
  right: 1rem;
  font-size: 14px;
  color: #9e9e9e;
}
</style>
