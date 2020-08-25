<template>
  <div id="wrap">
    <h1 class="title">Edit Post</h1>
    <form id="form" @submit.prevent="submitForm">
      <div class="item">
        <label for="title">title: </label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div class="item">
        <label for="contents">contents: </label>
        <textarea id="contents" type="text" rows="5" v-model="contents" />
        <p class="validation-text" v-if="!isContentsValid">
          Contents must be less then 200
        </p>
      </div>
      <button class="action-create" type="submit">Edit</button>
    </form>
    <p class="log-message">{{ logMessage }}</p>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts.js';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },

  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const id = this.$route.params.id;
        const response = await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
        console.log(response);
      } catch (error) {
        console.log(error);
        this.logMessage = error.response.data.message;
      }
    },
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const { data } = await fetchPost(id);

      this.title = data.title;
      this.contents = data.contents;

      //   console.log(response);
    } catch (error) {
      console.log(error);
      this.logMessage = error.response.data.message;
    }
  },
};
</script>

<style scoped>
#wrap {
  margin: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
}

.title {
  text-align: center;
}

#form {
  width: 100%;
  padding: 1rem 0;
}

.item {
  width: 100%;
}

#title {
  width: 100%;
  padding: 0.5rem;
}

#contents {
  width: 100%;
  max-width: 100%;
  /* height: 10rem; */
  padding: 0.5rem;
}

.action-create {
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  color: rgb(9, 171, 124);
  background-color: whitesmoke;
}

.action-create:hover {
  color: whitesmoke;
  background-color: rgb(9, 171, 124);
}

.log-message {
  margin-top: 1rem;
  color: red;
}
</style>
