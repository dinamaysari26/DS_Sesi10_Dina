const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get dogImage()
    {
        const foto_anjing = $('img.inventory_item_img');
        return foto_anjing;
    }

    async validateHomePage()
    {
        expect(browser).toHaveUrlContaining('/inventory.html');
    }

    async validateDogImage() 
    {
        // var gambar = await this.dogImage.getAttribute('src');
        await expect(this.dogImage).toHaveAttr('src','/static/media/sl-404.168b1cce.jpg');
    }

    open ()
    {
        return super.open('/inventory.html');
    }

}

module.exports = new HomePage();
