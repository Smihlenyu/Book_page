<template>
  <div class="favorites"><SelectedBooks /></div>
</template>

<script>
import SelectedBooks from "@/components/SelectedBooks.vue";

export default {
  name: "FavoritesBook",
  data() {
    return {};
  },
  components: {
    SelectedBooks,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style/main.scss";

.favorites {
  margin-top: 50px;
}
</style>
