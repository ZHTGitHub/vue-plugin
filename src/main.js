import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './plugins/ant-design'
import './plugins/modal'

new Vue({
  render: h => h(App),
}).$mount('#app')
