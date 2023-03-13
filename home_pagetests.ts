import { assert } from "console";

Feature('home_page');

Scenario('test something',  ({ I }) => {

Given('The user is on the home page', () => {
    I.amOnPage('/')
  });
  
  When('The user presses language button',()=>{
    I.click('Languages')
    
  })
  Then('The system should display the drop down menu of all available languages',()=>{
    I.see('radix-12')
  })
  
});
