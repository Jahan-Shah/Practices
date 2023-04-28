import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import router from './router';
import store from './store/index';


const app = createApp(App);

app.use(router).use(store);

app.component('BaseCard', BaseCard)
  .component('BaseBadge', BaseBadge)
  .component('BaseButton', BaseButton);

app.mount('#app');
