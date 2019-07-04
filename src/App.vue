<template>
  <v-app dark>
    <core-drawer />

    <v-content class="hide-overflow">
      <router-view />
    </v-content>
    <v-btn
      v-show="isScrolled"
      id="toTop"
      class="md-5 mr-3 elevation-21 animated zoomIn"
      dark
      fab
      button
      bottom
      right
      color="#ffc200"
      fixed
      @click="scrollTop"
    >
      <v-icon dark>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false
    };
  },
  beforeMount() {
    window.onscroll = this.handleScroll;
  },
  components: {
    CoreDrawer: () => import("@/components/core/Drawer")
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    animateCSS(element, animationName, callback) {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);

      function handleAnimationEnd() {
        node.classList.remove("animated", animationName);
        node.removeEventListener("animationend", handleAnimationEnd);

        if (typeof callback === "function") callback();
      }

      node.addEventListener("animationend", handleAnimationEnd);
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.text-decoration-none {
  text-decoration: none;
}
</style>
