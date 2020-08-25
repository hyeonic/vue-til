<template>
  <div id="wrap">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
#wrap {
  width: 100%;
  margin-top: 20%;
  align-items: center;
  text-align: center;
}
</style>
