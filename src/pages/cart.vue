<template>
    <div class="cart-page">
        <cart-card :books="cart" @remove-cart="handleRemove" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartCard from '@/components/Cart/Card.vue';

export default {
    name: 'CartPage',
    components: {
        CartCard,
    },
    computed: {
        ...mapGetters({
            cart: 'book/getCart',
        })
    },
    methods: {
        ...mapActions({
            getFromLocal: 'book/getFromLocal',
            deleteCart: 'book/deleteCart'
        }),
        handleRemove(cart) {
            this.deleteCart(cart);
        }
    },
    mounted() {
        this.getFromLocal();
    }
}
</script>