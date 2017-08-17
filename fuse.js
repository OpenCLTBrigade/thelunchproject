const { FuseBox, WebIndexPlugin, BabelPlugin } = require('fuse-box')
const path = require('path')
const express = require('express')

const fuse = FuseBox.init({
    plugins: [
        WebIndexPlugin({
            template: './client/index.html',
            path: '/static/'
        })
    ],
    homeDir: 'client',
    output: 'dist/static/$name.js',
    alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
    }
})
fuse.bundle('app').instructions(`>src/index.tsx`).watch()
fuse.dev({ root: false }, server => {
    const dist = path.resolve('./dist')
    const app = server.httpServer.app
    app.use('/static/', express.static(path.join(dist, 'static')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(dist, 'static/index.html'))
    })
})
fuse.run()
