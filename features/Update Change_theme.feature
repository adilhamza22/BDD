Feature: As a user, I must be able to change theme of the website.

  Scenario: Changing the theme & selecting a new theme
  Given The user is on settings menu
   When The user clicks on a theme
   And The selected theme is other than currently applied theme
   Then Ensure that the theme of the website has been changed to the selected theme
  
  Scenario: Changing the theme & selecting the currently applied theme
  Given The user is on settings menu
  When The user clicks on a theme
   And The selected theme is currently applied theme
   Then Ensure that the theme of the website remains same
