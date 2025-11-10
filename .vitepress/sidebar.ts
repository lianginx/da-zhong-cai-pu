import { DefaultTheme } from "vitepress";

export default <DefaultTheme.Sidebar>[
  { text: "再版说明", link: "/reprint-notice" },
  {
    text: "蔬菜类",
    base: "/vegetables",
    collapsed: false,
    items: [
      {
        text: "上海",
        collapsed: true,
        items: [
          { text: "开洋烧菜心", link: "/shanghai/kai-yang-shao-cai-xin" },
          { text: "虾油菠菜", link: "/shanghai/xia-you-bo-cai" },
          { text: "生煸菠菜", link: "/shanghai/sheng-bian-bo-cai" },
          { text: "炒韭菜", link: "/shanghai/chao-jiu-cai" },
          { text: "炒青椒丝", link: "/shanghai/chao-qing-jiao-si" },
          { text: "酱爆茄子", link: "/shanghai/jiang-bao-qie-zi" },
          { text: "油闷茄子", link: "/shanghai/you-men-qie-zi" },
        ],
      },
      {
        text: "杭州",
        base: "hangzhou",
        collapsed: true,
        items: [
          // { text: "开洋烧菜心", link: "/kai-yang-shao-cai-xin" },
          // { text: "虾油菠菜", link: "/xia-you-bo-cai" },
        ],
      },
    ],
  },
  {
    text: "豆腐面筋类",
    base: "/tofu-gluten",
    collapsed: false,
    items: [
      {
        text: "上海",
        collapsed: true,
        items: [
          { text: "辣酱豆腐", link: "/shanghai/la-jiang-dou-fu" },
          { text: "家常豆腐", link: "/shanghai/jia-chang-dou-fu" },
        ],
      },
      {
        text: "杭州",
        collapsed: true,
        items: [],
      },
    ],
  },
  {
    text: "肉类",
    base: "/meat",
    collapsed: false,
    items: [
      {
        text: "上海",
        collapsed: true,
        items: [
          { text: "韭芽炒肉丝", link: "/shanghai/jiu-ya-chao-rou-si" },
          { text: "炒姜丝肉", link: "/shanghai/chao-jiang-si-rou" },
        ],
      },
      {
        text: "杭州",
        collapsed: true,
        items: [],
      },
    ],
  },
  {
    text: "禽蛋类",
    base: "/poultry-eggs",
    collapsed: false,
    items: [],
  },
  {
    text: "鱼虾类",
    base: "/fish-shrimp",
    collapsed: false,
    items: [],
  },
  {
    text: "凉菜类",
    base: "/cold-dishes",
    collapsed: false,
    items: [],
  },
  {
    text: "汤菜类",
    base: "/soup",
    collapsed: false,
    items: [],
  },
  {
    text: "附录",
    base: "/appendix",
    collapsed: false,
    items: [],
  },
];
