/** @type {import('next').NextConfig} */
const path = require("path");

const repo = "change-me-to-your-repo";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
