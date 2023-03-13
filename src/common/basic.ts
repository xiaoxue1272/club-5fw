import { NModal } from 'naive-ui'
import { h, Component } from "vue";


class Modal {

    private _show: boolean

    showModal(component: Component) {
        h(NModal, {
            show: this._show = true,
            onUpdateShow: this.close,
            autoFocus: true,
            closeOnEsc: true,
            blockScroll: false
        }, {
            default: () => component
        })
    }

    private close() {
        this._show = false
    }

}