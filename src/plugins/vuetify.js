import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import { Scroll } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#FFAA00',
    accent: '#FFD277'
  },
  components: {
    VLayout
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi'
})
