<template>
  <header>
    <div class="logo">Today I Learned</div>
    <div class="nav">
      <router-link to="/login">로그인</router-link>
      <router-link to="signup">회원가입</router-link>
    </div>
  </header>
</template>

<script>
export default {};
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
}

.logo,
.nav {
  flex: none;
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
</style>
