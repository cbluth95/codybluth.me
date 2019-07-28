<template>
  <v-img :src="require('@/assets/hero.png')" height="100vh">
    <v-layout
      fill-height
      :justify-end="$vuetify.breakpoint.mdAndUp"
      align-end
      text-xs-right
      :pa-5="$vuetify.breakpoint.mdAndUp"
      :pa-3="$vuetify.breakpoint.smAndDown"
    >
      <div>
        <div
          :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '2'}`"
          class="text-uppercase"
          v-text="schema.basics.name"
        />
        <h1
          :class="`display-${$vuetify.breakpoint.mdAndUp ? '2' : '1'}`"
          class="primary--text text-uppercase"
          v-text="schema.basics.label"
        />
      </div>
    </v-layout>
  </v-img>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("app", ["schema"])
  }
};
</script>
