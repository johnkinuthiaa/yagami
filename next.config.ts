import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";
import createMDX from '@next/mdx'
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        // remarkPlugins: [remarkGfm],
        // rehypePlugins: [],
    },
})
export default withContentCollections(withMDX(nextConfig));
