var AppButton = element(by.xpath('//div[@id="shellAppTitle"]'));

var AppTitle = element(by.xpath('//div[@id="shellAppTitle"]//h1[text()="Reason Code"]'));


module.exports = createPageObjects({
    Creation: {
        actions: {
            iClickOnAppTitle: function () {
                AppButton.click();
            },
        },
        assertions: {
            iShouldSeeAppTitle: function () {
                expect(AppTitle.isPresent()).toBeTruthy();
            },
        }
    }
});