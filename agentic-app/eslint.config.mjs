import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: ["node_modules", ".next", "out", ".venv", "public/**"]
  },
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off"
    }
  }
];

export default config;
