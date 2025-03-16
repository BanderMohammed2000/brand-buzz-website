import { createApp } from "vue";
import "bootstrap";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import HorizontalCard from "./components/ui/HorizontalCard.vue";
import MultipleCircles from "./components/ui/MultipleCircles.vue";
import CommentCard from "./components/ui/CommentCard.vue";
import UnorderedList from "./components/ui/UnorderedList.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-logo", BaseLogo);
app.component("base-card", BaseCard);
app.component("horizontal-card", HorizontalCard);
app.component("multiple-circles", MultipleCircles);
app.component("comment-card", CommentCard);
app.component("unordered-list", UnorderedList);

app.mount("#app");
