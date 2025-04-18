<template>
  <div class="search">
    <input
      type="text"
      placeholder="Введите название книги ..."
      v-model="searchInput"
      @input="handleInput"
    />
    <h2>Список найденных книг:</h2>
    <div class="search__wrapper">
      <ul v-if="!loading && !error && books.length" class="search__list">
        <li v-for="book in books" :key="book.id" class="search__item">
          <img
            v-if="book.volumeInfo.imageLinks?.thumbnail"
            :src="book.volumeInfo.imageLinks.thumbnail"
            :alt="book.volumeInfo.title"
            class="search__cover"
            @error="handleImageError"
          />
          <div v-else class="no-cover">Нет обложки</div>
          <div class="search__info">
            <h3>{{ book.volumeInfo.title }}</h3>
            <p v-if="book.volumeInfo.authors" class="authors">
              Авторы: {{ book.volumeInfo.authors.join(", ") }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="loading" class="search__loading">Ищем книгу....</div>
    <div v-if="error" class="search__error">{{ error }}</div>
    <div
      v-if="!loading && !error && searchInput && !books.length"
      class="serch__empty"
    >
      Книги не найдены
    </div>
  </div>
  <PaginationButton v-if="!loading && !error && books.length" />
</template>

<script>
import PaginationButton from "@/components/PaginationButton.vue";

export default {
  data() {
    return {
      loading: false,
      error: null,
      timeout: null,
      searchInput: "",
      books: [],
    };
  },
  components: {
    PaginationButton,
  },
  methods: {
    handleInput() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.searchBooks();
      }, 500);
    },
    async searchBooks() {
      if (!this.searchInput.trim()) {
        this.books = [];
        return;
      }
      this.loading = true;
      this.error = null;

      try {
        const url = new URL("https://www.googleapis.com/books/v1/volumes");
        url.searchParams.append("q", this.searchInput);
        url.searchParams.append("maxResults", 12);
        url.searchParams.append("langRestrict", "ru");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();
        this.books = data.items || []; // Сохраняем найденные книги
      } catch (err) {
        this.noSearch = true;
        ("Не удалось выполнить поиск. Пожалуйста, попробуйте позже.");
        console.error("Ошибка поиска:", err);
      } finally {
        this.loading = false;
      }
    },
    onPrevPage() {},
    onNextPage() {},
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/main.scss";

.search {
  width: 100%;
  margin-bottom: 80px;

  & h2 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  & input {
    padding: 10px 20px;
    max-width: 350px;
    width: 100%;
  }

  &__button {
    max-width: 85px;
    margin-left: 30px;
  }

  & ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    gap: 100px 0px;
    margin-bottom: 30px;

    & li {
      width: 230px;
      height: 270px;
    }
  }
  &__cover {
    width: 230px;
    height: 270px;
    margin-bottom: 20px;
  }
  &__info {
    margin-bottom: 20px;
    width: 100%;

    & h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-height: 20px;
    }

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
  }

  &__pagination {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  &__wrapper {
    display: grid;
    gap: 30px;
  }
}
</style>
