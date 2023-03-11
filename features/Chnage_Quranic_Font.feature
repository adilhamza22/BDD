Feature: As a user, I must be able to change the Quranic Font.

  Scenario: Changing the Quranic font & selecting a new Quranic font
  Given The user is on settings menu
   When The user selects a Quranic font 
   And The selected Quranic font is not currently applied
   Then Ensure that the Quranic font of the website has been changed to the selected Quranic font
   
   Scenario: Changing the Quranic font & selecting the currently applied Quranic font
  Given The user is on settings menu
  When The user selects a Quranic font 
   And The selected Quranic font is currently applied
   Then Ensure that the Quranic font of the website remains same
