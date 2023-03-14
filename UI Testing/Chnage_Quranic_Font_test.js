Feature('Chnage_Quranic_Font');

Scenario('Changing the Quranic font style & selecting a new Quranic font style', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.click('IndoPak');
    I.wait(4)
});

Scenario('Changing the Quranic font style & selecting the currently applied Quranic font style', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.click('IndoPak');
    I.wait(2)
    I.click('IndoPak');
    I.wait(2)
});