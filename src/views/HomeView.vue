<template>
  <div class="home">
    <h1>Здесь вы можете найти необходимую вам книгу</h1>
    <SearchBook />
  </div>
</template>

<script>
import SearchBook from "@/components/SearchBook.vue";

export default {
  name: "HomeView",
  data() {},
  components: {
    SearchBook,
  },
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.home {
  margin-top: 50px;

  & h1 {
    margin-bottom: 30px;
  }
}
</style>
