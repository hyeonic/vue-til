<template>
  <div id="wrap">
    <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
  components: {
    SignupForm,
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
