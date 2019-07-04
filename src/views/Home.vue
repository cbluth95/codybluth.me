<template>
  <div>
    <hero />

    <v-container py-5 px-0 fluid>
      <about-me />

      <experience />

      <skills />

      <portfolio />

      <!-- <clients /> -->

      <contact />
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
