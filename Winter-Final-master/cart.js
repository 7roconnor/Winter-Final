class Cart{
  //What is the first part of every class? Type it below.
  ///assigns variables
  constructor(iL, iQ)
  {
    this.itemList = iL; //Array
    this.itemQuantity = iQ; //Array
  }


  //Type the instance functions below this comment.
  //updates itemList and itemQuantity with the item
  addItem(i, q)
  {
    this.itemList.unshift(i); //String
    this.itemQuantity.unshift(q); //Integer
  }

  //returns the total price of items multiplied by their quantity
  totalCart()
  {
    let total = 0;
    for (let i = 0; i < this.itemlist.length; i++)
    {
      total += this.itemList[1].price * this.itemQuantity[i];
    }
    return total;
  }

  //searches for all items within item list whose
  //shippingTime matches days
  subCart(days)
  {
    let subCart = new Cart([], []);
    for (let i = 0; i < this.itemList.length; i++)
    {
      if (this.itemList[i].shipping == days)
      {
        subCart.addItem(this.itemList[i]);
      }
    }
    return subCart();
  }

}
