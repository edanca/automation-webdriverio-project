import Home from '../classes/home.page'
import Product from '../classes/product.page'
import ProductList from '../classes/productList.page'

describe(`Search product on page`, () => {
  beforeEach(() => {
    Home.open()
    Home.login()
  })

  it(`should search product from home page`, () => {
    Home.searchProduct('iphone')

    Home.scrollDown()

    ProductList.goToPage(2)
    ProductList.clickOnProduct(2)

    browser.switchTab('2')

    const productsAvailablePhrase = Product.productsAvailable.getText()
    const productAvailable = parseInt(productsAvailablePhrase.split(' ')[0])

    expect(productAvailable).to.be.above(0)
  })
})