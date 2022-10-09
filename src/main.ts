import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const Vue = createApp(App).use(store).use(router);

import {
    Button,
    Layout,
    Menu,
} from 'ant-design-vue'

Vue.component(Button.name,Button)
Vue.component(Layout.name,Layout)
Vue.component(Menu.name,Menu)

Vue.mount('#app')

