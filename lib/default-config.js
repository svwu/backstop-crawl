module.exports = {
    viewports: [
        {
            name: 'Screen',
            width: 1440,
            height: 900,
        },
    ],
    scenarios: [],
    paths: {
        bitmaps_reference: 'backstop_data/bitmaps_reference',
        bitmaps_test: 'backstop_data/bitmaps_test',
        casper_scripts: 'backstop_data/casper_scripts',
        html_report: 'backstop_data/html_report',
        ci_report: 'backstop_data/ci_report',
    },
    casperFlags: [],
    engine: 'phantomjs',
    report: ['browser'],
    debug: false,
};
