#!/usr/bin/env node

import esbuildServe from "esbuild-serve";
import inlineImage from "esbuild-plugin-inline-image";

const isProduction = process.env.NODE_ENV === "production";

esbuildServe(
  {
    entryPoints: ["./src/index.js"],
    outfile: "./public/assets/app.js",
    minify: isProduction,
    sourcemap: isProduction,
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    define: {
      "process.env.NODE_ENV": process.env.NODE_ENV || '"development"',
    },
    plugins: [inlineImage()],
  },
  { root: "public", port: 7000 }
);
