// rollup.config.mjs
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  // output: {
  //   file: "dist/bundle.js",
  //   format: "cjs",
  // },
  output: [
    {
      file: "dist/bundle.min.cjs",
      format: "cjs",
      plugins: [terser()],
    },
    {
      file: "dist/bundle.min.esm.js",
      format: "esm",
      plugins: [terser()],
    },
    {
      file: "dist/bundle.min.umd.js",
      format: "umd",
      name: "YkRollupDemo",
      plugins: [terser()],
    },
  ],
  // plugins: [resolve(), commonjs(), terser()],
  plugins: [resolve()],
};
