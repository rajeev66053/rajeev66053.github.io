var textArea,startButton,stopButton,animationSelect,sizeSelect,speedCheck,interval; 
var delayTime=250;
function initialize(){
    textArea=document.getElementById("myTextArea");
    startButton=document.getElementById("start");
    stopButton=document.getElementById("stop");
    animationSelect=document.getElementById("animation");
    sizeSelect=document.getElementById("size");
    speedCheck=document.getElementById("speed");
}
window.onload=function(){   
    "use strict";
    initialize();
    stopButton.disabled=true;
    
    startButton.onclick=function(){        
                            startButton.disabled=true;
                            stopButton.disabled=false;
                            animationSelect.disabled = true;
                            let index=0;
                            let arrayData=ANIMATIONS[animationSelect.value].split("=====\n");
                            var displayFunction=function(){
                                textArea.value=arrayData[index];
                                index=(index+1)%arrayData.length;
                                interval=setTimeout(displayFunction,delayTime);
                            };
                            setTimeout(displayFunction,delayTime);                            
                        };
                        
    stopButton.onclick=function (){
                            startButton.disabled=false;
                            stopButton.disabled=true;
                            animationSelect.disabled = false;
                            clearTimeout(interval);
                        };
    
    animationSelect.onchange=function(){
                                textArea.value=ANIMATIONS[animationSelect.value];
                            };
    
    sizeSelect.onchange=function(){
                            textArea.style.fontSize=sizeSelect.value;
                        };
        
    speedCheck.onchange=function(){
                            delayTime=(speedCheck.checked==true)? 50: 250;
                        };
};