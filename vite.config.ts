import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import rehypeShiki from "@shikijs/rehype";
import { mermaidTransformer } from "./src/lib/mermaid-transformer";
import { devtools } from '@tanstack/devtools-vite'

const config = defineConfig({
  plugins: [
    devtools(),
    nitroV2Plugin(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    mdx({
      remarkPlugins: [remarkGfm, remarkFrontmatter],
      providerImportSource: "@mdx-js/react",
      rehypePlugins: [
        [
          rehypeShiki,
          {
            themes: {
              light: "github-light",
              dark: "github-dark-dimmed",
            },
            transformers: [mermaidTransformer],
          },
        ],
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ["@prisma/client", ".prisma/client"],
  },
});

export default config;
