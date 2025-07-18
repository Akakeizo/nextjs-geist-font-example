/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Configurações de produção
  poweredByHeader: false,
  compress: true,
  
  // ✅ Otimizações de imagem
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // ✅ Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // ✅ Configurações TypeScript rigorosas
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ✅ ESLint habilitado
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },
  
  // ✅ Bundle analyzer e otimizações
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  // ✅ Experimental features
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['prisma'],
  },
};

module.exports = nextConfig;
