import {createVuetify, type ThemeDefinition} from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles';

const GuitarTheme: ThemeDefinition = {
    colors: {
        background: '#110E0E',
        surface: '#110E0E',
        surfaceLight: '#FFFFFF',
        additionalGray: '#585050',
        dark: '#000000'
    },
    variables: {
        h1FontSize: '54px',
        h2FontSize: '48px',
        h3FontSize: '42px',
        fontFamily: '"Poppins", sans-serif',
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
        defaults: {
            VFooter: {
                style: [{borderTop: '1px solid white'}]
            },
            VMain: {
                style: [{paddingBottom: '80px'}]
            },
            VTabs: {
                style: [{borderBottom: '2px solid white'}, {marginBottom: '20px'}]
            },
            VCard: {
                style: [{backgroundColor: '#000000'}, {padding: '20px'}]
            },
            VExpansionPanel: {
                style: [{backgroundColor: '#000000'}, {marginBottom: '30px'}, {padding: '20px'}]
            },
            VBtn:{
                style: [{backgroundColor: '#110E0E'}]
            },
            VRow: {
                style: [{marginTop: '80px'}]
            }
        }
    });

    nuxtApp.vueApp.use(vuetify);
})