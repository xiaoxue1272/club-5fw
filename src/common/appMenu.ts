import {MenuOption} from "naive-ui";
import { RouterLink } from "vue-router";
import { h } from "vue";


function createRouterLink(path: string, content: string) {
  return () => h(RouterLink, {
    to: path
  }, {default: () => content})
}


const appMenuOptions: MenuOption[] = [
  {
    disabled: false,
    key: "home",
    icon: undefined,
    label: createRouterLink('/home', 'HOME'),
    show: true
  },
  {
    disabled: false,
    key: "space",
    icon: undefined,
    label: "动态",
    show: true
  },
  {
    disabled: false,
    children: [
      {
        disabled: false,
        key: "bot-logs",
        label: "日志查询",
        show: true
      },
      {
        disabled: false,
        key: "bot-files",
        label: "文件查询",
        show: true
      },
      {
        disabled: false,
        key: "bot-operate",
        label: "BOT操作",
        show: true
      }
    ],
    key: "bot",
    label: "BOT",
    show: true
  },
  {
    disabled: false,
    key: "share",
    icon: undefined,
    label: "分享",
    show: true
  },
  {
    disabled: false,
    key: "live",
    icon: undefined,
    label: "LIVE",
    show: true
  },
]

export default appMenuOptions