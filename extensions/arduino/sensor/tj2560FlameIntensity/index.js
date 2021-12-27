const tj2560FlameIntensity = formatMessage => ({
    name: formatMessage({
        id: 'tj2560FlameIntensity.name',
        default: 'Flame Intensity'
    }),
    extensionId: 'tj2560FlameIntensity',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560FlameIntensity.jpg`,
    description: formatMessage({
        id: 'tj2560FlameIntensity.description',
        default: 'Flame intensity module.'
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

module.exports = tj2560FlameIntensity;
