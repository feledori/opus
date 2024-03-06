const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
let config = getDefaultConfig(__dirname);

config = withNativeWind(config, {
	input: "./src/app/global.css",
	configPath: "./tailwind.config.cjs",
});

module.exports = config;
