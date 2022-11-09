import { createApp } from "vue";
import { createPinia } from "pinia";

import "./global-style.css";
import App from "./App.vue";
import { router } from "./routes";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// Adding Font Awesome Icons
// https://oh-vue-icons.js.org/
import * as FaIcons from "oh-vue-icons/icons/fa";
import { addIcons, OhVueIcon } from "oh-vue-icons";

const pinia = createPinia();

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
createApp(App).use(router).use(pinia).use(vuetify).component("v-icon", OhVueIcon).mount("#app");
