// var name = prompt("Lets starat to know each other we are code fellows and you are ?");
// var age = prompt("We welcom to all people on our site and we like to know your age ?");
// var gender = prompt("We want to if you are male or female to help us to contact you ?"); 
// var result= confirm("Are you ready to see what make us the best!");


// function onOpen (name, age, gender) {

// if(result==true){alert("lets get start.")}
// else{
//     alert("okay,maybe onther time")
// window.close();
//  }
 
// }

// onOpen(name, age, gender); 
function language () {
    
var con = prompt ("Which language do you like to learn in the beginning HTML or CSS?"); 
while( con !== "HTML"&& con!== "CSS"){   
    var con = prompt ("Which language do you like to learn in the beginning HTML or CSS?");
}
var item;
    if (con=="HTML"){
        item ='<img src="https://live.staticflickr.com/7174/26937348141_d721215193_b.jpg">';
    } else if (con=="CSS"){
        item ='<img src="https://p1.pxfuel.com/preview/86/583/812/code-computer-css-it.jpg">';
    }else {
         item = '<strong> PLEASE SELECT ONE  </strong>'
     }
     return item; 
}

document.write( '<p>' + language() + '</p>');