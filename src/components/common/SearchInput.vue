<template>
  <div class="input">
    <input
      type="text"
      placeholder="Поиск книги"
      @input="handleInput"
      v-model="searchQuery"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleInput() {
      this.$emit("handleInput");
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  & input {
    padding: 10px;
    min-width: 500px;
    width: 100%;
  }
}
</style>
