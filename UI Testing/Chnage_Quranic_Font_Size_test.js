Feature('Chnage_Quranic_Font_Size');

Scenario('Increasing the Quranic font size', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.click('Increase')
    I.wait(4)
});

Scenario('Decreasing the Quranic font size', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.click('Decrease')
    I.wait(4)
});