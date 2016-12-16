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
    let isDashCorrect = false;
    let areNumbersCorrect = false;

    //are the dashes correct?
    if(this.privateKey[4] == '-' && this.privateKey[9] == '-')
    {
      isDashCorrect = true;
    }
    else
    {
        console.log('Error: PrivateKey dashes are not correct');
        isDashCorrect == false;
    }

    //loops through privateKey and checks if they are numbers
    for (let i = 0; i < this.privateKey.length; i++)
    {
      //makes sure it doesn't mark dashes as wrong
      if (i != 5 && i != 9)
      {
          if (Number.isNaN(this.privateKey) == true)
          {
              console.log("Error: not privateKey not all Numbers");
              areNumbersCorrect = false;
          }
          else
          {
              areNumbersCorrect = true;
          }
      }
    }

    if (areNumbersCorrect && isDashCorrect)
    {
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
