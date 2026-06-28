import type { ShikiTransformer } from "shiki";

export const mermaidTransformer: ShikiTransformer = {
  name: "mermaid-raw-code",
  pre(node) {
    if (this.options.lang === "mermaid") {
      node.properties["data-mermaid-code"] = this.source;
    }
  },
};
