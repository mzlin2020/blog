require("events").EventEmitter.defaultMaxListeners = 0; // 解除监听器数量限制

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //关闭严格模式
};

module.exports = nextConfig;
