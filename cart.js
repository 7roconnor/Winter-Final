class Cart{
  //What is the first part of every class? Type it below.
  constructor(iL, iQ)
  {
    this.itemList = iL; //Array
    this.itemQuantity = iQ; //Array
  }


  //Type the instance functions below this comment.
  addItem(i, q)
  {
    this.itemList.unshift(i); //String
    this.itemQuantity.unshift(q); //Integer
  }

  totalCart()
  {
    let total = 0;
    for (i = 0; i < this.itemlist.length; i++)
    {
      total += this.itemList[1].price * this.itemQuantity[i];
    }
  }

  subCart(days)
  {
    let subCart = new Cart([], []);
    for (i = 0; i < this.itemList.length; i++)
    {
      subCart.itemList.unshift(this.itemList[i].shipping);
    }
    return subCart;
  }

}
