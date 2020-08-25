<template>
  <li class="post">
    <div class="post-title">{{ post.title }}</div>
    <div class="post-contents">{{ post.contents }}</div>
    <div class="post-created">{{ post.createdAt }}</div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
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
