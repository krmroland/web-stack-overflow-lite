const path = require("path");

const glob = require("glob-all");

const PurgecssPlugin = require("purgecss-webpack-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const layouts = require("handlebars-layouts");

//copy assets from the src directory to the dist directory
const CopyWebpackPlugin = require("copy-webpack-plugin");

const CleanWebpackPlugin = require("clean-webpack-plugin");

//extract css from javascript modules
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//show some notifications

const WebpackNotifier = require("webpack-notifier");

//use handlebars as template engine for building UI
const HandlebarsPlugin = require("handlebars-webpack-plugin");

//reload browsers on every change
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const pretty = require("pretty");

const mode = require("./mode");
const plugins = [
    new CleanWebpackPlugin(["dist"], {
        root: path.resolve("./")
    }),
    new WebpackNotifier({
        alwaysNotify: true,
        title: "Compilation was successful",
        contentImage: path.resolve(__dirname, "andela.png")
    }),
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, "../src/images"),
            to: path.resolve(__dirname, "../dist/images")
        }
    ]),

    new HandlebarsPlugin({
        entry: path.join(__dirname, "../src", "pages", "*.hbs"),
        output: path.join(__dirname, "../dist", "[name].html"),
        partials: [path.join(__dirname, "../src", "**", "*.hbs")],
        data: path.join(__dirname, "../src/dummyData.json"),

        onBeforeSave(Handlebars, resultHtml) {
            return pretty(resultHtml);
        },
        onBeforeSetup(handlebars) {
            handlebars.registerHelper(layouts(handlebars));
        }
    }),
    //extract css out of the js modules
    new ExtractTextPlugin("css/app.css")
];

const CleanCss = new PurgecssPlugin({
    paths: glob.sync(["./src/**/*.hbs", "./src/js/*.js"]),
    whitelist: ["active", "#nprogress"],
    whitelistPatternsChildren: [/^nprogress/]
});

if (mode.isNone) {
    plugins.push(CleanCss);
}

if (mode.isProduction) {
    plugins.push(
        new OptimizeCssAssetsPlugin({
            canPrint: false
        }),
        CleanCss
    );
}

if (mode.isDevelopement) {
    // add browserSync only in development
    plugins.push(
        new BrowserSyncPlugin({
            port: 7000,
            server: { baseDir: [path.resolve(__dirname, "../dist")] },
            open: true
        })
    );
}

module.exports = plugins;
