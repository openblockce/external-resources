const tj2560BumpSwitch = formatMessage => ({
    name: formatMessage({
        id: 'tj2560BumpSwitch.name',
        default: 'Bump Switch'
    }),
    extensionId: 'tj2560BumpSwitch',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560BumpSwitch.jpg`,
    description: formatMessage({
        id: 'tj2560BumpSwitch.description',
        default: 'Bump switch module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['sensor'],
    helpLink: null
});

module.exports = tj2560BumpSwitch;
