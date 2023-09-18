import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


import Vue3Katex from '@hsorby/vue3-katex'
import 'katex/dist/katex.min.css';  

loadFonts()



createApp(App)

    .use(router)
    .use(store)
    .use(vuetify)
    .use(Vue3Katex, {     
        globalOptions: { 
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                ],
                errorCallback: () => {},
                strict: false,
            },
        output: 'mathml',
    })
    .mount('#app')
