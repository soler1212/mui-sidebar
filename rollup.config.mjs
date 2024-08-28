import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.es.js",
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    babel({ babelHelpers: "bundled" }), // WARNING: No estic segur que em faci falta
    resolve({
      // pass custom options to the resolve plugin
      moduleDirectories: ["node_modules"],
    }),
  ],
  // indicate which modules should be treated as external
  external: ["react"],
};
