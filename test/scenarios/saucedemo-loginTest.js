const assert = require('chai').assert;
const { expect } = require('@wdio/globals')
const SauceLogin = require('../pageobjects/SauceLogin.page')
const ProductPage = require('../pageobjects/ProductPage.page')



describe('Saucedemo Login Test', () => {
    it('should login to the Saucedemo website', () => {
        browser.url(browser.options.baseUrl); // Use the environment-specific baseUrl

        SauceLogin.login('standard_user', 'secret_sauce');

        const inventoryContainer = $('.inventory_container');
        assert.isTrue(inventoryContainer.isDisplayed(), 'Inventory container is displayed');
    });

    it('should add a product to the cart', () => {
        browser.url(browser.options.baseUrl); // Use the environment-specific baseUrl

        SauceLogin.login('standard_user', 'secret_sauce');
        ProductPage.addToCart();

        const cartBadge = ProductPage.cartBadge;
        assert.isTrue(cartBadge.isDisplayed(), 'Cart badge is displayed');
    });
});
