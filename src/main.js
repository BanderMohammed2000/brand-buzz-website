import { createApp } from "vue";
import "bootstrap";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseCard from "./components/ui/BaseCard.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-logo", BaseLogo);
app.component("base-card", BaseCard);

app.mount("#app");
