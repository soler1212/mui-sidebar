import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "mui-sidebar"
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
        sourcemap: true
      },
    ],
    plugins: [
      babel({ babelHelpers: "bundled" }), // WARNING: No estic segur que em faci falta
      resolve({
        // pass custom options to the resolve plugin
        moduleDirectories: ["node_modules"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      external()
    ],
    // indicate which modules should be treated as external
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.types,
        format: "es",
      },
    ],
    plugins: [dts.default()]
  },
];
