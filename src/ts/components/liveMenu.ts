import {MenuOption} from "naive-ui";
import {createRouterLink, renderIcon} from "../common/basic";
import {Settings as SettingsIcon, Enter as EnterIcon} from "@vicons/ionicons5";

const liveMenuOptions: MenuOption[] = [
    {
        disabled: false,
        key: "live home",
        icon: renderIcon(SettingsIcon),
        label: createRouterLink('/live/home', 'Live主页'),
        show: true
    },
    {
        disabled: false,
        key: "live control",
        icon: renderIcon(SettingsIcon),
        label: createRouterLink('/live/control', '开关播设置'),
        show: true
    },
    {
        disabled: false,
        key: "live room",
        icon: renderIcon(EnterIcon),
        label: createRouterLink('/live/room', '直播间'),
        show: true
    },
]

export default liveMenuOptions