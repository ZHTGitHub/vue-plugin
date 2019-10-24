import ModalComponent from './Modal'

const MODAL = {
    install(Vue) {

        let cancelFn = function() {}
        let confirmFn = function() {}

        const modalCtrl = Vue.extend(ModalComponent)
        const instance = new modalCtrl()

        instance.$mount(document.createElement('div'))
        document.body.append(instance.$el)

        Vue.prototype.$modal = function(item) {
            instance.visible = item.visible
            instance.title = item.title
            instance.content = item.content
            cancelFn = item.cancel
            confirmFn = item.confirm
        }

        Vue.prototype.$modal.cancel = function() {
            if(cancelFn) {
                cancelFn()
            }
        }

        Vue.prototype.$modal.confirm = function() {
            if(confirmFn) {
                confirmFn()
            }
        }

    }
}

export default MODAL