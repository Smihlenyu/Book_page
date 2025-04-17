<template>
  <div class="home">
    <h1>Здесь вы можете найти необходимую вам книгу</h1>
    <SearchBook />
    <!-- <NameTitle /> -->
  </div>
</template>

<script>
/* import NameTitle from "@/components/common/NameTitle.vue"; */

import SearchBook from "@/components/SearchBook.vue";

export default {
  name: "HomeView",
  data() {},
  components: {
    SearchBook,
    /*  NameTitle, */
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
