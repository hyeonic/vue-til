<template>
  <header>
    <div class="logo">
      <router-link to="/">Today I Learned </router-link>
    </div>
    <span class="username" v-show="isLogin"
      >by {{ $store.state.username }}</span
    >
    <div class="nav">
      <template v-if="isLogin">
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  background: rgb(9, 171, 124);
  background: linear-gradient(
    90deg,
    rgba(9, 171, 124, 1) 35%,
    rgba(7, 190, 130, 1) 70%
  );
  padding: 1rem 0.5rem;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

.logo {
  margin-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: whitesmoke;
}

.nav {
  margin-left: auto;
  margin-right: 0.5rem;
}

.logo,
.nav {
  flex: none;
}

.logo > a {
  color: whitesmoke;
}

.nav a {
  color: rgb(9, 171, 124);
  font-weight: bolder;
  padding: 0.3rem 0.3rem;
  border: 1px solid #ccc;
  margin-left: 0.5rem;
  border-radius: 5px;
  background-color: whitesmoke;
}

.nav a:hover {
  background-color: rgb(9, 171, 124);
  color: whitesmoke;
}

.username {
  color: whitesmoke;
  font-size: 1rem;
  margin-left: 1rem;
}
</style>
