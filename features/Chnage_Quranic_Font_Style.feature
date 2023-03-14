Feature: As a user, I must be able to change the Quranic Font Style.

   Scenario: Changing the Quranic font style & selecting a new Quranic font style.
  Given The user is on settings menu
  When The user selects a Quranic font style 
   And The selected Quranic font style is not currently applied
   Then Ensure that the Quranic font style of the website has been changed to the selected Quranic font style
   
   Scenario: Changing the Quranic font style & selecting the currently applied Quranic font style
  Given The user is on settings menu
    When The user selects a Quranic font style 
   And The selected Quranic font style is currently applied
   Then Ensure that the Quranic font style of the website remains same
