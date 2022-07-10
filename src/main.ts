import { createApp } from "vue";
import App from "./App.vue";

import "./assets/globals.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTachometer,
  faUsd,
  faList,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faEnvelope,
  faBarChart,
  faUserCircle,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faTachometer,
  faUsd,
  faCheckCircle,
  faList,
  faEnvelope,
  faBarChart,
  faUserCircle,
  faWrench,
  faPlusSquare
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
