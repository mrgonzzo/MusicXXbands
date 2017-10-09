module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'src/vendor/angular.min.js',
            'src/mocks/mocks.js',
            'src/app/**/**/*.js',
            'test/*.js'
        ],
        
        autoWatch: false,
        frameworks: ['jasmine'],
        angular: ['mocks', 'route'],
        browsers: ['Chrome', 'Firefox'],
        singleRun: true,
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]
    });
};