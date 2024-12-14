import { createApp } from 'vue';
import './style.css';
import router from './router';
import PrimeVue from 'primevue/config';
import Noir from './presets/Noir';
import Button from 'primevue/button';
import Chart from 'primevue/chart';
import Image from 'primevue/image';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(ToastService);
app.component('Button', Button);
app.component('Chart', Chart);
app.component('Image', Image);
app.component('Toast', Toast);
app.mount('#app');

