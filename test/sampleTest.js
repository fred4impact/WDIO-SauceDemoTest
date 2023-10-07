//const logger = require('./logger.js'); // logger usage

describe('feature to tes:t', () => {
    it('Smoke Test', async ()=> {
        
        // open browser
        await browser.url('/');
        //logger.info('Open Browser logger');
        // find elements  elements vairable 
        const userName = $('#user-name');
        const passWord = $('.password')
        const buttonClick = $('#button');
        const allLinks = $$('//a');

        for (let index = 0; index < allLinks.length; index++) {
            const element = allLinks[index];
            console.log(element)
        }

        // perform actions
        
      
        // asssertions
        // close app
   
    });
});