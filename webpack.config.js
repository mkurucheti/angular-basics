module.exports =  {
    context: __dirname + "/app",
    entry: "./index.js",
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env']
                    }
                }
            }
        ]
    }
};