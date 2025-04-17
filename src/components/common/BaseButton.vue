<template>
  <button @click="clickBtnSearch">
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
  /* methods: {
    clickBtnSearch() {
      this.$emit("clickBtnSearch");
    },
  }, */
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

button {
  padding: 10px;
  max-width: 80px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid $Black;

  &:hover:enabled {
    background-color: $HoverBtn;
    transition: all 0.1s ease-in;
  }

  &:disabled {
    border: 1px solid $Gray;
    color: $Gray;
  }
}
</style>
