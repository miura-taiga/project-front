/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: 'pages/top',
          permanent: true, // 永続的なリダイレクト
        },
      ];
    },
  };

export default nextConfig;
