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
var c = 0;
var ctx = 0;
var scaled = 0;
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
    temp4 = 0;
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
    c = 0;
    ctx = 0; 
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
    scaled = 0;
}
//Clearing variables END

//Checking for input START
function Acheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){//checking if the input is blank  
        meshold0 = "The A input cannot be blank";
        notifications();//calling caller block 
        reset();//calling caller block 
    }else{
        if(temp1 == 0){//checking if the A input is blank
            meshold0 = "The A input cannot be 0";
            notifications();//calling caller block 
            reset();//calling caller block 
        }else{
            var letters = /^[A-Za-z]+$/;//chicking to see if the input is a letter 
            if(inputtxt.value.match(letters)){
                meshold0 = "The A input can only be a negative or positive integer";
                notifications();//calling caller block 
                reset();//calling caller block 
            }else{
                if(temp1 % 2 == 0){//modding input by 2 to see if the input is a whole number
                    a = temp1;
                    Bcheck(document.form2.text2);//calling caller block 
                }else{
                    if(temp1 % 2 == 1){//modding input by 2 to see if the input is a whole number
                        a = temp1;
                        Bcheck(document.form2.text2);//calling caller block 
                    }else{
                        if(temp1 % 2 == -1){
                            a = temp1;
                            Bcheck(document.form2.text2);//calling caller block 
                        }else{
                        meshold0 = "The A input can only be a whole number";
                        notifications();//calling caller block 
                        reset();//calling caller block 
                        }
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
        notifications();//calling caller block 
        reset();//calling caller block 
    }else{
        if(temp1 == 0){//checking if the B input is blank
            b = temp1;
            meshold0 = ("The B input is " + b);
            notifications();//calling caller block 
            reset();//calling caller block 
        }else{
            var letters = /^[A-Za-z]+$/;//chicking to see if the input is a letter 
            if(inputtxt.value.match(letters)){
                meshold0 = "The B input can only be a negative or positive integer";
                notifications();//calling caller block 
                reset();//calling caller block 
            }else{
                if(temp1 % 2 == 0){//modding input by 2 to see if the input is a whole number
                    b = temp1;
                    Ccheck(document.form3.text3);//calling caller block 
                }else{
                    if(temp1 % 2 == 1){//modding input by 2 to see if the input is a whole number
                        b = temp1;
                        Ccheck(document.form3.text3);//calling caller block 
                    }else{
                        if(temp1 % 2 == -1){
                            b = temp1;
                            Ccheck(document.form3.text3);//calling caller block 
                        }else{
                        meshold0 = "The B input can only be a whole number";
                        notifications();//calling caller block 
                        reset();//calling caller block 
                        }
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
        notifications();//calling caller block 
        reset();//calling caller block 
    }else{
        if(temp1 == 0){//checking if the C input is blank
            c = temp1;
            meshold0 = "The C input is " + c;
            notifications();//calling caller block 
            reset();//calling caller block 
        }else{
            var letters = /^[A-Za-z]+$/;//chicking to see if the input is a letter 
            if(inputtxt.value.match(letters)){
                meshold0 = "The C input can only be a negative or positive integer";
                notifications();//calling caller block 
                reset();//calling caller block 
            }else{
                if(temp1 % 2 == 0){//modding input by 2 to see if the input is a whole number
                    c = temp1;
                    veraos();//calling caller block 
                    notification0();//calling caller block 
                }else{
                    if(temp1 % 2 == 1){//modding input by 2 to see if the input is a whole number
                        c = temp1;
                        veraos();//calling caller block 
                        notification0();//calling caller block 
                    }else{
                        if(temp1 % 2 == -1){
                            c = temp1;
                            veraos();//calling caller block 
                            notification0();//calling caller block 
                        }else{
                        meshold0 = "The C input can only be a whole number";
                        notifications();//calling caller block 
                        reset();//calling caller block 
                        }
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
    results();//calling caller block 
}
//setting the resutlts to the message board END 

//vertex and AOS flowchart START
function veraos(){//this program is finding the vertex 
    hold1 = b * -1;//multipling b by -1 
    hold2 = a * 2;// multiplying a by 2 
    x = hold1 / hold2;//this formula represents b * -1 / 2a
    x = Math.round(x * 100) / 100;//rounding aos to 2 decimal places 
    AOS = x;// the x value of the vertex is the AOS 
    temp1 = x * x;//x is multiplying by x to represent x^2
    temp1 = a * temp1;//x * temp1 representing ax^2
    temp2 = b * x;//representing b*x
    c =  c * 1;
    y = temp1 + temp2 + c;//this represents my formula y = ax^2 + bx + c
    y = Math.round(y * 100) / 100;//rounding the y value to 2 decimal value 
    vertex = "(" + x + "," + y + ")";//setting up the vertex 
    meshold1 = vertex;//setting vertex
    meshold2 = AOS; //setting aos 
    results();//calling mssage board 
    numtroots();//calling caller block 
}
//vertex and AOS flowchart END 

//number of roots and type of roots flowchart START
function numtroots(){//this function is made to get the number of roots and the type of roots 
    hold3 = b * b;          //
    hold4 = a * c;          //these 4 lines of code are used to find the discrimenent  
    hold4 = hold4 * -4;     //     
    temp3 = hold3 + hold4;  //
    if(temp3 > 0){//seeing if discrimenent is more then 0 
        num_of_roots = 2;
        type_of_root = "Real Roots";
    }else{
        if(temp3 == 0){//seeing if discrimenent is equal too 0 
            num_of_roots = 2;
            type_of_root = "Equal Roots";
        }else{
            if(temp3 < 0){//seeing if discrimenent is less then 0 
                num_of_roots = 2;
                type_of_root = "Imaginary Roots";
            }
        }
    }
    meshold3 = num_of_roots;//setting the number of roots 
    meshold4 = type_of_root;//setting the type of roots 
    results();//calling mssage board 
    roots();//calling caller block 
}
//number of roots and type of roots flowchart END 

//Solving roots START
function roots(){//this function solves for the roots 
    temp1 = hold3 + hold4;
    var i = 0;
    if(temp1 < 0){
        temp1 = temp1 / -1;
        i = "i";
    }
    temp2 = hold2;//setting temp2 to 2a
    temp4 = Math.sqrt(temp1) / hold2;//this is calculating the top part of a quadratic equation (positive version)
    temp4 = Math.round(temp4 * 1000000) / 1000000;//this line is rounding the radical number to 6 decimal places 
    temp4 = temp4 + i;//if square rooted number was a negative the i will be added 
    temp3 = hold1/hold2;//divind -b by 2a 
    temp3 = Math.round(temp3 * 1000000) / 1000000;//this line is rounding the radical number to 6 decimal places 
    if(i == "i"){
    root1 = "X = " + temp3 + " + " + temp4;//setting roots 
    root2 = "X = " + temp3 + " - " + temp4;//setting roots
    }else{
        root1 = temp3 + temp4;//setting roots 
        root2 = temp3 - temp4;//setting roots
        root1 = "X = " + Math.round(root1 * 1000) / 1000;//rounding root1 to 3 places 
        root2 = "X = " + Math.round(root2 * 1000) / 1000;//rounding root2 to 3 places 
    }
    meshold5 = root1;// setting root 1 
    meshold6 = root2;// setting roots 2 
    results();//calling mssage board 
}
//Solving roots END

//Graphing START
function graph(){//this function graphs the equation 
    var c = document.getElementById("plane");//locating graph
    var ctx = c.getContext("2d");//setting graph
    ctx.lineWidth = 1;
    ctx.moveTo(250,0);  // these 2 lines are for the y axis
    ctx.lineTo(250,500);//
    ctx.moveTo(0,250);  // these 2 lines are for the x axis
    ctx.lineTo(500,250);//
    ctx.stroke();//drawing the lines it self
    var i = 0;
    do{
        ctx.moveTo(i,0);  // these 2 lines are for the y axis
        ctx.lineTo(i,500);//
        i = i + 25;
        ctx.stroke();//drawing the lines it self
    }while(i < 500 || i == 500);
    var i = 0;
    console.log(x);
    console.log(y);
    do{
        ctx.moveTo(0,i);  // these 2 lines are for the y axis
        ctx.lineTo(500,i);//
        i = i + 25;
        ctx.stroke();//drawing the lines it self
    }while(i < 500 || i == 500);
        if(AOS > 100 && Y > 100){
            x = AOS;
            temp1 = x * 2.25;
            temp1 = temp1 / 10;
            temp2 = y * 2.25;
            temp2 = temp2 / 10;
            scaled = "yes";
        }else{
            x = AOS;
            temp1 = x * 2.25;
            temp2 = y * 2.25;
            scaled = "no";
        }
    console.log(scaled);
    LineGraph();
    
}

function LineGraph(){
}
//Graphing END