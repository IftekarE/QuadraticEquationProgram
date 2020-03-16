//Graphing START
function graph(){//this function graphs the equation 
    var c = document.getElementById("plane");//locating graph
    var ctx = c.getContext("2d");//setting graph
    ctx.lineWidth = 0.5;
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
    do{
        ctx.moveTo(0,i);  // these 2 lines are for the y axis
        ctx.lineTo(500,i);//
        i = i + 25;
        ctx.stroke();//drawing the lines it self
    }while(i < 500 || i == 500);

        //Add determining scaling code here START

        //Add determining scaling code here END

        //Finding the vertex in the graph SATRT
            //add vertex finding code here START

            //add vertex finding code here END
                if(temp2 == 0 && temp1 == 0){// checking if vertex is 0,0
                    temp2 = 250;//setting vertext to looks like 0,0
                    temp1 = 250;//setting vertext to looks like 0,0
                }
                hold1 = temp1;
                hold2 = temp2;    
        //Finding the vertex in the graph END
    //LineGraph();
}

// this is old graphing code that has a bug  //function LineGraph(){
// this is old graphing code that has a bug  //    var c = document.getElementById("plane");//locating graph
// this is old graphing code that has a bug  //    var ctx = c.getContext("2d");//setting graph
// this is old graphing code that has a bug  //    
// this is old graphing code that has a bug  //    x = AOS;
// this is old graphing code that has a bug  //    do{
// this is old graphing code that has a bug  //        x = x - 1;//increminting x by 1 
// this is old graphing code that has a bug  //        temp1 = x * x;      //
// this is old graphing code that has a bug  //        temp1 = a * temp1;  //these lines do ax^2
// this is old graphing code that has a bug  //        temp2 = b * x;//this line does bx
// this is old graphing code that has a bug  //        temp2 = temp1 + temp2 + c;//this line does the equation ax^2 + bx + c
// this is old graphing code that has a bug  //        temp1 = x;//setting x 
// this is old graphing code that has a bug  //        temp1 = temp1 * 2.5;//fitting the points to the graph
// this is old graphing code that has a bug  //        temp2 = temp2 * 2.5;//fitting the points to the graph
// this is old graphing code that has a bug  //        if(scaled == "No"){//fitting acording to scaled 
// this is old graphing code that has a bug  //            temp1 = temp1 / 10;//actually setting 
// this is old graphing code that has a bug  //            temp2 = temp2 / 10;//actually setting 
// this is old graphing code that has a bug  //        }
// this is old graphing code that has a bug  //        if(temp1 > 0 && temp2 > 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //            temp1 = temp1 + 250;   //the point is being positined in the first quadrant 
// this is old graphing code that has a bug  //            temp2 = 250 - temp2;   //the point is being positined in the first quadrant
// this is old graphing code that has a bug  //        }else{
// this is old graphing code that has a bug  //            if(temp1 < 0 && temp2 < 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //                temp2 = temp2 + 250;   //the point if being positined in the 3rd quadrant
// this is old graphing code that has a bug  //                temp1 = 250 - temp1;   //the point if being positined in the 3rd quadrant
// this is old graphing code that has a bug  //            }else{
// this is old graphing code that has a bug  //                if(temp1 < 0 && temp2 > 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //                    temp1 = temp1 / -1;    
// this is old graphing code that has a bug  //                    temp1 = 250 - temp1;   //the point is being positioned in the 2nd quadrant 
// this is old graphing code that has a bug  //                    temp2 = 250 - temp2;   //the point is being positioned in the 2nd quadrant 
// this is old graphing code that has a bug  //                }else{
// this is old graphing code that has a bug  //                    if(temp2 < 0 && temp1 > 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //                        temp2 = temp2 / -1;
// this is old graphing code that has a bug  //                        temp2 = 250 + temp2;   //the point is being positioned in the 4th quadrant 
// this is old graphing code that has a bug  //                        temp1 = 250 + temp1;   //the point is being positioned in the 4th quadrant 
// this is old graphing code that has a bug  //                    }
// this is old graphing code that has a bug  //                }
// this is old graphing code that has a bug  //            }
// this is old graphing code that has a bug  //        }
// this is old graphing code that has a bug  //
// this is old graphing code that has a bug  //        //ADD DRAWING HERE 
// this is old graphing code that has a bug  //        console.log("Temp2 graph value: "+ temp2);
// this is old graphing code that has a bug  //        ctx.moveTo(hold1, hold2);
// this is old graphing code that has a bug  //        ctx.lineTo(temp1, temp2);
// this is old graphing code that has a bug  //        ctx.stroke();//drawing the lines it self
// this is old graphing code that has a bug  //        hold1 = temp1;
// this is old graphing code that has a bug  //        hold2 = temp2;
// this is old graphing code that has a bug  //        //ADD DRAWING HERE 
// this is old graphing code that has a bug  //
// this is old graphing code that has a bug  //    }while(x > -100)//repeat until x is nolonger more then 100 
// this is old graphing code that has a bug  //
// this is old graphing code that has a bug  //    x = AOS;
// this is old graphing code that has a bug  //    do{
// this is old graphing code that has a bug  //        x = x + 1;//increminting x by 1 
// this is old graphing code that has a bug  //        temp1 = x * x;      //
// this is old graphing code that has a bug  //        temp1 = a * temp1;  //these lines do ax^2
// this is old graphing code that has a bug  //        temp2 = b * x;//this line does bx
// this is old graphing code that has a bug  //        temp2 = temp1 + temp2 + c;//this line does the equation ax^2 + bx + c
// this is old graphing code that has a bug  //        temp1 = x;//setting x 
// this is old graphing code that has a bug  //        temp1 = temp1 * 2.5;//fitting the points to the graph
// this is old graphing code that has a bug  //        temp2 = temp2 * 2.5;//fitting the points to the graph
// this is old graphing code that has a bug  //        if(scaled == "Yes"){//fitting acording to scaled 
// this is old graphing code that has a bug  //            temp1 = temp1 / 10;//actually setting 
// this is old graphing code that has a bug  //            temp2 = temp2 / 10;//actually setting 
// this is old graphing code that has a bug  //        }
// this is old graphing code that has a bug  //
// this is old graphing code that has a bug  //        if(temp1 > 0 && temp2 > 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //            temp1 = temp1 + 250;   //the point is being positined in the first quadrant 
// this is old graphing code that has a bug  //            temp2 = 250 - temp2;   //the point is being positined in the first quadrant
// this is old graphing code that has a bug  //        }else{
// this is old graphing code that has a bug  //            if(temp1 < 0 && temp2 < 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //                temp2 = temp2 + 250;   //the point if being positined in the 3rd quadrant
// this is old graphing code that has a bug  //                temp1 = 250 - temp1;   //the point if being positined in the 3rd quadrant
// this is old graphing code that has a bug  //            }else{
// this is old graphing code that has a bug  //                if(temp1 < 0 && temp2 > 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //                    temp1 = temp1 / -1;    
// this is old graphing code that has a bug  //                    temp1 = 250 - temp1;   //the point is being positioned in the 2nd quadrant 
// this is old graphing code that has a bug  //                    temp2 = 250 - temp2;   //the point is being positioned in the 2nd quadrant 
// this is old graphing code that has a bug  //                }else{
// this is old graphing code that has a bug  //                    if(temp2 < 0 && temp1 > 0){//this is applying the rules of the JS canvas 
// this is old graphing code that has a bug  //                        temp2 = temp2 / -1;
// this is old graphing code that has a bug  //                        temp2 = 250 + temp2;   //the point is being positioned in the 4th quadrant 
// this is old graphing code that has a bug  //                        temp1 = 250 + temp1;   //the point is being positioned in the 4th quadrant 
// this is old graphing code that has a bug  //                    }
// this is old graphing code that has a bug  //                }
// this is old graphing code that has a bug  //            }
// this is old graphing code that has a bug  //        }
// this is old graphing code that has a bug  //        //ADD DRAWING HERE 
// this is old graphing code that has a bug  //        console.log("Temp2 graph value: "+ temp2);
// this is old graphing code that has a bug  //        ctx.moveTo(hold1, hold2);
// this is old graphing code that has a bug  //        ctx.lineTo(temp1, temp2);
// this is old graphing code that has a bug  //        ctx.stroke();//drawing the lines it self
// this is old graphing code that has a bug  //        hold1 = temp1;
// this is old graphing code that has a bug  //        hold2 = temp2;
// this is old graphing code that has a bug  //        //ADD DRAWING HERE 
// this is old graphing code that has a bug  //
// this is old graphing code that has a bug  //    }while(x < 100)//repeat until x is nolonger more then 100 
// this is old graphing code that has a bug  //}