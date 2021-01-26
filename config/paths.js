const path = require("path");

function resolvePath(appPath) {
  return path.join(__dirname, "..", appPath);
}

module.exports = {
  appBuild: resolvePath("build"),
  appPublic: resolvePath("public"),
  appHTML: resolvePath("public/index.html"),
  appNodeModules: resolvePath("node_modules"),
  appEntryJS: resolvePath("src/index.jsx"),
  alias: {
    images: resolvePath("src/assets/images"),
    components: resolvePath("src/components"),
    utils: resolvePath("src/utils"),
    routes: resolvePath("src/routes"),
    assets: resolvePath("src/assets"),
    styles: resolvePath("src/styles")
  }
};
