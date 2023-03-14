Feature('Change_theme');

Scenario('Changing Theme & applying new theme', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.click('Light');
    I.wait(4)
});

Scenario('Changing Theme & applying currently applied theme', ({ I }) => {
    I.amOnPage('')
    I.click('Change Settings');
    I.wait(2)
    I.click('Light');
    I.wait(2)
    I.click('Light');
    I.wait(4)
});