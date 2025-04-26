<template>
    <div class="default-layout">
        <div class="default-layout__links">
            <router-link to="/">Главная</router-link> |
            <router-link to="/cart">Корзина</router-link>
        </div>
        <slot />
    </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
    name: "DefaultLayout",
});
</script>

<style lang="scss">
    .default-layout {
        padding: 50px;

        &__links {
            margin-bottom: 30px;
        }
    }
</style>