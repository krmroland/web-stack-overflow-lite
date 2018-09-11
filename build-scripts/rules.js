const path = require("path");
const AutoPrefixer = require("autoprefixer");
//extract css from javascript modules
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rules = [
    {
        test: /\.js$/,
        loader: "babel-loader"
    },
    {
        test: path.resolve(__dirname, "../src/sass/app.scss"),
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader",
                    options: {
                        ident: "postcss",
                        plugins: [
                            new AutoPrefixer({
                                browsers: [">1%"],
                                // dont add old flexbox spec properties for webkit
                                flexbox: "no-2009"
                            }),
                            require("css-mqpacker")({ sort: true })
                        ]
                    }
                },

                {
                    loader: "sass-loader",
                    options: {
                        //use 8 decimal places for all sass calculations
                        precision: 8
                    }
                }
            ]
        })
    }
];

module.exports = rules;
