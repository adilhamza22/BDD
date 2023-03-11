Feature: As a user, I must be able to change the Quranic Font Size.

  Scenario: Increasing the Quranic font size
  Given The user is on settings menu
   When The user clicks on + button on font size option
   Then Ensure that the Quranic font size of the website has been increased to the selected Quranic font size
   
   Scenario: Quranic font size is at Max value and user again presses the + button on font size option
  Given The user is on settings menu
   When The user clicks on + button on font size option
   And font size is at maximum value
   Then Ensure that the Quranic font size of the website stays same 
   
Scenario: Decreasing the Quranic font size
  Given The user is on settings menu
   When The user clicks on - button on font size option
   Then Ensure that the Quranic font size of the website has been decreased to the selected Quranic font size
   
   Scenario: Quranic font size is at Min value and user again presses the - button on font size option
  Given The user is on settings menu
   When The user clicks on - button on font size option
   And font size is at minimum value
   Then Ensure that the Quranic font size of the website stays same
