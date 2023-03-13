const { I } = inject();

Feature('home');

Scenario(' Changing Home Page Language',  ({ I }) => {

  Given('The user is on the home page', () => {
      I.amOnPage('https://www.quran.com')
      setTimeout(function(){
        console.log('waiting');
    }, 500)
    });
    
    When('The user presses language button',()=>{
      I.click('Languages')
      
    })
    Then('The system should display the drop down menu of all available languages',()=>{
      I.see('radix-12')
    })
    
  });
Feature('search');
Scenario(' Searching a specific Surah by name or number that exists',({I})=>{
  Given('The user is on the search bar', () => {
    I.amOnPage('/')
    search = I.locate('div').withText('What do you want to read?')
  
  });
  
  When('The user types surah name OR number',()=>{
    I.fillField('What do you want to read?','Al-Fatihah')
  
    
  })
  Then('The system should display the drop down menu of all available languages',()=>{
    I.seeElement('Surah Al-Fatihah')
  })
  
});
Feature('search');

Scenario('Searching a random text that is not the name of any surah/reciter/translator/anything',({I})=>{

Given('the user is on the search bar',()=>{
  I.amOnPage('/')
  search = I.locate('div').withText('What do you want to read?')  
})

When('The user types text',()=>{
  I.fillField('What do you want to read?','xyz')
})
Then('The system should not display anything with that name',()=>{
  I.dontSeeElement('Navigations')
})

});

Feature('surah');

Scenario('Changing the translation',({I})=>{
  Given('The User is on the surah page',()=>{
    I.amOnPage('/1')
  })
  When('the user presses Change button next to translators name',()=>{
    I.click('Change')
  
  })
  Then('The List of all translators should be displayed',()=>{
    I.see('Translations')
  })
  When('the user checks the translators name',()=>{
    
    I.checkOption('//*[@id="22"]') 
  })
  Then('The List of all translators should be displayed',()=>{
    I.see('English Translation (Yusuf Ali)')
  })
});


Feature('surah');
Scenario(' Playing surah audio',({I})=>{
  Given('The user is on a surah page',()=>{
    I.amOnPage('/1')
  })
  When('the user presses Play audio button',()=>{
    I.click('Play Audio')
  })
  Then('the system should start playing the audio verse by verse from start verse',()=>{
    I.locate('class').find('AudioPlayerSlider_remainingTime__X1p9_')
  })
});




