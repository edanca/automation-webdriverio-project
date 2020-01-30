import Base from '../basis/base.page'

class ProductList extends Base {

  get productListItems() { return this.findElements('.product-img') }

  goToPage(pageNumber) {
    const btnElem = this.findElement(`[aria-label="Page ${pageNumber}, 7 pages"]`)
    btnElem.waitForClickable()
    btnElem.click()
  }

  clickOnProduct(productNumber) {
    const productList = this.findElements(`.product-img`)
    const product = productList[productNumber - 1]
    product.waitForClickable()
    product.click()
  }
}

export default new ProductList()