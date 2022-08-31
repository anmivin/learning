import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const rollupConfig = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-lib",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.typings, format: "esm" }],

    plugins: [dts()],
  },
];

export default rollupConfig;

/* import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const rollupConfig = {
  input: "src/index.tsx",
  output: {
    dir: "output",
    format: "iife",
    globals: {
      react: "React",
      "react-dom/client": "ReactDOM",
      "react/jsx-runtime": "jsxRuntime",
    },
  },
  external: [
    "jsxRuntime",
    "ReactDOM",
    "React",
    [...Object.keys(pkg.dependencies || pkg.devDependencies || {})],
  ],

  plugins: [
    resolve({ modulesOnly: true }),
    commonjs(),
    typescript({
      typescript: require("typescript"),
    }),
  ],
};

export default rollupConfig; */
