const path = require("path");

const rules = require("./build-scripts/rules");
const plugins = require("./build-scripts/plugins");

const mode = require("./build-scripts/mode").current;
const fs = require("fs");
const config = {
    mode,
    //entry points
    entry: {
        css: "./src/sass/app.scss",
        js: "./src/js/app.js"
    },

    //destination for trans-piled files
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]/app.[name]"
    },
    performance: {
        hints: false
    },
    stats: {
        entrypoints: false
    },
    module: {
        rules
    },

    plugins
};

module.exports = config;
