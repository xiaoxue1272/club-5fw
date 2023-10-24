import {ref} from "vue";
import {darkTheme, GlobalTheme} from "naive-ui";


export const theme = ref<null | GlobalTheme>(null)

export function switchTheme(flag: boolean) {
    if (flag) {
        theme.value = darkTheme
    } else {
        theme.value = null
    }
}