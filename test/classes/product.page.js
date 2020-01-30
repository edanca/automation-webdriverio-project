import Base from '../basis/base.page'

class Product extends Base {
  get productsAvailable() { return this.findElement('.product-quantity-tip') }
}

export default new Product()