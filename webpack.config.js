const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
//import path from "path" //모던 자바스크립트파일이 아니라서 import라는 걸 쓸 수 없다.
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets","js", "main.js"); //nodejs는 absolute경로를 이런식으로 만들 수 있다. (__dirname)은 현재의 프로젝트 디렉토리인데 (Nodejs의 전역변수임.)
const OUTPUT_DIR = path.join(__dirname,"static");
const config = {
    entry: ["@babel/polyfill",ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader:"css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options:{
                            plugins(){
                                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },
    output:{
        path:OUTPUT_DIR,
        filename: "[name].js" //export할 파일들의 이름
    },
    plugins:[new ExtractCSS("styles.css")]

    
};

module.exports = config;