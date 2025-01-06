import { build } from "esbuild";
import { readdir } from "fs/promises";
import { resolve } from "path";

const componentPrefix = "./src/components/";

const componentsEntries = [];

await readdir("./src/components").then((files) => {
  componentsEntries.push(...files);
});

// 确定构建入口
const entryPoints = componentsEntries.map((file) => {
  return resolve(componentPrefix, file);
});

// 定义输出

Promise.all(
  entryPoints.map(async (entry, i) => {
    await build({
      entryPoints: [entry],
      bundle: true,
      minify: true,
      // sourcemap: true,
      outfile: `es/components/${componentsEntries[i]}/index.js`,
    });
  })
);
