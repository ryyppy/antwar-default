const path = require("path");
const page = require("./utils/page");
const { makeAntwarPaths } = require("./bindings/Antwar.bs");

module.exports = {
  apiUrl: "",
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
    context: {
      helmet: {}
    }
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts").default,
  paths: makeAntwarPaths()
};
