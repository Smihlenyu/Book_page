<template>
  <div class="pagination">
    <BaseButton :disabled="!includedPrev" title="Назад" @click="prevPage" />
    <ul>
      <li
        v-for="page in pages"
        :key="page"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </li>
    </ul>
    <BaseButton :disabled="!includedNext" title="Вперёд" @click="nextPage" />
  </div>
</template>

<script>
import BaseButton from "@/components/common/BaseButton.vue";

export default {
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
      includedPrev: false,
      includedNext: true,
      activePages: false,
      currentPage: 1,
      totalPage: 5,
    };
  },

  components: {
    BaseButton,
  },
  methods: {
    nextPage() {
      this.currentPage += 1;
      if (this.currentPage >= 2) {
        this.includedPrev = true;
      }
      if (this.currentPage === 5) {
        this.includedNext = false;
      }
    },
    prevPage() {
      this.currentPage -= 1;
      if (this.currentPage === 1) {
        this.includedPrev = false;
      }
      if (this.currentPage < 5) {
        this.includedNext = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

.pagination {
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
  justify-content: center;

  & ul {
    display: flex;
    gap: 20px;
    align-items: center;

    & li {
    }
  }
}
.active {
  color: $Red;
  font-size: 18px;
}
</style>
