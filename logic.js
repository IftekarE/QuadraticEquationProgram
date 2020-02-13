//Variables initlazing START
var hold1 = 0;
var hold2 = 0;
var hold3 = 0;
var hold4 = 0;
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;
var a = 0;
var b = 0;
var c = 0;
var vertex = 0;
var AOS = 0;
var num_of_roots = 0;
var type_of_root = 0;
var root1 = 0;
var root2 = 0;
var x = 0;
var y = 0;


//Variables initlazing END 

//Clearing variables START
function clear(){//this function is setting all variables to 0 
    hold1 = 0;
    hold2 = 0;
    hold3 = 0;
    hold4 = 0;
    temp1 = 0;
    temp2 = 0;
    temp3 = 0;
    a = 0;
    b = 0;
    c = 0;
    vertex = 0;
    AOS = 0;
    num_of_roots = 0;
    type_of_root = 0;
    root1 = 0;
    root2 = 0; 
    x = 0;
    y = 0;
    
    meshold0 = 0;
    meshold1 = 0;
    meshold2 = 0;
    meshold3 = 0;
    meshold4 = 0;
    meshold5 = 0;
    meshold6 = 0;
    idhold0 = 0;
    idhold1 = 0;
    idhold2 = 0;
    idhold3 = 0;
    idhold4 = 0;
    idhold5 = 0;
    idhold6 = 0;
}
//Clearing variables END

//Checking for input START
function Acheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){//checking if the input is blank  
        meshold0 = "The A input cannot be blank";
        notifications();
    }else{
        if(temp1 == 0){//checking if the A input is blank
            meshold0 = "The A input cannot be 0";
            notifications();
        }else{
            var letters = /^[A-Za-z]+$/;//chicking to see if the input is a letter 
            if(inputtxt.value.match(letters)){
                meshold0 = "The input can only be a negative or positive integer";
                alert("error");
                notifications();
            }else{
                if(temp1 % 2 == 0){//modding input by 2 to see if the input is a whole number
                    a = temp1;
                }else{
                    if(temp1 % 2 == 1){//modding input by 2 to see if the input is a whole number
                        a = temp1;
                    }else{
                        meshold0 = "The input can only be a whole number";
                        notifications();//calling caller block 
                    }
                }
            }
        }
    }
}
function Bcheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){//checking if the input is blank  
        meshold0 = "The B input cannot be blank";
        notifications();
    }else{
        if(temp1 == 0){//checking if the B input is blank
            b = temp1;
            meshold0 = ("b is " + b);
            notifications();
        }else{
            var letters = /^[A-Za-z]+$/;//chicking to see if the input is a letter 
            if(inputtxt.value.match(letters)){
                meshold0 = "The input can only be a negative or positive integer";
                notifications();
            }else{
                if(temp1 % 2 == 0){//modding input by 2 to see if the input is a whole number
                    b = temp1;
                }else{
                    if(temp1 % 2 == 1){//modding input by 2 to see if the input is a whole number
                        b = temp1;
                    }else{
                        meshold0 = "The input can only be a whole number";
                        notifications();//calling caller block 
                    }
                }
            }
        }
    }
}
function Ccheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){//checking if the input is blank  
        meshold0 = "The C input cannot be blank";
        notifications();
    }else{
        if(temp1 == 0){//checking if the C input is blank
            c = temp1;
            meshold0 = "c is " + c;
            notifications();
        }else{
            var letters = /^[A-Za-z]+$/;//chicking to see if the input is a letter 
            if(inputtxt.value.match(letters)){
                meshold0 = "The input can only be a negative or positive integer";
                notifications();
            }else{
                if(temp1 % 2 == 0){//modding input by 2 to see if the input is a whole number
                    c = temp1;
                    veraos();
                }else{
                    if(temp1 % 2 == 1){//modding input by 2 to see if the input is a whole number
                        c = temp1;
                        veraos();
                    }else{
                        meshold0 = "The input can only be a whole number";
                        notifications();//calling caller block 
                    }
                }
            }
        }
    }
}
//Checking for input END

//setting the resutlts to the message board START 
function setto(){//this code segment sets the message to the message boards 
    meshold1 = vertex;
    meshold2 = AOS;
    meshold3 = num_of_roots;
    meshold4 = type_of_root;
    meshold5 = root1;
    meshold6 = root2;
    results();
}
//setting the resutlts to the message board END 

//vertex and AOS flowchart START
function veraos(){//this program is finding the vertex 
    hold1 = b * -1;//multipling b by -1 
    hold2 = a * 2;// multiplying a by 2 
    x = hold1 / hold2;//this formula represents b * -1 / 2a
    AOS = x;// the x value of the vertex is the AOS 
    temp1 = x * x;//x is multiplying by x to represent x^2
    temp1 = a * temp1;//x * temp1 representing ax^2
    temp2 = b * x;//representing b*x
    y = temp1 + temp2 + c;//this represents my formula y = ax^2 + bx + c
    vertex = "(" + x + "," + y + ")";//setting up the vertex 
    meshold1 = vertex;//setting vertex
    meshold2 = AOS; //setting aos 
    results();//calling mssage board 
}
//vertex and AOS flowchart END 