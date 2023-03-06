import {MenuOption} from "naive-ui";


const appMenuOptions: MenuOption[] = [
  {
    disabled: false,
    key: "home",
    icon: null,
    label: "HOME",
    show: true
  },
  {
    disabled: false,
    key: "space",
    icon: null,
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
    icon: null,
    label: "分享",
    show: true
  },
  {
    disabled: false,
    key: "live",
    icon: null,
    label: "LIVE",
    show: true
  },
]

export default appMenuOptions