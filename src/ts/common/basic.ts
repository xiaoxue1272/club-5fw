import {Component, h, ref} from "vue";
import {darkTheme, GlobalTheme, NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {AxiosResponse} from "axios";


// router.beforeResolve()

export const theme = ref<null | GlobalTheme>(null)

export function switchTheme(flag: boolean) {
    if (flag) {
        theme.value = darkTheme
    } else {
        theme.value = null
    }
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