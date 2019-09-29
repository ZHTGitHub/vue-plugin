import ModalComponent from './Modal'

const MODAL = {
    install(Vue) {
        const modalCtrl = Vue.extend(ModalComponent)
        const instance = new modalCtrl()

        instance.$mount(document.createElement('div'))
        document.body.append(instance.$el)

        Vue.prototype.$modal = function(item) {
            instance.visible = item.visible
            instance.title = item.title
            instance.content = item.content
        }
    }
}

export default MODAL