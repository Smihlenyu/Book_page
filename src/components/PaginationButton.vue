<template>
  <div class="pagination">
    <BaseButton :disabled="!includedPrev" title="Назад" @click="prevPage" />
    <ul>
      <li
        v-for="page in pages"
        :key="page.id"
        :class="{ active: currentPage === page.name }"
      >
        {{ page.name }}
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
      pages: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 3 },
        { id: 4, name: 4 },
        { id: 5, name: 5 },
      ],
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
  computed: {
    totalPages() {
      return Math.ceil(this.pages.length / this.totalPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.totalPage;
      const end = start + this.totalPage;
      return this.pages.slice(start, end);
    },
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
