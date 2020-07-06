import App from './App.vue'
import store from './store'
import './sass/main.sass'
import './sass/textColor.scss'

window.Vue.config.productionTip = false

new window.Vue({
  store,
  render: h => h(App)
}).$mount('#app')
