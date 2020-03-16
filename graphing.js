function graph(){//this function sets up the graphs and vertex
    var h = document.getElementById("plane");//locating graph
    var ctx = h.getContext("2d");//setting graph
    var i = 0;
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
            x = AOS;
            temp1 = x * 2.5;
            temp2 = y * 2.5;
            if(AOS > 100 && y > 100 || AOS < -100 && y < -100){
                temp1 = temp1 / 10;
                temp2 = temp2 / 10;
                scaled = "yes";
            }else{
                scaled = "no";
            }
        //Add determining scaling code here END
            graphrules();
        //Finding the vertex in the graph SATRT
            if(temp2 == 0 && temp1 == 0){// checking if vertex is 0,0
                temp2 = 250;//setting vertext to looks like 0,0
                temp1 = 250;//setting vertext to looks like 0,0
            }
            console.log("Vertex: " + x + " , " + y);
            ctx.moveTo(temp1,temp2);
            verx = temp1;
            very = temp2;
            prex = verx;
            prey = very; 
            graphequations();   
        //Finding the vertex in the graph END
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
            temp1 = temp1 * 2.5;//finding point on the graph 
            temp2 + temp2 * 2.5;//finding point on the graph 
                if(scaled == "yes"){//scaling if needed 
                    temp1 = temp1 / 10;//scaling 
                    temp2 = temp2 / 10;//scaling 
                }
                graphrules();//locating the point of the graph 500x500
                    ctx.moveTo(prex,prey);  // these 2 lines are for the y axis
                    ctx.lineTo(temp1,temp2);//
                    ctx.stroke();//drawing the lines it self
                prex = temp1;//set up for next point 
                prey = temp2;//set up for next point 
        }while(x < 100)//loop conditon 

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
            temp1 = temp1 * 2.5;//finding the point on the graph 
            temp2 + temp2 * 2.5;//finding the point on the graph 
                if(scaled == "yes"){//scaling if needed 
                    temp1 = temp1 / 10;//scaling 
                    temp2 = temp2 / 10;//scaling 
                }
                graphrules();//locating the point of the graph 500x500
                    ctx.moveTo(prex,prey);  // these 2 lines are for the y axis
                    ctx.lineTo(temp1,temp2);//
                    ctx.stroke();//drawing the lines it self
                prex = temp1;//set up for the next point 
                prey = temp2;//set up for the next point 
        }while(x > -100)//loop condition 
    //graphing the equation END
}
function graphrules(){
    //add vertex finding code here START
        if(temp1 > 0 && temp2 > 0){//if the point is on the 1sr quadrant 
            temp1 = temp1 + 250;
            temp2 = 250 - temp2;
        }else{
            if(temp1 < 0 && temp2 < 0){//if the point is on the 3rd quadrant 
                temp1 = 250 - temp1;
                temp2 = temp2 + 250;
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
    //add vertex finding code here END
}