/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "http://gyeongseo944.github.io/HelloToday";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true,
};

module.exports = nextConfig;
