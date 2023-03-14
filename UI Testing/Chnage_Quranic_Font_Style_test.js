Feature('Chnage_Quranic_Font_Style');

Scenario('Changing the Quranic font & selecting a new Quranic font', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.selectOption('quranFontStyles', 'King Fahad Complex V2')
    I.wait(4)
});

Scenario('Changing the Quranic font & selecting the currently applied Quranic font', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.selectOption('quranFontStyles', 'King Fahad Complex V2')
    I.wait(2)
    I.selectOption('quranFontStyles', 'King Fahad Complex V2')
    I.wait(4)
});