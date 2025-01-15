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
        aliases: {
            VNavBtn: components.VBtn,
            VNavMobileBtn: components.VBtn,
        },
        defaults: {
            VDivider: {
                class: ['mx-n14', 'border-opacity-100'],
            },
            VExpansionPanelTitle: {
                class: ['xl-text-bold']
            },
            VExpansionPanelText: {
                class: ['md-text-regular']
            },
            VNavBtn: {
                variant: 'plain',
                ripple: false,
                class: ['lg-text-regular', 'opacity-100'],
                style: [{textTransform: 'capitalize'}]
            },
            VNavMobileBtn: {
                class: ['bg-dark', 'my-2'],
                style: [
                    {textTransform: 'capitalize'},
                    {width: '210px'},
                    {height: '40px'}
                ]
            },
            VFooter: {
                class: ['lg-text-regular'],
                style: [{borderTop: '1px solid white'}]
            },
            VMain: {
                style: [{paddingBottom: '80px'}]
            },
            VTabs: {
                VTab: {
                    class: ['lg-text-regular'],
                },
                style: [
                    {borderBottom: '2px solid white'},
                    {marginBottom: '20px'}
                ]
            },
            VCarousel: {
                style: [
                    {backgroundColor: '#110E0E'}
                ],
            },
            VCard: {
                VCardTitle: {
                    class: ['md-text-bold']
                },
                VCardSubtitle: {
                    class: ['md-text-regular']
                },
                VCardText: {
                    class: ['sm-text-regular']
                },
                VBtn: {
                    style: [
                        {paddingLeft: '60px'},
                        {paddingRight: '60px'},
                    ]
                },
                style: [
                    {backgroundColor: '#000000'},
                    {margin: '20px'},
                    {padding: '10px'},
                    {'width': '286px'},
                    {fontFamily: 'Open Sans Regular'},
                    {color: '#FFFFFF'}
                ]
            },
            VExpansionPanel: {
                style: [
                    {backgroundColor: '#000000'},
                    {marginBottom: '30px'},
                    {padding: '20px'}
                ]
            },
            VBtn:{
                style: [{backgroundColor: '#110E0E'}],
                class: ['text-surfaceLight', 'opacity-100']
            },
            VRow: {
                style: [{marginTop: '80px'}]
            },
        }
    });

    nuxtApp.vueApp.use(vuetify);
})