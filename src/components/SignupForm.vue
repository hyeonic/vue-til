<template>
  <div id="wrap">
    <form id="form" @submit.prevent="submitForm">
      <h2>Sign up to TIL</h2>
      <div class="input">
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div class="input">
        <label for="password">pw: </label>
        <input id="password" type="text" v-model="password" />
      </div>
      <div class="input">
        <label for="nickname">nickname: </label>
        <input id="nickname" type="text" v-model="nickname" />
      </div>
      <div class="action-signup">
        <button
          type="submit"
          :disabled="!isUserNameValid || !password || !nickname"
        >
          회원가입
        </button>
      </div>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { registerUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',

      // log
      logMessage: '',
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.user);
    },
  },
  methods: {
    async submitForm() {
      try {
        console.log('form submit');
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };

        const { data } = await registerUser(userData);
        console.log(data);
        this.logMessage = `${data.username}님이 가입되었습니다.`;
      } catch (error) {
        console.log(error.respose.data);
        this.logMessage = error.respose.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped>
#wrap {
  width: 100%;
}

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

.action-signup {
  text-align: right;
  margin-top: 0.5rem;
}

.action-signup > button {
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
</style>
