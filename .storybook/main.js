const { resolve } = require("path");
const { withUnimodules } = require("@expo/webpack-config/addons");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config = withUnimodules(config, {
      projectRoot: resolve(__dirname, "../"),
    });

    config.resolve.alias = {
      "react-native$": "react-native-web",
    };
    return config;
  },
};
