/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'credithaatimages.s3.ap-south-1.amazonaws.com',
            'chdocsusers.s3.ap-south-1.amazonaws.com'
        ],
    },
};

export default nextConfig;
