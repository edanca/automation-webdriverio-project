import Base from '../basis/base.page'

class Login extends Base {
  get signInBtn() { return this.findElement('span a[data-role="sign-link"]') }
  get loginFormAccount() { return this.findElement('#fm-login-id') }
  get loginFormPass() { return this.findElement('#fm-login-password') }
  get loginFormBtn() { return this.findElement('button=Sign In') }

  get iframeLogin() { return this.findElement(`#alibaba-login-box`) }
  get iframeLoginId() { return `#alibaba-login-box`}
  
  

  login() {
    this.signInBtn.click()

    browser.switchToFrame(this.iframeLogin)
    
    this.loginFormAccount.setValue('texopir665@hiwave.org')
    this.loginFormPass.setValue('123456')
    this.loginFormBtn.click()

    browser.switchToParentFrame()
    
    return this
  }
}

export default new Login