import Vue from "vue";
import Vuetify, { VLayout } from "vuetify/lib";
import { Scroll } from "vuetify/lib/directives";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  theme: {
    primary: "#DC8C2A", // orange
    secondary: "#00D2C8", // light blue
    accent: "#AE81E9", // light purple
    error: "#FF5252",
    info: "#00A79F", // accent blue
    success: "#4CAF50",
    warning: "#FFC107"
  },
  components: {
    VLayout
  },
  directives: {
    Scroll
  },
  iconfont: "mdi"
});
