require("dotenv").config();

module.exports = function (plop) {
  plop.load([
    "./src/blueprint.js",
    "./src/command.js",
    "./src/config.js",
    "./src/config-hook.js",
    "./src/config-option.js",
    "./src/config-route.js",
    "./src/content.js",
    "./src/controller.js",
    "./src/docker-compose.js",
    "./src/ext-auth-challenge.js",
    "./src/ext-api-data.js",
    "./src/ext-api-route.js",
    "./src/ext-cache-type.js",
    "./src/ext-blueprint.js",
    "./src/ext-class-alias.js",
    "./src/ext-class-loader.js",
    "./src/ext-collection.js",
    "./src/ext-collection-filter.js",
    "./src/ext-collection-method.js",
    "./src/ext-command.js",
    "./src/ext-controller.js",
    "./src/ext-field.js",
    "./src/ext-field-method.js",
    "./src/ext-file-method.js",
    "./src/ext-files-method.js",
    "./src/ext-hook.js",
    "./src/ext-kirbytag.js",
    "./src/ext-option.js",
    "./src/ext-page-method.js",
    "./src/ext-page-model.js",
    "./src/ext-pages.js",
    "./src/ext-pages-method.js",
    "./src/ext-permission.js",
    "./src/ext-route.js",
    "./src/ext-section.js",
    "./src/ext-site-method.js",
    "./src/ext-snippet.js",
    "./src/ext-template.js",
    // "./src/ext-translation.js",
    "./src/ext-user-method.js",
    "./src/ext-user-model.js",
    "./src/ext-users-method.js",
    "./src/ext-validator.js",
    "./src/file.js",
    "./src/htaccess.js",
    "./src/index.php.js",
    "./src/language.js",
    "./src/model.js",
    "./src/plugin.js",
    "./src/robots.txt.js",
    './src/setup.js',
    "./src/snippet.js",
    "./src/tdd.js",
    "./src/template.js",
    "./src/user.js",
  ]);
};
