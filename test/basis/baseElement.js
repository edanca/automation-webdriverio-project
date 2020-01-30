class BaseElement {
  findElement(selector) {
    if (this.checkExistance(selector)) {
      return $(selector)
    } else {
      $(selector).waitForExist(10)
    }
  }

  findElements(selector) {
    if (this.checkExistance(selector)) {
      return $$(selector)
    } else {
      $$(selector).waitForExist(10)
    }
  }

  checkExistance(selector) {
    return $(selector).waitForExist()
  }
}

export default new BaseElement()