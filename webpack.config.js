module.exports={
    entry:"./src/js/func.js",
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
    },
    module:{
        rules :[{
            test:/\.css$/,
            loader:"style-loader!css-loader"
        }]
    },
    devServer:{
        port:9099
    }
}