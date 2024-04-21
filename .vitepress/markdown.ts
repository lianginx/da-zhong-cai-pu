import { MarkdownOptions } from "vitepress";
import footnote from "markdown-it-footnote";

export default <MarkdownOptions>{
  config(md) {
    md.use(footnote);
  },
};
