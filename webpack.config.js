//var html = require('./html.pug');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var ExtractText = require('extract-text-webpack-plugin');
//if (global.Promise==null) global.Promise=require('es6-promise')

module.exports = {
    context:__dirname + '/fronted',
    entry: {
      styles:"./lib/bootstrap-3.3.7-dist/css/bootstrap.css",
      home:  "./js/home", //данный модуль подключает ситили и всё
      //ind:"./js/my"

      lib:"./js/lib",
      

      //about: "./about",
      //index: "./style.styl"
    },
    output: {
        path:__dirname + '/public',
        filename: "[name].js",
        library: "[name]"
    },
    watch:false, //автоматическая пересборка проекта
    // watchOptions:{ //для ускорения автоматической пересборки проекта
    // 	aggregateTimeout:300 // по умолчанию 300
    // }
    module: {
    // your modules...
      loaders: [
        //{test: /\.js/,loader:'babel?presets[]=es2015'},
       {test: /\.(css)$/,    loader: ExtractTextPlugin.extract('css')}// 'style!css' }
       //,{test: /\.scss$/, loaders: ["style", "css", "stylus"]      }
       ,{ test: /\.(styl)$/, loader: ExtractTextPlugin.extract('style','css!stylus?resolve url')}// 'style!css' }

        
       ,{test: /\.jade/, loader: 'jade?pretty'/*pass options to pug as a query ('pug-html-loader?pretty')*/}
       ,{test: /\.(jpg|png|mp4|eot|svg|ttf|woff|woff2|gif)$/,loader: 'file?name=[path][name].[ext]'}
       // ,{
       //      //test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
       //      //test:'my.js',
       //      //loader: "imports" //?define=>false
       //      test: require.resolve("js/my"),
       //      loader: "imports?this=>window"
       //  }
       //,{test: 'my.js',loader: ExtractTextPlugin.extract('script')}

    //,{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]}
    ,stylus: {
      use: [require('nib')()],
      import: ['~nib/lib/nib/index.styl']
    }
    // ,resolve: {
    //     alias: {
    //         j: "my.js"
    //     }
    // }
    ,plugins:[
      new ExtractTextPlugin('[name].css'),
      //new ExtractText('style_lib.css'),
      //new ExtractTextPlugin('my.js'),
      //https://github.com/ampedandwired/html-webpack-plugin#writing-your-own-templates
      new HtmlWebpackPlugin({ template: './index.jade',filename: 'index.html',}),
      //new HtmlWebpackPlugin({ template: 'style.css',filename: 'style.css',}),
      new webpack.NoErrorsPlugin(), //плагин для выявления ошибки на ранних этапах сборки 
      new webpack.optimize.CommonsChunkPlugin({ //плагин для автоматического выявления 
                                                //дубликатов и переноса в отдельный скрипт
        name:"common"
      }),

      
    new webpack.optimize.UglifyJsPlugin({ //оптимизация кода js и css
        compress: {
              warnings: false,
          },
          output: {
              comments: false,
          },
    })
    ]
 };