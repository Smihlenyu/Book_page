<template>
  <div class="search">
    <SearchInput @handleInput="handleInputSearch" />
    <BaseButton title="Найти" class="search__button" />
    <div v-if="loadingBooks" class="search__loading">Ищем книгу....</div>
    <div class="search__error">{{ error }}</div>
  </div>
</template>

<script>
import BaseButton from "@/components/common/BaseButton.vue";
import SearchInput from "@/components/common/SearchInput.vue";

export default {
  data() {
    return {
      loadingBooks: false,
      error: null,
      timeout: null,
    };
  },
  components: {
    BaseButton,
    SearchInput,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

.search {
  max-width: 400px;
  width: 100%;
  display: grid;
  gap: 20px;

  & input {
    padding: 10px 20px;
  }

  &__button {
    max-width: 85px;
  }
}
</style>
