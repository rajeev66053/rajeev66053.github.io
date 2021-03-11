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

var textArea, accountNameInput, depositInput, createNewAccountBtn;
var accountInfoList = [];

var createAccount = (accountName, deposit) => {
    return {
        'accountName': accountName,
        'deposit': deposit,
        'toString': () => {
            return `Account name: ${accountName}  Balance: ${deposit}`;
        }
    }
};

var createNewAccountBtnHandler = () => {
    let newAccount = createAccount(
        accountNameInput.value,
        depositInput.value
    );

    textArea.value = textArea.value + 
                        (accountInfoList.length === 0 ? "": "\n") +
                        newAccount.toString();

    accountInfoList.push(newAccount);
    console.log("Account Info List:", accountInfoList);
};

window.onload = () => {

    accountNameInput = document.getElementById("accountName");
    depositInput = document.getElementById("deposit");
    textArea = document.getElementById("textArea");
    createNewAccountBtn = document.getElementById("createNewAccountBtn");

    createNewAccountBtn.onclick = createNewAccountBtnHandler;
};