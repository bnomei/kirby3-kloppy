const Kirby = require('./helpers/kirby.js');
const Clipboardy = require('clipboardy');
const F = require('./helpers/f.js');

module.exports = function (plop) {
    plop.setHelper('saveFoldername', function (text) {
        return text
            .replace('index.php', '')
            .replace(/\/$/, ""); // trim trailing slash
    });

    var basepath = Kirby.root('index');

    plop.setGenerator('dockercompose', {
        description: 'make a docker-compose.yml file',
        prompts: [{
            type: 'input',
            name: 'folder',
            message: 'Folder (optional)',
            default: basepath,
        },
        {
            type: 'list',
            name: 'type',
            message: 'Type',
            choices: [
                { name: 'default', value: 'default' },  
                { name: 'webdevops', value: 'webdevops' },  
            ],
        },
        {
            type: 'input',
            name: 'image',
            message: 'Image',
            default: 'webdevops/php-apache:7.4',
            when: (data) => data.type === 'webdevops',
        },
        {
            
            type: 'input',
            name: 'root',
            message: 'WEB_DOCUMENT_ROOT',
            default: '/app',
            when: (data) => data.type === 'webdevops',
        },
        {  
            type: 'input',
            name: 'alias',
            message: 'WEB_ALIAS_DOMAIN',
            default: 'localhost',
            when: (data) => data.type === 'webdevops',
        }
        ],
        actions: [{
            type: 'add',
            path: basepath + '{{#if folder}}/{{saveFoldername folder }}{{/if}}/docker-compose.yml',
            templateFile: 'docker-compose.{{ type }}.yml.hbs'
        },
        function(data) {
            let path = plop.renderString(basepath + '/{{#if folder}}/{{saveFoldername folder }}{{/if}}/docker-compose.yml', data);
            console.log("\n" + F.read(path));
            Clipboardy.writeSync(path);
            return 'Path has been copied to clipboard.'
        }]
    });
};
