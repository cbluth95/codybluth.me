<template>
  <div>
    <hero />

    <v-container py-5 px-0 fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <about-me
            data-aos="fade-down-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
          <v-divider />
        </v-flex>
        <v-flex xs12>
          <experience
            data-aos="slide-right"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
          <v-divider />
        </v-flex>
        <v-flex xs12>
          <skills
            data-aos="slide-left"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
          <v-divider />
        </v-flex>
        <v-flex xs12>
          <portfolio
            data-aos="fade-in"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
          <v-divider />
        </v-flex>
        <v-flex xs12>
          <clients
            data-aos="flip-down"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
          <v-divider />
        </v-flex>
        <v-flex xs12>
          <contact
            data-aos="flip-left"
            data-aos-delay="150"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          />
        </v-flex>
      </v-layout>

      <!-- <clients /> -->
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    AboutMe: () => import("@/views/AboutMe"),
    Clients: () => import("@/views/Clients"),
    Hero: () => import("@/views/Hero"),
    Experience: () => import("@/views/Experience"),
    Portfolio: () => import("@/views/Portfolio"),
    Skills: () => import("@/views/Skills"),
    Contact: () => import("@/views/Contact")
  },

  metaInfo() {
    return {
      title: this.$i18n.t("Home.title")
    };
  },

  data: () => ({
    //
  })
};
</script>
