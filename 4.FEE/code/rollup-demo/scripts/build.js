import { rollup } from "rollup";
import config from "../rollup.config.mjs";

export async function compile() {
  const build = await rollup(config);
  const outputs = Array.isArray(config.output)
    ? config.output
    : [config.output];

  return Promise.all(outputs.map((output) => build.write(output)));
}

compile();
