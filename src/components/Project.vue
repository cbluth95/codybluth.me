<template>
  <v-sheet height="100%" :class="$vuetify.breakpoint.mdAndUp && 'pa-5'" color="transparent">
    <div class="text-xs-center mb-5">
      <core-subheading class="mb-1" v-text="value.name" />
      <span class="subheading" v-text="value.category" />
    </div>
    <v-layout wrap>
      <v-flex shrink>
        <div class="mb-3" style="max-width: 500px;">
          <core-subheading class="mb-3">Project Details</core-subheading>
          <core-text>{{value.details.description}}</core-text>

          <core-subheading>Project Info</core-subheading>
          <v-list class="transparent">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">mdi-account</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">Client Name</v-list-tile-title>
              <v-list-tile-title
                class="caption grey--text text--lighten-1 hidden-sm-and-down"
              >{{value.details.client}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">mdi-calendar</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">Project Dates</v-list-tile-title>
              <v-list-tile-title
                class="caption grey--text text--lighten-1 hidden-sm-and-down"
              >{{value.details.date}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">mdi-tag</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">Project Category</v-list-tile-title>
              <v-list-tile-title
                class="caption grey--text text--lighten-1 hidden-sm-and-down"
              >{{value.category}}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">mdi-tag</v-icon>
              </v-list-tile-action>
              <v-list-tile-title class="mr-2">Website</v-list-tile-title>
              <v-list-tile-title class="caption grey--text text--lighten-1 hidden-sm-and-down">
                <a :href="value.details.link" target="_blank">{{value.details.link}}</a>
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </div>
      </v-flex>
      <v-flex v-if="value.src" class="hidden-sm-and-down">
        <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="350"
          width="500"
          contain
          class="mx-auto"
        />
      </v-flex>
    </v-layout>
  </v-sheet>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        name: "",
        category: "",
        details: [],
        src: undefined
      })
    }
  }
};
</script>
