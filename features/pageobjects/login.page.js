const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get errorText()
    {
        return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username) {
        await this.inputUsername.waitForDisplayed({timeout: 2500});
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnSubmit.click();
    }

    async validateLockedError()
    {
        await this.errorText.waitForDisplayed({timeout: 2500});
        await expect(this.errorText).toBeDisplayed;
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
