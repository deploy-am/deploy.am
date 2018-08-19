import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'

library.add(faEnvelope)
library.add(faUser)
library.add(faFacebook)
library.add(faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Element);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
