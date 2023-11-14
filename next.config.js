/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    "images": {
        "domains": ["fsw-store.s3.sa-east-1.amazonaws.com"],
    },
}

module.exports = nextConfig
