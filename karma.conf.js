module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            'src/vendor/*.js',
            'src/mocks/*.js',
            'src/app/*.js',
            'src/app/components/**/*.js',
            'src/app/services/*.js',
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