const mode = process.env.NODE_ENV || "none";

module.exports = {
    current: mode,
    isProduction: mode === "production",
    isDevelopement: mode === "development",
    isNone: mode === "none"
};
