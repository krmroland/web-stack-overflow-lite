const path = require("path");

const rules = require("./build-scripts/rules");
const plugins = require("./build-scripts/plugins");

const mode = require("./build-scripts/mode").current;

const config = {
    mode,
    //entry points
    entry: {
        auth: "./src/js/auth.js",
        main: "./src/js/app.js"
    },

    //destination for trans-piled files
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
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
