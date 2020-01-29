import BaseELement from '../basis/baseElement'

class Base {
  open(route) {
    browser.url(route)
  }

  get modalCloseMainPage() { return $('[data-role="layer-close"]') }
  get modalCloseResultsPage() { return $('.next-dialog-close') }

  findElement(selector) {
    this.closeModalIfExists()
    return BaseELement.findElement(selector)
  }

  findElements(selector) {
    this.closeModalIfExists()
    return BaseELement.findElements(selector)
  }

  closeModalIfExists() {
    try {
      this.modalCloseMainPage.waitForDisplayed(100)
      this.modalCloseMainPage.click()
    } catch (error) {
      //
    }
    try {
      this.modalCloseResultsPage.waitForDisplayed(100)
      this.modalCloseResultsPage.click()
    } catch (error) {
      //
    }
  }
}

export default Base