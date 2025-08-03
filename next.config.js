module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: [
        "firebasestorage.googleapis.com",
        "res.cloudinary.com",
        "hhanime3d.com",
      ],
    },
    webpack(config) {
      // Lấy rule xử lý file SVG mặc định của Next.js
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      );

      // Cập nhật rule để hỗ trợ cả `@svgr/webpack` và xử lý SVG dạng URL
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/, // Xử lý khi được import trong JS/TS
          resourceQuery: { not: [/url/] }, // Không áp dụng nếu có `?url`
          use: ["@svgr/webpack"], // Sử dụng @svgr/webpack
        }
      );

      // Loại trừ SVG khỏi rule mặc định của Next.js
      fileLoaderRule.exclude = /\.svg$/i;

      return config;
    },
  };

  return nextConfig;
};
