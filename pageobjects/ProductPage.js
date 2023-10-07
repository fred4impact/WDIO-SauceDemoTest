const { $ } = require('@wdio/globals')
const Page = require('./page');


class ProductPage extends page{

    get addToCartButton() {
        return $('.btn_inventory')
    }


    get cartBadge() {
        return $('.shopping_cart_badge')
    }


    async addToCart() {
       await this.addToCartButton.click()
    }
}

module.exports = new ProductPage();
