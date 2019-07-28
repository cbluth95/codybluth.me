<template>
  <core-section id="about-me">
    <abstract-1 />
    <v-flex xs12 md7>
      <section>
        <core-heading v-text="'Who am I?'" />
        <v-layout justify-space-between wrap>
          <v-flex xs12 md7>
            <core-text class="mb-0">
              <p v-text="schema.basics.summary" />
              <div>
                <v-img :src="require('@/assets/signature.png')" class="ml-auto" width="150" />
              </div>
            </core-text>
          </v-flex>
          <v-flex xs12 md4 :mb-5="$vuetify.breakpoint">
            <v-layout align-center>
              <v-flex xs6 text-uppercase primary--text font-weight-medium>
                <div class="mb-3" v-text="'Location'" />
                <div class="mb-3" v-text="'Email'" />
                <div class="mb-3" v-text="'Phone'" />
                <!-- <div v-text="'Discord'" /> -->
              </v-flex>
              <v-flex xs6 subheading no-wrap>
                <div class="mb-3" v-text="'United States'" />
                <div class="mb-3" v-text="schema.basics.email" />
                <div class="mb-3" v-text="schema.basics.phone" />
                <!-- <div>@j.smith#3992</div> -->
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <core-heading v-text="'What I can do!'" />
        <div>
          <v-expansion-panel v-model="expansion" popout>
            <v-expansion-panel-content
              v-for="(item,i) in items"
              :key="i"
              :class="expansion !== i ? 'transparent' : ' info'"
            >
              <div slot="header" class="title font-weight-light">
                <div v-text="item.name" />
              </div>
              <div>
                <v-card color="transparent">
                  <v-card-text>
                    <div v-for="(text, i) in item.keywords" :key="i" v-text="text" />
                  </v-card-text>
                </v-card>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </section>
    </v-flex>

    <v-flex hidden-sm-and-down md5 text-xs-right text-uppercase>
      <!-- <div class="display-1" v-text="schema.basics.label" />
      <span class="primary--text headline font-weight-light" v-text="schema.basics.name" />-->
      <!-- <v-img
        :src="require('@/assets/john.png')"
        height="100%"
        contain
        style="margin-right: -48px;"
      />-->
    </v-flex>
  </core-section>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  components: {
    Abstract1: () => import("@/components/Abstract1")
  },

  data: () => ({
    expansion: 0
  }),

  computed: {
    ...mapState("app", ["schema"]),
    items() {
      return this.schema.interests;
    }
  }
};
</script>

<style lang="sass">
  .v-expansion-panel > li
    border-top: 1px solid rgba(#fff, .12) !important
</style>
