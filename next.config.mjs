import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Static export configuration
    typescript: {
        ignoreBuildErrors: true, // Supress TS errors during build
    },
};

export default withSentryConfig(nextConfig, {
    silent: !process.env.CI, // Only log in CI environments
    widenClientFileUpload: true, // Upload more detailed source maps
    reactComponentAnnotation: {
        enabled: false, // Annotate React components in breadcrumbs
    },
    hideSourceMaps: true, // Hide source maps from the final build
    disableLogger: true, // Reduce bundle size by disabling Sentry logger
    automaticVercelMonitors: true, // Enable automatic instrumentation for Vercel Cron Monitors
});
