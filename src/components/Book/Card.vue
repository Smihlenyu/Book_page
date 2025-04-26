<template>
    <div class="book-card">
        <div class="book-card__item" v-for="book, index in books" :key="index">
            <div class="book-card__item-img">
                <img :src="book.volumeInfo?.imageLinks?.thumbnail" alt="">
            </div>
            <div class="book-card__item-label" :title="book.volumeInfo?.title">
                {{book.volumeInfo?.title}}
            </div>
            <div class="book-card__item-authors">
                <div class="book-card__item-authors-each" v-for="author, key in book.volumeInfo?.authors" :key="key">
                    {{author}}
                </div>
            </div>
            <div class="book-card__item-cart" @click="$emit('addCart', book)">
                В корзину
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
        books: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style lang="scss">
    .book-card {
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
                white-space: nowrap;      /* Prevent text from wrapping */
                overflow: hidden;         /* Hide overflowed content */
                text-overflow: ellipsis;
                width: 300px;  /* Add ellipsis at the end */
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
            }
        }
    }
</style>