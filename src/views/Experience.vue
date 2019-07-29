<template>
  <core-section id="experience">
    <v-flex xs12>
      <core-heading v-text="'Where I\'ve been'" />
    </v-flex>

    <v-flex xs12 md9 mx-auto class="text-box">
      <v-timeline :light="light" :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in items" :key="i" v-bind="getAttrs()">
          <span slot="opposite" v-text="item.startDate.slice(0, 4)" />
          <v-card class="pa-3 white black--text animated fadeInLeft">
            <h3 class="subheading font-weight-bold text-xs-center" v-text="item.company" />
            <v-divider color="black" />
            <div v-text="item.summary" />
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </core-section>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  data: vm => ({
    light: vm.random()
  }),

  computed: {
    ...mapState("app", ["schema"]),
    items() {
      return this.schema.work;
    }
  },

  methods: {
    getAttrs() {
      const attrs = {};

      if (this.random()) attrs.fillDot = true;
      if (this.random()) attrs.largeDot = true;

      return attrs;
    },
    random() {
      return Boolean(Math.round(Math.random()));
    }
  }
};
</script>

<style>
.text-box {
  z-index: 1;
}
</style>

