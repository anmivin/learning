import typescript from "@rollup/plugin-typescript";
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

export default rollupConfig;
