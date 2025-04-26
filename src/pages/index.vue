<template>
    <div class="index-page">
        <book-filter @search="handleSearch" />
        <book-card :books="books" @add-cart="handleAddCart" />
    </div>
</template>

<script>
import BookCard from '@/components/Book/Card.vue';
import BookFilter from '@/components/Book/Filter.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'IndexPage',
    components: {
        BookCard,
        BookFilter
    },
    computed: {
        ...mapGetters({
            books: 'book/getBooks',
        })
    },
    methods: {
        ...mapActions({
            fetchBooks: 'book/fetchBooks',
            addToCart: 'book/addToCart',
        }),
        handleSearch() {
            this.fetchBooks();
        },
        handleAddCart(book) {
            this.addToCart(book);
        }
    }
}
</script>

<style lang="scss">
    .index-page {
        display: flex;
        flex-flow: column;
        gap: 30px;
    }
</style>