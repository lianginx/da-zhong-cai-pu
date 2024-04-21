import { defineConfig } from "vitepress";
import footnote from "markdown-it-footnote";
import sidebar from "./sidebar";
import nav from "./nav";

export default defineConfig({
  title: "大众菜谱",
  description: "集合中国各地特色菜肴的烹饪书籍",
  markdown: {
    config(md) {
      md.use(footnote);
    },
  },
  themeConfig: {
    nav,
    sidebar,
    search: { provider: "local" },
    socialLinks: [
      { icon: "github", link: "https://github.com/lianginx/da-zhong-cai-pu" },
    ],
    footer: {
      message: "基于 MIT 许可发布",
    },
  },
});
