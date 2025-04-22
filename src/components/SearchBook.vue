<template>
  <div class="search">
    <div class="search__header">
      <input
        v-model="searchQuery"
        @keyup.enter="fetchBooks"
        placeholder="Поиск книг..."
      />
      <BaseButton @click="fetchBooks" title="Поиск" />
    </div>

    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="search__books">
        <div v-for="book in books" :key="book.id" class="search__book">
          <img
            :src="book.volumeInfo.imageLinks?.thumbnail || placeholderImg"
            alt="Обложка"
          />
          <h3>{{ book.volumeInfo.title }}</h3>
          <p v-if="book.volumeInfo.authors">
            {{ book.volumeInfo.authors.join(", ") }}
          </p>
        </div>
      </div>

      <div class="search__pagination">
        <BaseButton
          title="Назад"
          @click="prevPage"
          :disabled="currentPage === 0"
        />
        <span>Страница {{ currentPage + 1 }}</span>
        <BaseButton
          @click="nextPage"
          :disabled="books.length < itemsPerPage"
          title="Вперед"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./common/BaseButton.vue";

export default {
  data() {
    return {
      searchQuery: "",
      books: [],
      loading: false,
      error: null,
      currentPage: 0,
      itemsPerPage: 12,
      totalItems: 0,
      placeholderImg: "https://via.placeholder.com/150",
    };
  },
  components: {
    BaseButton,
  },
  methods: {
    async fetchBooks() {
      this.loading = true;
      this.error = null;

      try {
        const startIndex = this.currentPage * this.itemsPerPage;
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            this.searchQuery
          )}&startIndex=${startIndex}&maxResults=${this.itemsPerPage}`
        );
        const data = await response.json();

        this.books = data.items || [];
        this.totalItems = data.totalItems || 0;

        if (this.books.length === 0) {
          this.error = "Книги не найдены";
        }
      } catch (err) {
        this.error = "Ошибка загрузки данных";
        this.books = [];
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      this.currentPage++;
      this.fetchBooks();
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.fetchBooks();
      }
    },
  },
  mounted() {
    this.fetchBooks();
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

.search {
  & input {
    padding: 10px 20px;
    max-width: 550px;
    width: 100%;
    margin-right: 20px;
  }

  &__header {
    margin-bottom: 30px;

    display: flex;
  }

  &__pagination {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    align-items: center;
  }

  &__loading {
    display: flex;
    align-items: normal;

    & span {
      margin-right: 10px;
    }

    & svg {
      margin-top: 2px;
    }
  }

  &__books {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 70px;
    grid-template-columns: repeat(4, 1fr);
  }

  &__book {
    width: 230px;
    height: 270px;

    & p {
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-height: 30px;
    }
    & h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-height: 20px;
    }

    & img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
    }
  }
}
</style>
