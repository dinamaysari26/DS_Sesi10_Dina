const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

Given(/^Dina is on the login page$/, async () => {
    await LoginPage.open()
});

When(/^Dina login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username) 

});

Then(/^Dina should see home page$/, async () => {
    await HomePage.validateHomePage()
})


Then(/^Dina should see error locked message$/, async () => {
    await LoginPage.validateLockedError()
})

Then(/^Dina should see dogs image$/ ,async() => {
    await HomePage.validateDogImage()
})