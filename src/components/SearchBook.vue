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

    <div v-if="loading" class="search__loading">
      <span>Загрузка</span>
      <svg
        fill="hsl(228, 97%, 42%)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="15px"
        height="15px"
      >
        <g>
          <rect x="11" y="1" width="2" height="5" opacity=".14" />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(30 12 12)"
            opacity=".29"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(60 12 12)"
            opacity=".43"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(90 12 12)"
            opacity=".57"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(120 12 12)"
            opacity=".71"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(150 12 12)"
            opacity=".86"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(180 12 12)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="discrete"
            dur="0.75s"
            values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="search__books">
        <div v-for="book in books" :key="book.id" class="search__book">
          <img
            :src="book.volumeInfo.imageLinks?.thumbnail || placeholderImg"
            alt="Обложка"
          />
          <div class="search__block">
            <div class="search__title">
              <h3>{{ book.volumeInfo.title }}</h3>
              <p v-if="book.volumeInfo.authors">
                {{ book.volumeInfo.authors.join(", ") }}
              </p>
            </div>
            <BtnFavorites @click="addFavoritesPage(book)" />
          </div>
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
import BaseButton from "@/components/common/BaseButton.vue";
import BtnFavorites from "@/components/common/BtnFavorites.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchQuery: "Мстители",
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
    BtnFavorites,
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
    addFavoritesPage() {
      console.log("dasdsd");
    },
  },
  mounted() {
    this.fetchBooks();
  },
  ...mapActions(["addFavorite"]),
  addFavoritesPage(book) {
    this.addFavorite(book);
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
  &__block {
    display: flex;
    justify-content: space-between;
    max-width: 270px;
    align-items: center;
    max-height: 50px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 230px;
    height: 40px;
  }

  &__pagination {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
    align-items: center;
  }

  &__loading {
    display: flex;
    align-items: center;

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
    grid-row-gap: 50px;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
  }

  &__book {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & p {
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-height: 30px;
      max-width: 270px;
    }
    & h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      max-height: 20px;
      max-width: 270px;
    }

    & img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
      width: 270px;
      height: 300px;
    }
  }
}
</style>
