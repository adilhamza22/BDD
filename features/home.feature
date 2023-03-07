# Gherkin feature file:

Feature: Customize Home Page

Scenario: Changing Home Page Language
  Given The user is on the home page
   When The user presses language button
   Then The system should display the drop down menu of all available languages
   #When the user selects the language
   #Then the system should now display in that languag