function graph(){//this function sets up the graphs and vertex
    var h = document.getElementById("plane");//locating graph
    var ctx = h.getContext("2d");//setting graph
    ctx.clearRect(0, 0, plane.width, plane.height);
    if(a != 0){
        var i = 0;
        ctx.strokeStyle = '#000000';
        do{
            ctx.moveTo(i,0);  // these 2 lines are for the y axis
            ctx.lineTo(i,500);//
            i = i + 25;
            ctx.stroke();//drawing the lines it self
        }while(i < 500 || i == 500);
        var i = 0;
        do{
            ctx.moveTo(0,i);  // these 2 lines are for the y axis
            ctx.lineTo(500,i);//
            i = i + 25;
            ctx.stroke();//drawing the lines it self
        }while(i < 500 || i == 500);
            //Add determining scaling code here START
                scalingandlabeling();
            //Add determining scaling code here END
                graphrules();
            //Finding the vertex in the graph SATRT
                if(temp2 == 0 && temp1 == 0){// checking if vertex is 0,0
                    temp2 = 250;//setting vertext to looks like 0,0
                    temp1 = 250;//setting vertext to looks like 0,0
                }
                ctx.moveTo(temp1,temp2);//going to the vertex on the graph 
                verx = temp1;//setting the vertex cordinates 
                very = temp2;//setting the vertex cordinates 
                prex = verx;//setting previous point 
                prey = very;//setting previous point 
                graphequations();   
            //Finding the vertex in the graph END
    }
}
function scalingandlabeling(){
    var h = document.getElementById("plane");//locating graph
    var ctx = h.getContext("2d");//setting graph
    ctx.font = "10px Arial";
    var i = 0;
    var lomax = 100;
    var goup = 10;
    //Add determining scaling code here START
        x = AOS;//graph starting point 
        temp1 = x * 2.5;//scaing according to the graph 
        temp2 = y * 2.5;//scaling according to the graph 
        if(AOS >80 || y > 80 || AOS < -80 || y < -80){//deciding wether to scale 
            temp1 = temp1 / 10;//scaling 
            temp2 = temp2 / 10;//scaling 
            scaled = "yes";//marking 
            lomax = 1000;
            goup = 100;
        }else{
            scaled = "no";//marking
        }
    //Add determining scaling code here END
        zz = lomax / -1;//this is to make sure the graph starts for the min point 
        aa = zz;//this is later used for asthetic purposese
    do{
            if(zz > 0){//displaying unit value 
                if(zz !== lomax ){if(zz !== aa ){//this is chekcing if the graphs at its first or last point 
                    if(zz == lomax){
                        ctx.strokeText(zz, i - 18, 247);//this is whats displaying them
                    }else{
                        if(scaled == "yes"){
                            ctx.strokeText(zz, i - 18, 247);//this is whats displaying them 
                        }else{
                            ctx.strokeText(zz, i -13, 247);//this is whats displaying them 
                        }
                    }
                }
            }
        }else{
            if(zz !== lomax ){if(zz !== aa ){//this is chekcing if the graphs at its first or last point
                    if(zz == 0){
                        ctx.strokeText(zz, i - 7, 259);//this is whats displaying them
                    }else{
                        ctx.strokeText(zz, i + 2, 247);//this is whats displaying them
                        }    
                    }
                }
            }
            zz = zz + goup;//incrementing zz for the next graph value 
            i = i + 25;//moving to the next line 
        ctx.stroke();//drawing the lines it self
    }while(i < 500 || i == 500);
        var i = 0;
    do{
            if(zz !== 0){//this is whats displaying them 
            ctx.strokeText(zz, 254, i - 27);//this is whats displaying them
            }
            zz = zz - goup;//incrementing zz for the next graph value
            i = i + 25;
            ctx.stroke();//drawing the lines it self
    }while(i < 500 || i == 500);
}
function graphequations(){//this fucntion is graphing the equation
    var h = document.getElementById("plane");//locating graph
    var ctx = h.getContext("2d");//setting graph
    //graphing the equation START
        x = AOS;//setting the starting point 
        do{//do while loop
            x = x + 1;//incrementing x 
            temp1 = x * x;//x^2
            temp1 = a * temp1;//ax^2
            temp2 = b * x;//bx
            temp2 = temp1 + temp2 + c;// y = formula ax^2 + bx + c
            temp1 = x;//setting x starting point 
                ppoints.push("X " + x + ": " + "(" + temp1 + " , " + temp2 + ")");//this is pushing the cordinates of the specific x point
                textarea = document.getElementById("pointspos");//linking the html file to the js file 
                textarea.value = ppoints.join("\n");//displaying the outputs 
            temp1 = temp1 * 2.5;//finding point on the graph 
            temp2 = temp2 * 2.5;//finding point on the graph 
                if(scaled == "yes"){//scaling if needed 
                    temp1 = temp1 / 10;//scaling 
                    temp2 = temp2 / 10;//scaling 
                }
                graphrules();//locating the point of the graph 500x500
                                // console.log(x + " : " + temp1 + " , " + temp2);  //this line of code was used for debugging the ggraph"really helpfull"
                    ctx.beginPath();
                    ctx.moveTo(prex,prey);  // these 2 lines are for the y axis
                    ctx.lineTo(temp1,temp2);//
                    ctx.strokeStyle = '#ff0000';
                    ctx.stroke();//drawing the lines it self
                prex = temp1;//set up for next point 
                prey = temp2;//set up for next point 
        }while(x < 200)//loop conditon 

        prex = verx;//going back to the vertex
        prey = very;//going back to the vertex 
        x = AOS;//setting the loop
        do{//do while loop
            x = x - 1;//decrementing x 
            temp1 = x * x;//X^2
            temp1 = a * temp1;//ax^2
            temp2 = b * x;//bx
            temp2 = temp1 + temp2 + c;// y = formula ax^2 + bx + c
            temp1 = x;//setting x starting point 
                npoints.push("X " + x + ": " + "(" + temp1 + " , " + temp2 + ")");//this is pushing the cordinates of the specific x point
                textarea = document.getElementById("pointsneg");//linking the html file to the js file 
                textarea.value = npoints.join("\n");//displaying the outputs 
            temp1 = temp1 * 2.5;//finding the point on the graph 
            temp2 = temp2 * 2.5;//finding the point on the graph 
                if(scaled == "yes"){//scaling if needed 
                    temp1 = temp1 / 10;//scaling 
                    temp2 = temp2 / 10;//scaling 
                }
                graphrules();//locating the point of the graph 500x500
                                // console.log(x + " : " + temp1 + " , " + temp2);  //this line of code was used for debugging the ggraph"really helpfull"
                    ctx.beginPath();
                    ctx.moveTo(prex,prey);  // these 2 lines are for the y axis
                    ctx.lineTo(temp1,temp2);//
                    ctx.strokeStyle = '#ff0000';
                    ctx.stroke();//drawing the lines it self
                prex = temp1;//set up for the next point 
                prey = temp2;//set up for the next point 
        }while(x > -200)//loop condition 
    //graphing the equation END
}
function graphrules(){
    //add point finding code here START
    var i = 0;
    if(x == 0){//special conditions chekcing 
        temp1 = 250;//if x is 0 
        temp2 = 250 - temp2;//if y is 0
        i = 1;//by doing this the process is being bipassed 
    }
    if(temp2 == 0){//special condition checking 
        if(x == 0){
            temp1 = 250;//setting temp1 to 250 beccause x is 0
            temp2 = c * 2.5;//setting temp2 to c times 2.5 because x is 0
            if(scaled == "yes"){//looking to see if its scaled
                temp2 = temp2 / 10;//scaling
            }
            temp2 = 250 - temp2;//if y is 0
        }else{
            temp1 = 250 + temp1;//if y is 0 
            temp2 = 250;//if y is 0
            i = 1;//bypassing the system
        }
    }
    if(i == 0){//deciding to bypass the process 
        if(temp1 > 0 && temp2 > 0){//if the point is on the 1st quadrant 
            temp1 = temp1 + 250;
            temp2 = 250 - temp2;
        }else{
            if(temp1 < 0 && temp2 < 0){//if the point is on the 3rd quadrant 
                if(a < 0){//different conditions apply for a downward graph 
                    temp1 = temp1 + 250;//quad 1 code
                    temp2 = 250 - temp2;//quad 1 code 
                }
                if(a > 0){//if the graph is upwards 
                    temp1 = 250 + temp1;//code for 3rd quad 
                    temp2 = temp2 / -1;
                    temp2 = temp2 + 250;//code for 3rd quad 
                }
            }else{
                if(temp1 < 0 && temp2 > 0){//if the point is on the 2nd quadrant 
                    temp1 = temp1 / -1;
                    temp1 = 250 - temp1;
                    temp2 = 250 - temp2;
                }else{
                    if(temp1 > 0 && temp2 < 0){//if the point is on the 4th quadrant 
                        temp1 = 250 + temp1;
                        temp2 = temp2 / -1;
                        temp2 = 250 + temp2;
                        }
                    }
                }
            }
        }
    //add point finding code here END
}    