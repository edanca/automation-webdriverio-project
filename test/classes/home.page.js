import Base from '../basis/base.page'
import Login from './login'

class Home extends Base {
  open() {
    super.open('/')
    this.closeModalIfExists()
    return this
  }

  get searchInput() { return this.findElement('[name=SearchText]') }
  get searchBtn() { return this.findElement('.search-button') }
  get accountIcon() { return this.findElement('.fast-entry ul li a') }

  scrollDown() {
    this.closeModalIfExists()
    browser.keys(['End'])
    // browser.keys(['PageUp'])
    return this
  }

  login() {
    Login.login()
    browser.pause(1000)
    return this
  }

  searchProduct(text) {
    this.searchInput.waitForEnabled()
    this.searchInput.setValue(text)

    this.searchBtn.waitForClickable()
    this.searchBtn.click()
  }
}

export default new Home()