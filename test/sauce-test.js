const SauceLoginPage = require('./pageobjects/SauceLogin.page');

describe('Saucedemo Login Test', () => {
    before(async () => {
        await browser.url('/'); // Move browser commands inside the 'before' hook
    });

    it('should login to the Saucedemo website', () => {
        // Perform the login action
        SauceLoginPage.login('standard_user', 'secret_sauce');

        // Check if the user is successfully logged in
        const inventoryContainer = $('.inventory_container');
        assert.isTrue(inventoryContainer.isDisplayed(), 'Inventory container is displayed');
        
        // You can add more assertions or navigation here as needed
    });
});
