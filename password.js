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

    //loops through privateKey and checks if they are numbers
    for (let i = 0; i < this.privateKey.length; i++)
    {
      //makes sure it doesn't mark dashes as wrong
      if (this.privateKey[i] != 5 && this.privateKey[i] != 9)
      {

      }
    }
  }
  //Static function below this comment.
}
