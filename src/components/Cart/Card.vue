<template>
  <div class="cart-card" v-if="books.length >= 1">
    <div class="cart-card__item" v-for="(book, index) in books" :key="index">
      <div class="cart-card__item-img">
        <img :src="book.volumeInfo?.imageLinks?.thumbnail" alt="" />
      </div>
      <div class="cart-card__item-label" :title="book.volumeInfo?.title">
        {{ book.volumeInfo?.title }}
      </div>
      <div class="cart-card__item-authors">
        <div
          class="cart-card__item-authors-each"
          :title="author"
          v-for="(author, key) in book.volumeInfo?.authors"
          :key="key"
        >
          {{ author }}
        </div>
      </div>
      <div class="cart-card__item-remove" @click="$emit('removeCart', book)">
        Удалить
      </div>
    </div>
  </div>
  <div v-else>Корзина пуста</div>
</template>

<script>
export default {
  name: "CartCard",
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.cart-card {
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  font-size: 20px;

  &__item {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
    width: 300px;

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

    &-remove {
      border-radius: 6px;
      padding: 5px 10px;
      width: fit-content;
      background-color: $primary;
      color: $white;
      user-select: none;
      cursor: pointer;
    }

    &-authors {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: nowrap;
      overflow: hidden;
      align-items: center;
      &-each {
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
