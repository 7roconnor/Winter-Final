class Password{
  //The first part of the class.
  //assigns variables
  constructor(pubKey, priKey)
  {
    this.PublicKey = pubKey; //String
    this.PrivateKey = priKey; //String of numbers "xxxx-xxxx-xxxx"
  }


  //Instance functions below this comment.
  validPublicKey()
  {
    //is the string the correct length?
    if(this.publicKey.length >= 8 && this.publicKey.length =< 25)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  validPrivateKey()
  {
    if (this.PrivateKey[4] != '-' || this.privateKey[9] != '-')
    {
      return false;
    }
    else
    {
      for (let i = 0; i < this.PrivateKey.length; i++)
      {
        if(i == 4 || i == 9)
        {
          i++
        }
        if (Number.isNaN(this.privateKey[i]) == true)
        {
          return false;
        }

      }
      return true; 
    }


  }


  //Static function below this comment.
  static makePrivateKey()
  {
    let key = '';
    let limit = 14;
    for (let i = 0; i < limit; i++)
    {
      if (i != 4 && i != 9)
      {
        key  += Math.floor(Math.random() * 10);
      }
      else if (i == 4 || i == 9)
      {
        key += '-';
      }
    }
  }

}
