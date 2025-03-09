import { createApp } from "vue";
import "bootstrap";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import HorizontalCard from "./components/ui/HorizontalCard.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-logo", BaseLogo);
app.component("base-card", BaseCard);
app.component("horizontal-card", HorizontalCard);

app.mount("#app");
