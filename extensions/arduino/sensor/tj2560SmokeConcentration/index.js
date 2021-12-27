const tj2560SmokeConcentration = formatMessage => ({
    name: formatMessage({
        id: 'tj2560SmokeConcentration.name',
        default: 'Smoke Concentration'
    }),
    extensionId: 'tj2560SmokeConcentration',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560'],
    author: 'ArthurZheng',
    iconURL: `asset/tj2560SmokeConcentration.jpg`,
    description: formatMessage({
        id: 'tj2560SmokeConcentration.description',
        default: 'Smoke concentration module.'
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

module.exports = tj2560SmokeConcentration;
