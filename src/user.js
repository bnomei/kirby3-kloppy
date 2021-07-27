const Kirby = require('./helpers/kirby.js');
const Slugify = require('./helpers/slugify.js');

module.exports = function (plop) {
    plop.setHelper('userIdFrom', function (text) {
        return Slugify.parse(text); // TODO
    });
    plop.setHelper('encryptPassword', function (text) {
        return text; // TODO
    });

    var basepath = Kirby.root('users');

    plop.setGenerator('user', {
        description: 'make a user',
        prompts: [{
            type: 'input',
            name: 'email',
            message: 'Email',
        },
        {
            type: 'input',
            name: 'name',
            message: 'Name',
        },
        {
            type: 'password',
            name: 'password',
            message: 'Password',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Role',
            choices: Kirby.userRoles(),
        },
        {
            type: 'input',
            name: 'language',
            message: 'Panel Language',
            default: 'en',
        }],
        actions: [{
            type: 'add',
            path: basepath + '/{{userIdFrom email }}/index.php',
            templateFile: 'user.index.php.hbs'
        },
        {
            type: 'add',
            path: basepath + '/{{userIdFrom email }}/.htaccess',
            templateFile: 'user.htaccess.hbs'
        }]
    });
};
