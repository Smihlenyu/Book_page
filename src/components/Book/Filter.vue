<template>
    <div class="book-filter">
        <input type="text" placeholder="Search..." @input="handleInput($event.target.value)">
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'BookFilter',
    data() {
        return {
            timeoutId: null,
            time: 500,
        }
    },
    computed: {
        search: {
            ...mapGetters({get: 'book/getSearch'}),
            ...mapMutations({set: 'book/setSearch'}),
        }
    },
    methods: {
        handleInput(event) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.search = event;
                if (event.length) {
                    this.$emit('search');
                }
            }, this.time);
        }
    }
}
</script>

<style lang="scss">
    .book-filter {
        input {
            all: unset;
            border: 1px solid $gray;
            border-radius: 3px;
            padding: 10px 15px;
            font-size: 20px;
        }
    }
</style>