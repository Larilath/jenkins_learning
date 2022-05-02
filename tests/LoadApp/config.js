const { testData } = require('../../../testdata.js')

exports.config = {
    profile: "integration",
    specs: "./tests/LoadApp/LoadApp.spec.js",
    reporters: [{
            name: './reporter/junitReporter',
            reportName: './tests/LoadApp/user/target/report/report.xml',
        },
        {
            name: './reporter/screenshotReporter',
            screenshotsRoot: './tests/LoadApp/user/target/report'
        }
    ],
    params: {
        specUrl: '${params.url}'
    },
    pageLoading: {
        wait: '1000',
        initialReload: false
    },
    timeouts: {
        getStepTimeout: '10000',
        getPageTimeout: '120000',
        allScriptsTimeout: '150000',
        defaultTimeoutInterval: '200000'
    },
    baseUrl: '${params.url}',
    auth: {
        // set up authorization 
        'sapcloud-form': {
            user: testData.new_admin,
            pass: testData.new_admin_pass,
            userFieldSelector: 'input[name="j_username"]',
            passFieldSelector: 'input[name="j_password"]',
            logonButtonSelector: 'button[type="submit"]'
        }
    }
};