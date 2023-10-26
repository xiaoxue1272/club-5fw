import {MenuOption} from "naive-ui";
import {
  Home as HomeIcon,
  Videocam as VideocamIcon
} from '@vicons/ionicons5'
import {createRouterLink, renderIcon} from "./basic";


const menuOptions: MenuOption[] = [
  {
    disabled: false,
    key: "home",
    icon: renderIcon(HomeIcon),
    label: createRouterLink('/home', 'HOME'),
    show: true
  },
  // {
  //   disabled: false,
  //   key: "space",
  //   icon: undefined,
  //   label: createRouterLink('/space', "动态"),
  //   show: true
  // },
  // {
  //   disabled: false,
  //   children: [
  //     {
  //       disabled: false,
  //       key: "bot-logs",
  //       label: "日志查询",
  //       show: true
  //     },
  //     {
  //       disabled: false,
  //       key: "bot-files",
  //       label: "文件查询",
  //       show: true
  //     },
  //     {
  //       disabled: false,
  //       key: "bot-operate",
  //       label: "BOT操作",
  //       show: true
  //     }
  //   ],
  //   key: "bot",
  //   label: "BOT",
  //   show: true
  // },
  // {
  //   disabled: false,
  //   key: "share",
  //   icon: undefined,
  //   label: "分享",
  //   show: true
  // },
  {
    disabled: false,
    key: "live",
    icon: renderIcon(VideocamIcon),
    label: createRouterLink('/live', 'LIVE'),
    show: true
  },
]


export default menuOptions