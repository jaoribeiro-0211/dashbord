<template>
  <teleport to="body">
    <div
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full bg-black bg-opacity-50  h-hull"
    >
      <div class="fixed mx-10">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-lg  animate__animated animate__fadeInDown animate__faster"
        >
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: DEFAULT_WIDTH,
    });

    return {
      state,
    };
  },
};
</script>

<style>
</style>