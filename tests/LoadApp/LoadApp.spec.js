const { testData } = require('../../../testdata.js')

/**
 * pages represented through controls or xpaths
 */
require('../../../page_object/AppPage.js')

/**
 * defined configurations for this specific testcase
 */
const { configData } = require('./config.js')

/**
 * variables
 */
// var campaign_name;

describe('load_app_test', function() {
    it("Open App", function() {
        /**
         * usual steps as before
         */
        When.onAppPage.iClickOnAppTitle();
        browser.sleep(1000);
        Then.onAppPage.iShouldSeeAppTitle();
    });
});