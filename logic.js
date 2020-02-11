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

function clear(){
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
}
function Acheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){
        alert("The A input cannot be blank");
    }else{
        if(temp1 == 0){
            alert("The A input cannot be 0");
        }else{
            var letters = /^[A-Za-z]+$/;
            if(inputtxt.value.match(letters)){
                alert("The input can only be a negative or positive integer");
            }else{
                if(temp1 % 2 == 0){
                    a = temp1;
                    alert("a is " + a);
                }else{
                    if(temp1 % 2 == 1){
                        a = temp1;
                        alert("a is " + a);
                    }else{
                        alert("The input can only be a whole number");
                    }
                }
            }
        }
    }
}

function Bcheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){
        alert("The B input cannot be blank");
    }else{
        if(temp1 == 0){
            b = temp1;
            alert("b is " + b);
        }else{
            var letters = /^[A-Za-z]+$/;
            if(inputtxt.value.match(letters)){
                alert("The input can only be a negative or positive integer");
            }else{
                if(temp1 % 2 == 0){
                    b = temp1;
                    alert("b is " + b);
                }else{
                    if(temp1 % 2 == 1){
                        b = temp1;
                        alert("b is " + b);
                    }else{
                        alert("The input can only be a whole number");
                    }
                }
            }
        }
    }
}

function Ccheck(inputtxt){
    temp1 = inputtxt.value;
    if(inputtxt.value.length == 0){
        alert("The C input cannot be blank");
    }else{
        if(temp1 == 0){
            c = temp1;
            alert("c is " + c);
        }else{
            var letters = /^[A-Za-z]+$/;
            if(inputtxt.value.match(letters)){
                alert("The input can only be a negative or positive integer");
            }else{
                if(temp1 % 2 == 0){
                    c = temp1;
                    alert("c is " + c);
                }else{
                    if(temp1 % 2 == 1){
                        c = temp1;
                        alert("c is " + c);
                    }else{
                        alert("The input can only be a whole number");
                    }
                }
            }
        }
    }
}