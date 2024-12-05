<template>
  <div id="app">
    <h1>人生工具包</h1>
    <button @click="goToTool">打开工具</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const goToTool = () => {
      router.push("/tool");
    };
    return { goToTool };
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
