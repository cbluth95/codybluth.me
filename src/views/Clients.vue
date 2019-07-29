<template>
  <core-section id="clients">
    <abstract-3 />
    <core-heading v-text="'My Clients'" />

    <v-carousel :height="600" class="elevation-0" hide-controls :cycle="true">
      <v-carousel-item v-for="(project, i) in projects" :key="i">
        <project :value="project" />
      </v-carousel-item>
    </v-carousel>
  </core-section>
</template>

<script>
export default {
  components: {
    Abstract3: () => import("@/components/Abstract3"),
    Project: () => import("@/components/Project")
  },

  data: () => ({
    projects: [
      {
        name: "The Movies",
        category: "Vue.js (PWA)",
        src: "themovies.png",
        details: {
          client: "The Movies",
          date: "2018-4-19",
          link: "https://www.themovies3.com",
          description:
            "Using Vue.js for the front-end and node for the back-end I was able to create a simple site for a local movie theater. Secure online ticketing and payment solution are coming soon."
        }
      },
      {
        name: "Daycare Website",
        category: "Website Design",
        src: "otpywg.jpg",
        details: {
          client: "Oh, the Places you Will Go",
          date: "2018-4-19",
          link: "https://www.ohtheplacesdaycare.com",
          description:
            "I built a simple mobile friendly site for a local daycare. I used Javascript as well as the Bootstrap framework in order to bring their vision to life."
        }
      }
    ]
  })
};
</script>

<style>
.v-carousel__controls {
  background: transparent;
}
</style>
