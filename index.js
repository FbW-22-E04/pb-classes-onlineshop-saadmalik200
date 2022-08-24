class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toText() {
    console.log(
      `${this.name} ${this.price} € in total. ${(this.price * 0.16).toFixed(
        2
      )} € VAT incl. (16%).`
    );
  }

  containedVAT() {
    console.log(`${(this.price * 0.16).toFixed(2)} € VAT incl.`);
  }
}

const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);

tracksuit.toText(); // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).

tracksuit.containedVAT(); // - returning 16% of the products price as VAT (value-added tax)
shoes.toText();
shoes.containedVAT();
socks.toText();
socks.containedVAT();

console.log(`-------------------------------------`);
// Q2

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(shoppedProduct) {
    // console.log(shoppedProduct);
    if (shoppedProduct instanceof Product) {
      //   console.log(`Yes it is`);
      this.products.push(shoppedProduct);
      console.log(`Amount of products in cart: ${this.products.length}`);
    } else {
      console.log(`The product is not available in the shop`);
    }
  }

  getProductInfoCart() {
    this.products.forEach((item) => {
      return item.toText();
    });
  }

  getTotalItemsPrice() {
    const totalPrice = this.products
      .reduce((acc, item) => (acc += item.price), 0)
      .toFixed(2);
    console.log(`Total price is: ${totalPrice}`);
  }
}

const shopped = new Cart();
// console.log(shopped);
// shopped.addProduct(shoes);

// shopped.addProduct(socks);

shopped.addProduct(123);
// shopped.addProduct(hair);
// console.log("socccks");

shopped.getProductInfoCart();

shopped.getTotalItemsPrice();

console.log(`---------------------------------------`);
// Q3

const cart = new Cart();

cart.addProduct("potato"); // This is not available in our shop!
cart.addProduct(tracksuit); // Your shopping cart now contains 1

cart.addProduct(shoes); // Your shopping cart now contains 2 products
cart.addProduct(socks); // Your shopping cart now contains 3 products

cart.getProductInfoCart();
cart.getTotalItemsPrice();
