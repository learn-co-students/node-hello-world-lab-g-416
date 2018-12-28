var users = function(){
    console.log('users')
  }
  var accounts = function(){
    console.log('accounts')
    users()
  }
  accounts()