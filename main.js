let account = {
    accountName: "John Doe",
    balance: 1000,
  
    getBalance: function() {
      console.log("Balance: $" + this.balance);
    },
  
    deposit: function(amount) {
      this.balance = this.balance + amount;
      console.log("Deposited: $" + amount);
    },
  
    withdrawal: function(amount) {
      if (amount <= this.balance) {
        this.balance = this.balance - amount;
        console.log("Withdrawn: $" + amount);
      } else {
        this.accountError("Insufficient funds");
      }
    },
  
    getAccountName: function() {
      console.log("Account Name: " + this.accountName);
    },
  
    accountError: function(message) {
      console.log("Error: " + message);
    },
  
    exitAccount: function() {
      console.log("Exiting account. Goodbye!");
    }
  };
  
  