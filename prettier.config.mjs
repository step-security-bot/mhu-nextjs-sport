/** @type {import("prettier").Config} */
const config = {
  experimentalTernaries: true,
  plugins: [import.meta.resolve('prettier-plugin-tailwindcss')],
};

export default config;
