import {Component, h, ref} from "vue";
import {darkTheme, GlobalTheme, NIcon, NotificationType, useNotification} from "naive-ui";
import {RouterLink} from "vue-router";

// router.beforeResolve()


export const theme = ref<null | GlobalTheme>(null)

export const IsSpinShow = ref(false)

export function showSpin() {
    IsSpinShow.value = true
}

export function closeSpin() {
    IsSpinShow.value = false
}


export function switchTheme(flag: boolean) {
    if (flag) {
        theme.value = darkTheme
    } else {
        theme.value = null
    }
}


export function resolveStaticPath(path: string): string {
    const BASE_URL: string = import.meta.env.BASE_URL
    if (BASE_URL.charAt(BASE_URL.length - 1) === '/') {
        path = path.charAt(0) === '/' ? path.slice(1, path.length - 1) : path
    } else {
        path = path.charAt(0) === '/' ? path : '/' + path
    }
    return BASE_URL + path
}

export function createRouterLink(path: string, content: string) {
    return () => h(RouterLink, {
        to: path
    }, {default: () => content})
}

export function renderIcon (icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

export function runPromiseCatching<T, R>(promise: Promise<T>, then?: ((value: T) => R | PromiseLike<R>) | undefined | null): Promise<R> {
    return promise
        .then(then)
        .catch((reason) => {
            console.log(reason)
            return null as R
        })
}

export function notification(type: NotificationType, title: string, content: string, description?: string, meta?: string) {
    useNotification()[type]({
        title: title,
        description: description,
        content: content,
        meta: meta,
        closable: true,
        duration: 3000,
        keepAliveOnHover: true,
    })
}