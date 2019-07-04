import Vue from "vue";
import Vuetify, { VLayout } from "vuetify/lib";
import { Scroll } from "vuetify/lib/directives";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  theme: {
    primary: "#00d2c8",
    accent: "#fff"
  },
  components: {
    VLayout
  },
  directives: {
    Scroll
  },
  iconfont: "mdi"
});
