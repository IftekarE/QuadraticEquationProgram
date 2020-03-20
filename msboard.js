//the variables must always be declared and set t to 0
var meshold0 = 0;//this is a variable for showing messagese in the webpage
var meshold1 = 0;//this is a variable for showing messagese in the webpage
var meshold2 = 0;//this is a variable for showing messagese in the webpage
var meshold3 = 0;//this is a variable for showing messagese in the webpage
var meshold4 = 0;//this is a variable for showing messagese in the webpage
var meshold5 = 0;//this is a variable for showing messagese in the webpage
var meshold6 = 0;//this is a variable for showing messagese in the webpage
var idhold0 = 0;//this is a variable for showing messagese in the webpage
var idhold1 = 0;//this is a variable for showing messagese in the webpage
var idhold2 = 0;//this is a variable for showing messagese in the webpage
var idhold3 = 0;//this is a variable for showing messagese in the webpage
var idhold4 = 0;//this is a variable for showing messagese in the webpage
var idhold5 = 0;//this is a variable for showing messagese in the webpage
var idhold6 = 0;//this is a variable for showing messagese in the webpage
//

//User message function START 
function notifications(){
    idhold0 = document.getElementById("can0");
    idhold0.innerHTML = meshold0;
}
function notification0(){//this displayes when the user clicks the button 
    idhold0 = 0;
    meshold0 = "If you want to run the program again, enter new values and then click the button. The graph supports a maximum X range of -1000 - 1000, and a maximum Y range of -1000 - 1000"
    idhold0 = document.getElementById("can0");
    idhold0.innerHTML = meshold0;
}
function results(){//finding the message containers 
idhold1 = document.getElementById("can1");
idhold2 = document.getElementById("can2");
idhold3 = document.getElementById("can3");
idhold4 = document.getElementById("can4");
idhold5 = document.getElementById("can5");
idhold6 = document.getElementById("can6");
idhold1.innerHTML = meshold1;
idhold2.innerHTML = meshold2;
idhold3.innerHTML = meshold3;
idhold4.innerHTML = meshold4;
idhold5.innerHTML = meshold5;
idhold6.innerHTML = meshold6;
}
//User message function END 

//Message board reset START
function reset(){//ressetting all the messages
    meshold1 = 0;
    meshold2 = 0;
    meshold3 = 0;
    meshold4 = 0;
    meshold5 = 0;
    meshold6 = 0;
    idhold1 = 0;
    idhold2 = 0;
    idhold3 = 0;
    idhold4 = 0;
    idhold5 = 0;
    idhold6 = 0;
    results();//calling caller block 
}
//Message board reset END 