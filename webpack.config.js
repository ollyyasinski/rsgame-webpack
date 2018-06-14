let path = require("path");

let conf = {
    entry: "../rs-game - Copy/js/script.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        publicPath: "dist/"
    },
    module: {
        rules: [
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loader: 'file-loader'
            // },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}

module.exports = conf;