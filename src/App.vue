<template>
  <v-app dark>
    <core-drawer />

    <v-content class="hide-overflow">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Drawer')
    }
  }
</script>

<style>
  .text-decoration-none {
    text-decoration: none;
  }
</style>
