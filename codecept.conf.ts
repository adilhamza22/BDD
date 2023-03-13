import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './step_definitions/steps.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.quran.com',
      show: true,
      windowSize: '1200x900'
    }
  },
 
  include: {
    I: './step_definitions/steps.js'
  },
  name: 'BDD'

}
const puppeteer = require('puppeteer');

