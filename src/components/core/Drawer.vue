<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mdAndUp"
    app
    class="text-xs-center"
    style="background-color: #181818;"
    permanent
  >
    <v-layout align-center column fill-height justify-center py-5>
      <h2 class="display-3 font-weight-black primary--text mb-2" v-text="initials" />
      <div class="display-1 mb-2" v-text="schema.basics.name" />
      <span class="title font-weight-light mb-5" v-text="schema.basics.label" />
      <v-container fluid>
        <v-layout row wrap justify-center>
          <v-flex xs12 v-for="(item, i) in items" :key="i">
            <v-btn
              flat
              style="width: 100%;"
              class="text-capitalize subheading font-weight-light mb-3"
              @click="$vuetify.goTo(item.to)"
            >
              <span v-text="item.text" />
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <div class="mt-auto">
        <social-contacts />
      </div>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "Drawer",

  components: {
    SocialContacts: () => import("@/components/SocialContacts")
  },

  data: vm => ({
    items: [
      {
        text: "About Me",
        to: "#about-me"
      },
      {
        text: "Experience",
        to: "#experience"
      },
      {
        text: "Skills & Education",
        to: "#skills"
      },
      {
        text: "Portfolio",
        to: "#portfolio"
      },
      {
        text: "Clients",
        to: "#clients"
      },
      {
        text: "Contact",
        to: "#contact"
      }
    ]
  }),

  computed: {
    ...mapState("app", ["initials", "schema"])
  }
};
</script>
