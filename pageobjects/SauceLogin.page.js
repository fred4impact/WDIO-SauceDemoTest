const { $ } = require('@wdio/globals')
const Page = require('./page');

class SauceLogin {


  get usernameInput(){
  	return $('#user-name')
  }



  get passwordInput()
  	{ return $('#password')
  }



  get loginButton(){
  	return $('btn_action')
  }


  
async login(username, passsword){
	await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password)
    await this.loginButton.click();

}

}
module.exports = new SauceLoginPage();