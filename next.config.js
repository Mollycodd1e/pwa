/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig={
  ...withPWA({
    dest:'public',
    register:true ,
    skipWaiting:true,
  })
}

module.exports = nextConfig

