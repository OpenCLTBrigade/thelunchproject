const { FuseBox, WebIndexPlugin, BabelPlugin, EnvPlugin } = require('fuse-box')
const path = require('path')
const express = require('express')

const client = FuseBox.init({
    homeDir: 'client',
    modulesFolder: 'client/node_modules',
    plugins: [
        WebIndexPlugin({
            template: './client/index.html',
            path: '/static/'
        })
    ],
    output: 'dist/static/$name.js',
    alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
    }
})
client
    .bundle('client')
    .instructions(`>src/index.tsx`)
    .watch('client/**')
client.dev({ root: false }, server => {
    const dist = path.resolve('./dist')
    const app = server.httpServer.app
    app.use('/static/', express.static(path.join(dist, 'static')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(dist, 'static/index.html'))
    })
})
client.run()

const server = FuseBox.init({
    homeDir: 'server',
    modulesFolder: 'server/node_modules',
    output: 'dist/server/$name.js',
    plugins: [
        EnvPlugin({
            DB_PASSWORD: process.env.DB_PASSWORD,
            DB_USERNAME: process.env.DB_USERNAME,
            DB_HOST: process.env.DB_HOST,
            NODE_ENV: 'development'
        })
    ]
})

server.dev({ port: 4455, httpServer: false })

server
    .bundle('server')
    .watch('server/**') // watch only server related code.. bugs up atm
    .instructions(' > [index.ts]')
    // launch and restart express
    .completed(proc => proc.start())

server.run()
