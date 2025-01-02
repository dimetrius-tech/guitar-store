import {createVuetify, type ThemeDefinition} from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';

const GuitarTheme: ThemeDefinition = {
    colors: {
        background: '#110E0E',
        surface: '#110E0E'
    },
    variables: {
        h1FontSize: '54px',
        h2FontSize: '48px',
        h3FontSize: '42px',
        fontFamilyHeading: '"Poppins", sans-serif',
    },
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'GuitarTheme',
            themes: {
                GuitarTheme
            }
        },
    });

    nuxtApp.vueApp.use(vuetify);
})