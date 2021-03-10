window.onload=function(){   
    "use strict";
    var textArea=document.getElementById("myTextArea");

    var startButton=document.getElementById("start");
    startButton.onclick=startOnClick;

    var stopButton=document.getElementById("stop");
    stopButton.disabled=true;
    stopButton.onclick=stopOnClick;
    
    var animationSelect=document.getElementById("animation");
    animationSelect.onchange=function(){
        textArea.value=ANIMATIONS[animationSelect.value];
    };
    
    var sizeSelect=document.getElementById("size");
    changeFontSize(); //default;
    sizeSelect.onchange=changeFontSize;
    
    function changeFontSize(){
        var sizeSelectedValue=sizeSelect.value;
        switch(sizeSelectedValue){
            case "tiny":
                textArea.style.fontSize="7pt";
                break;
            case "small":
                textArea.style.fontSize="10pt";
                break;
            case "medium":
                textArea.style.fontSize="12pt";
                break;
            case "large":
                textArea.style.fontSize="16pt";
                break;
            case "extra_large":
                textArea.style.fontSize="24pt";
                break;
            case "xxl":
                textArea.style.fontSize="32pt";
                break;
            default:
                textArea.style.fontSize="7pt";
        }
    }
    
    var delayTime=250;    
    var interval;  
    var speedCheck=document.getElementById("speed");
    speedCheck.onchange=function(){
        delayTime=checkSpeed();
        animation(delayTime,false);
    };

    function checkSpeed(){
        return (speedCheck.checked==true)? 50: 250;
    }

    function startOnClick(){
        
        startButton.disabled=true;
        stopButton.disabled=false;
        delayTime=checkSpeed();
        animation(delayTime,false);
    }

    function stopOnClick(){
        startButton.disabled=false;
        stopButton.disabled=true;
        delayTime=checkSpeed();
        animation(delayTime,true);
    }

    function getAnimationArray(animationType){
        var data=ANIMATIONS[animationType];
        var arrayData=data.split("=====\n");
        return arrayData;
    }

    function animation(delayTime,stopAnimation){     
        /*jshint sub:true*/
        var animationSelectedvalue=animationSelect.value;        
        clearInterval(interval);
        var index=0;
        var arrayData;
        if(stopAnimation){
            clearInterval(interval);
        }else{
            switch(animationSelectedvalue){
                case "blank":
                    textArea.value=ANIMATIONS["Blank"];
                    break;
                case "exercise":   
                    arrayData=getAnimationArray("Exercise");
                    interval=setInterval(function(){
                            textArea.value=arrayData[index];
                            index++;
                            if(index>=arrayData.length){
                                index=0;
                            }    
                        },delayTime);
                    break;
                case "juggler":  
                    arrayData=getAnimationArray("Juggler");
                    interval=setInterval(function(){
                            textArea.value=arrayData[index];
                            index++;
                            if(index>=arrayData.length){
                                index=0;
                            }    
                        },delayTime);
                    break;
                case "bike":   
                    arrayData=getAnimationArray("Bike");
                    interval=setInterval(function(){
                            textArea.value=arrayData[index];
                            index++;
                            if(index>=arrayData.length){
                                index=0;
                            }    
                        },delayTime);
                    break;
                case "dive":  
                    arrayData=getAnimationArray("Dive");
                    interval=setInterval(function(){
                            textArea.value=arrayData[index];
                            index++;
                            if(index>=arrayData.length){
                                index=0;
                            }    
                        },delayTime);
                    break;
                case "custom":   
                    arrayData=getAnimationArray("Custom");
                    interval=setInterval(function(){
                            textArea.value=arrayData[index];
                            index++;
                            if(index>=arrayData.length){
                                index=0;
                            }    
                        },delayTime);
                    break;
                default:
                    textArea.value=ANIMATIONS["Blank"];    
            }
        }
    }
};