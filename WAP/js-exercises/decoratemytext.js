window.onload = function() {
    var myButton =document.getElementById("myButton");
    myButton.onclick=enableTimer;
    // myButton.onclick=setInterval(changeTextAreaFont,500);
    var myCheckbox=document.getElementById("myCheckbox");
    myCheckbox.onchange=myPopUp;

    var pigLatin=document.getElementById("igpay-atinlay");
    pigLatin.onclick=changeTextToPigLatin;

    var malkovitch=document.getElementById("malkovitch");
    malkovitch.onclick=replaceTextByWordLength;
}

function enableTimer(){
    setInterval(changeTextAreaFont,500);
}

function changeTextAreaFont(){
    // alert("Hello, world!");
    var myTextArea=document.getElementById("myTextarea");

    var computedFontSize = window.getComputedStyle(myTextArea).fontSize;
    var fontSizeInPt=parseFloat(computedFontSize)*0.75;
    fontSizeInPt=fontSizeInPt+2;
    myTextArea.style.fontSize=fontSizeInPt+"pt";
}

function myPopUp(){
    //alert("Popup");
    var myTextArea=document.getElementById("myTextarea");
    if (myCheckbox.checked == true){
        myTextArea.style.fontWeight="bold";
        myTextArea.style.color="green";
        myTextArea.style.textDecoration="underline";
        document.body.style.backgroundImage = "url('../../images/hundred-dollar-bill.jpg')";
    }else{
        myTextArea.style.removeProperty('font-weight');
        myTextArea.style.removeProperty('color');
        myTextArea.style.removeProperty('text-decoration');
        document.body.style.removeProperty('background-image');
    }
    
}

function changeTextToPigLatin(){
    var myTextArea=document.getElementById("myTextarea");
    var textAreaValue=myTextArea.value;
    var pigLatinText=pigLatin(textAreaValue);
    myTextArea.value=pigLatinText;

}

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "ay";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }

  function replaceTextByWordLength(){
    var myTextArea=document.getElementById("myTextarea");
    var textAreaValue=myTextArea.value;
    var textAreaValueArray=textAreaValue.split(' ');

    var newarray = textAreaValueArray.map(replaceTextFunction);
    myTextArea.value=newarray.join(' ')


  }

  function replaceTextFunction(str){

    if(str.length>5){
        return "Malkovitch";
    }else{
        return str;
    }

  }