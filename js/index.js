var name = prompt("Lets starat to know each other we are code fellows and you are ?");
var age = prompt("We welcom to all people on our site and we like to know your age ?");
var gender = prompt("We want to if you are male or female to help us to contact you ?"); 
var result= confirm("Are you ready to see what make us the best!");


function onOpen (name, age, gender) {

if(result==true){alert("lets get start.")}
else{
    alert("okay,maybe onther time")
window.close();
 }
 
}

onOpen(name, age, gender); 