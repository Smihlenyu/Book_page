<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const route = useRoute();

const layouts = {
  default: DefaultLayout,
}

const layout = computed(() => layouts[route?.meta?.layout] || 'div');
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>

</style>
