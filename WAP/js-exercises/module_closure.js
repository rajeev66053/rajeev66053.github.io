var rudyTimer=(function(){
                        var timer = null;
                        function delayMsg2() {
                            if (timer === null) {
                                timer = setInterval(rudy, 1000);
                            } else {
                                clearInterval(timer);
                                timer = null;
                            }
                        }
                        return delayMsg2;
                })();
function rudy() { // called each time the timer goes off
    document.getElementById("output").innerHTML += "Rudy!";
}

var textArea, accountName, deposit, createNewAccount;
var accountInfo = [];

window.onload = function(){

    accountName = document.getElementById("accountName");
    deposit = document.getElementById("deposit");
    textArea = document.getElementById("textArea");
    createNewAccount = document.getElementById("createNewAccount");

    createNewAccount.onclick = newAccount;
};

var newAccount = function(){
    if(accountName.value && deposit.value){
        let newAccountObj = createAccount(
            accountName.value,
            deposit.value
        );
        textArea.value = textArea.value + (accountInfo.length === 0 ? "": "\n") + newAccountObj.toString();    
        accountInfo.push(newAccountObj);
        accountName.value="";
        deposit.value="";
    }  
};

var createAccount = function(accountName, deposit){
    return {
        'accountName': accountName,
        'deposit': deposit,
        'toString': function(){
            return `Account name: ${accountName}  Balance: ${deposit}`;
        }
    }
};