<template>
  <form id="form" @submit.prevent="submitForm">
    <h2>Login to TIL</h2>
    <div class="input">
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div class="input">
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div class="action-login">
      <button type="submit" :disabled="!isUserNameValid || !password">
        로그인
      </button>
    </div>
    <p class="log-message">{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',

      // log
      logMessage: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };

        const { data } = await loginUser(userData);
        this.$store.commit('setUsername', data.user.username);
        this.$store.commit('setToken', data.token);
        // console.log(data.token);
        // this.logMessage = `${data.user.username} 님 환영합니다.`;
        this.$router.push('/main');

        // this.initForm();
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
#form {
  display: inline-block;
  /* text-align: center; */
  width: 70%;
  border: 1px solid #ccc;
  padding: 1rem;
  background: rgb(9, 171, 124);
  background: linear-gradient(
    90deg,
    rgba(9, 171, 124, 1) 35%,
    rgba(7, 190, 130, 1) 70%
  );
  border-radius: 7px;
}

#form > h2 {
  color: whitesmoke;
}

.input {
  text-align: left;
  margin: 0.5rem 0;
}

.input > label {
  color: whitesmoke;
}

input {
  width: 100%;
  margin-top: 0.3rem;
  padding: 0.7rem 0.7rem;
  border-radius: 5px;
  font-size: 1rem;
}

.action-login {
  text-align: right;
  margin-top: 0.5rem;
}

.action-login > button {
  color: rgb(9, 171, 124);
  font-weight: bolder;
  padding: 0.3rem 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: whitesmoke;
  width: 100%;
  margin-top: 1rem;
  padding: 0.7rem 0.7rem;
  font-size: 1rem;
}

.log-message {
  margin-top: 1rem;
  color: whitesmoke;
}
</style>
