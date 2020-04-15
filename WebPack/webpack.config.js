const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/scripts/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    mode:'development',
    devServer:
    {
        port : 2222,
        open: true,
        compress:true
    },
    module:{
        rules:[
            {
                test: /\.js$/,       //filtering js
                use: {
                    loader : 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            
            },
            {
                test:/\.css$/,
                use : [MiniCssExtractPlugin.loader,'css-loader']
            },
            // {
            //     test : /\.html$/,
            //     use: HtmlWebpackPlugin.loader, 
            // }
            {
                test: /\.html$/,
                exclude: [/node_modules/, require.resolve('./src/index.html')],
                use: {
                    loader: 'html-loader',
                 
                },
            },
        ]
    },
    resolve: {
        modules: [
          path.join(__dirname, "src"),
          "node_modules"
        ]
       },
    plugins : [
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename: "[id].css"
        }),
        // new HtmlWebpackPlugin({
        //     template : path.join(__dirname, './src/index.html')
        // })
        new HtmlWebpackPlugin({
            template: './src/index.html',
         
        })
    
     ]
}

//Index.js Entry
    //install this
//npm install --save-dev @babel/core @babel/preset-env


//error solution (html loader) - https://stackoverflow.com/questions/43494794/webpack-html-webpack-plugin-error-child-compilation-failed