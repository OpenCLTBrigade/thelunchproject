const { FuseBox, WebIndexPlugin, BabelPlugin } = require('fuse-box')
const fuse = FuseBox.init({
    plugins: [
        WebIndexPlugin({
            template: './client/index.html'
        })
    ],
    homeDir: 'client',
    output: 'dist/$name.js',
    alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
    }
})
fuse.bundle('app').instructions(`>src/index.tsx`).watch()
fuse.dev()
fuse.run()
