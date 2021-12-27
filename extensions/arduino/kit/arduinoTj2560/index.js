const arduinoTj2560Ext = () => ({
    name: 'TJ2560',
    extensionId: 'arduinoTj2560Ext',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    description: 'Tj arduino 2560 board.',
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: null
});

module.exports = arduinoTj2560Ext;
