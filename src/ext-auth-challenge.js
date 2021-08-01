const F = require("./utils/f.js");
const helper = require("./utils/helpers.js");
const kirby = require("./utils/kirby.js");
const prompts = require("./utils/prompts.js");

module.exports = function (plop) {
  const basepath = kirby.root("plugins");
  const pattern = /^( *)(\/\/ @PLOP_EXT_AUTH_CHALLENGE)\r?\n/gim;

  plop.setHelper("wrapValue", helper.wrapValue);

  plop.setGenerator("ext-auth-challenge", {
    description: "append auth challenge code to a file",
    prompts: [prompts.folder(basepath), prompts.key(), prompts.value()],
    actions: [
      function (data) {
        data = kirby.resolvePluginInclude(data, basepath);
      },
      {
        path: "{{ indexphp }}",
        type: "modify",
        pattern: pattern,
        templateFile: "ext-option.php.hbs",
      },
      function (data) {
        return F.clipboard(plop, data.indexphp, pattern);
      },
    ],
  });
};
