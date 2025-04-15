<template>
  <button>
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      title: "",
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

button {
  padding: 10px;
}
</style>
