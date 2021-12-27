const tj2560LightIntensity = formatMessage => ({
    name: formatMessage({
        id: 'tj2560LightIntensity.name',
        default: 'Light Intensity'
    }),
    extensionId: 'tj2560LightIntensity',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560LightIntensity.jpg`,
    description: formatMessage({
        id: 'tj2560LightIntensity.description',
        default: 'Light intensity module.'
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

module.exports = tj2560LightIntensity;
