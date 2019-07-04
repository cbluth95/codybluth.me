<template>
  <core-section id="contact">
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs12 justify-center>
          <core-heading>Let's talk.</core-heading>
        </v-flex>
        <v-flex xs12 md5 mb-4 :pr-5="$vuetify.breakpoint.mdAndUp">
          <core-subheading class="text-uppercase">What can I do for you?</core-subheading>
          <core-text class="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce vel est interdum, pharetra magna ac, facilisis ante.
            Fusce eu finibus magna. Sest interdum, pharetra magna ac, facilisis ante.
            Fusce eu finibus magna.
          </core-text>

          <core-subheading class="text-uppercase mb-3">Send me a Message</core-subheading>

          <v-form>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field solo-inverted flat label="Name" />
              </v-flex>
              <v-flex xs12>
                <v-text-field solo-inverted flat label="Email" />
              </v-flex>
              <v-flex xs12>
                <v-text-field solo-inverted flat label="Subject" />
              </v-flex>
              <v-flex xs12>
                <v-textarea solo-inverted flat label="Message" />
              </v-flex>
              <v-flex text-xs-right>
                <v-btn class="ma-0" color="primary">Contact Me</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>

    <v-flex xs12 md3 text-xs-left>
      <core-subheading class="text-uppercase">Social Contacts</core-subheading>

      <social-contacts />

      <v-list class="transparent" three-line>
        <!-- <v-list-tile>
          <v-list-tile-avatar>
            <v-icon
              size="48"
              color="primary"
              class="mr-5"
            >
              mdi-map-marker
            </v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">
              Address
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ schema.basics.location.address }}<br>
              {{ schema.basics.location.city }}, {{ schema.basics.location.postalCode }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>-->
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon size="48" color="primary" class="mr-5">mdi-email</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">Email</v-list-tile-title>
            <v-list-tile-sub-title v-text="schema.basics.email" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon size="48" color="primary" class="mr-5">mdi-phone</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="primary--text">Phone</v-list-tile-title>
            <v-list-tile-sub-title v-text="schema.basics.phone" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-flex xs12 md4>
      <!-- <v-img
        :src="require('@/assets/john-alt.png')"
        contain
        style="top: 95px;"
      />-->
    </v-flex>
  </core-section>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  components: {
    SocialContacts: () => import("@/components/SocialContacts")
  },

  computed: {
    ...mapState("app", ["schema"])
  }
};
</script>
