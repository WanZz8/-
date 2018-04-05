var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    entry: './src/js/app.js',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: __dirname
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },{
                test: /\.styl(us)?$/,
                use: [
                    'style-loader', 'css-loader', {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }, 'stylus-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name:'assets/[name]-[hash:5].[ext]',
                            limit:4000
                        }
                    },
                    'image-webpack-loader'
                ]
            },{
                test: /\.(ttf|eot|woff|woff2)/,
                loader: 'file-loader',
            }
        ]
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules'),
        ],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins : [
        //判断是否为开发模式，开发模式提示错误
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
        //css分离
        new ExtractTextPlugin('[name].css'),
           // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        require('autoprefixer')({
                            broswers: ['last 5 versions']
                        })
                    ];
                }
            },
            devServer: {
                    contentBase: './',
                    colors: true,
                    hot: true,
                    post: 8888,
                    inline: true,
                    open: true
                }

        })
    ]
}
