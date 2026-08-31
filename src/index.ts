import { parsers as postcssParsers, printers as postcssPrinters } from "prettier/plugins/postcss";
import type { Plugin } from "prettier";

export const languages: NonNullable<Plugin["languages"]> = [
  {
    name: "Valve CSS",
    aliases: ["valve-css", "panorama-css"],
    extensions: [".css"],
    parsers: ["valve-css"],
    vscodeLanguageIds: ["panorama-css"],
  },
];

export const parsers: NonNullable<Plugin["parsers"]> = {
  "valve-css": {
    ...postcssParsers.scss,
    astFormat: "postcss",
  },
};

export const printers: NonNullable<Plugin["printers"]> = {
  postcss: postcssPrinters.postcss,
};

const plugin: Plugin = {
  languages,
  parsers,
  printers,
};

export default plugin;
