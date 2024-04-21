import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import nav from "./nav";
import markdown from "./markdown";

export default defineConfig({
  title: "大众菜谱",
  description: "集合中国各地特色菜肴的烹饪书籍",
  markdown,
  themeConfig: {
    nav,
    sidebar,
    search: { provider: "local" },
    socialLinks: [
      { icon: "github", link: "https://github.com/lianginx/da-zhong-cai-pu" },
    ],
    footer: { message: "基于 MIT 许可发布" },
    editLink: {
      pattern:
        "https://github.com/lianginx/da-zhong-cai-pu/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: { dateStyle: "short", timeStyle: "medium" },
    },
    docFooter: { prev: "上一页", next: "下一页" },
    outline: { label: "页面导航", level: "deep" },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
