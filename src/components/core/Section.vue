<template>
  <v-layout
    tag="section"
    pa-5
    v-bind="$attrs"
    wrap
    style="position: relative;"
  >
    <slot />
  </v-layout>
</template>

<script>
  export default {
    inheritAttrs: false
  }
</script>
