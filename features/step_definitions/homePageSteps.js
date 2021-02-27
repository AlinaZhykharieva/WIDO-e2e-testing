import HomePage from '../utils/pageobjects/home.page';
import dateGeneration from '../utils/helpers/date.generation';

const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given(/^I am on the home page$/, async () => {
  await browser.url('/');
});

Then(/^I choose for two adults tour (.*), (.*)$/, async (tourName, dateOFStart) => {
  await HomePage.clickToursTab();
  await HomePage.searchTour(tourName, dateGeneration(dateOFStart));
});