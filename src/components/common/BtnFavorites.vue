<template>
  <div class="favorites">
    <svg
      @click="addFavoritesPage"
      :class="{ favorites__active: activeFavorites }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFavorites: false,
    };
  },
  methods: {
    addFavoritesPage() {
      this.activeFavorites = !this.activeFavorites;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

.favorites {
  display: flex;
  align-items: center;
  max-width: 190px;
  justify-content: space-between;

  & svg {
    fill: none;
    stroke: $Black;
    cursor: pointer;
  }

  & .favorites__active {
    fill: $Red;
  }
}
</style>
