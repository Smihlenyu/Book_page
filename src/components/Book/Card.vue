<template>
  <div class="book-card">
    <div v-if="loader" class="book-card__loader">
      <h2>Загрузка книг</h2>
      <Loader class="book-card__loader-svg" />
    </div>
    <div class="book-card__wrapper">
      <div class="book-card__item" v-for="book in books" :key="book.id">
        <Favorites class="book-card__item-svg" />
        <div class="book-card__item-img">
          <img :src="book.volumeInfo?.imageLinks?.thumbnail" alt="" />
        </div>

        <div class="book-card__item-label" :title="book.volumeInfo?.title">
          {{ book.volumeInfo?.title }}
        </div>
        <div class="book-card__item-authors">
          <div
            :title="author"
            class="book-card__item-authors-each"
            v-for="(author, key) in book.volumeInfo?.authors"
            :key="key"
          >
            {{ author }}
          </div>
        </div>
        <div
          class="book-card__item-cart"
          @click="HandleClick(book)"
          :class="{ Active: isActive[book.id] }"
        >
          <div class="book-card__item-cart__flex">
            {{ message[book.id] || "В корзину" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/common/Loader.vue";
import Favorites from "@/components/common/Favorites.vue";

export default {
  name: "BookCard",
  data() {
    return {
      isActive: {},
      loader: false,
      message: {},
    };
  },
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Loader,
    Favorites,
  },
  methods: {
    HandleClick(book) {
      this.message[book.id] = "Добавлено";
      if (!this.isActive[book.id]) {
        this.$emit("addCart", book);
        this.isActive[book.id] = true;
      }
    },
  },
};
</script>

<style lang="scss">
.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Active {
    background-color: red;
    transition: all 0.2s ease-in;
  }

  &__loader {
    display: flex;
    gap: 20px;
    align-items: baseline;
  }

  &__wrapper {
    display: flex;
    flex-flow: row wrap;
    gap: 30px;
    font-size: 20px;
  }

  &__item {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    width: 300px;
    position: relative;

    &-svg {
      position: absolute;
      bottom: 0;
      right: 50px;
    }

    &-img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-label {
      font-size: 24px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 300px;
      text-align: center;
    }

    &-cart {
      border-radius: 6px;
      padding: 5px 10px;
      width: fit-content;
      background-color: $primary;
      color: $white;
      user-select: none;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &__flex {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }

    &-authors {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: nowrap;
      overflow: hidden;
      align-items: center;
    }
  }
}
</style>
