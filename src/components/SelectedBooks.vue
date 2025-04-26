<template>
  <div>книги избранные выведи здесь что-то</div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      //Это данные которые я передаю
      /* her: (state) => state.her, */
    }),

    ...mapActions({
      //это какое либо действие
      //addFavoriteBook: 'addFavorite'
    }),
    ...mapGetters({
      // это фильтр. достают из state значения
      //filteredFavorites: 'getFilteredFavorites'
    }),
  },
  methods: {
    ...mapMutations({
      //Я могу здесь изменить что-то
      // addFavoriteBook: 'addFavorite' Привязка мутации addFavorite
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";
</style>
