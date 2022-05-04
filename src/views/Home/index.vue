<template>
  <CustomHeader />
  <Contact />
  <div class="flex justify-center py-10">
    <p class="font-medium text-center text-gray-800">Feedbacker 2021</p>
  </div>
</template>

<script>
import CustomHeader from "./CustomHeader.vue";
import Contact from "./Contact.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    CustomHeader,
    Contact,
  },
  setup() {
    const router = useRouter("token");

    onMounted(() => {
      const token = window.localStorage.getItem("token");
      if (token) {
        router.push({ name: "Feedbacks" });
      }
    });

    function handleLogin() {}
    function handleAccountCreate() {}

    return {
      handleLogin,
      handleAccountCreate,
    };
  },
};
</script>

<style>
</style>