const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')
const path = require('path')

module.exports = (dir) => ({
    "stories": [
        "../src/**/*@(story|stories|book).@(ts|tsx|js|jsx|mdx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    webpackFinal: async (config) => {
        config.module.rules.find(
            ({ test }) => test.toString().includes('/\\.mdx$/')
        ).use[1].options = {
            compilers: [createCompiler({})]
        }
        config.module.rules.unshift({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader']
        })
        config.resolve.alias['@'] = path.join(dir, '../src/')
        config.resolve.alias['react-redux'] = require.resolve('react-redux')
        // config.resolve.alias['react'] = require.resolve('react')
        return config
    }
})
