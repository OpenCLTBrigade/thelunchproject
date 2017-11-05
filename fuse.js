const { FuseBox, WebIndexPlugin, BabelPlugin, EnvPlugin, QuantumPlugin, SVGPlugin } = require('fuse-box')
const path = require('path')
const express = require('express')
var compression = require('compression')
const TypeHelper = require('fuse-box-typechecker').TypeHelper

const PORT = process.env.PORT || 3030
const isProduction = !!process.env.NODE_ENV

var typeHelper = TypeHelper({
    tsConfig: './tsconfig.json',
    basePath: './',
    name: 'Typechecker',
    yellowOnOptions: true
})

const client = FuseBox.init({
    target: 'browser',
    homeDir: 'packages/client',
    plugins: [
        SVGPlugin(),
        EnvPlugin({
            API_URL: process.env.API_URL || `http://localhost:${PORT}`,
            DB_USERNAME: process.env.DB_USERNAME,
            DB_HOST: process.env.DB_HOST,
            NODE_ENV: 'development'
        }),
        WebIndexPlugin({
            template: './packages/client/index.html',
            path: '/static/'
        }),
        isProduction &&
            QuantumPlugin({
                removeExportsInterop: false,
                uglify: true,
                treeshake: true
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
    .watch('client/**')
    .instructions(`>src/index.tsx`)
    .completed(() => typeHelper.runSync())

client.dev({ root: false }, server => {
    const dist = path.resolve('./dist')
    const app = server.httpServer.app
    app.use(compression())
    app.use('/static/', express.static(path.join(dist, 'static')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(dist, 'static/index.html'))
    })
})
client.run()

const server = FuseBox.init({
    target: 'server',
    homeDir: 'packages/server',
    output: 'dist/server/$name.js',
    plugins: [
        EnvPlugin({
            PORT,
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
    .instructions(' > [src/index.ts]')
    // launch and restart express
    .completed(proc => {
        proc.start()

        typeHelper.runSync()
    })

server.run()
