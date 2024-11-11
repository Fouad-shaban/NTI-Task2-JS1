// let total = 0;
// let number = null;

// do{
//     number = Number(prompt("Please enter a number"));
//     // type checking to ensure the input is numeric
//     if(isNaN(number)){
//         alert('Please enter a valid number');
//         continue;
//     }else if( number + total > 100){
//         alert("Value Exceed 100, total will be before last number");
//         break;
//     }else if(number === 0 ){
//         break;
//     }
//     total+= number;
// }while(true){
//     alert("Total is " + total)
// }



// alert("Welcome");
// let userName = prompt("Please Enter Your Name ...");
// let favColor = prompt("Please Enter Your Favorite Color ...");
// document.body.innerHTML = "Welcome " + userName;

// switch(favColor){
//     case "red": document.body.style.color = "red"
//     break;
//     case "blue": document.body.style.color = "blue"
//     break;
//     case "green": document.body.style.color = "green"
//     break;
//     case "yellow": document.body.style.color = "yellow"
//     break;
//     case "black": document.body.style.color = "black"
//     break;
//     case "orange": document.body.style.color = "orange"
//     break;
//     default : [
//         alert("something wrong will apply default color"),
//         document.body.style.color ="pink"
//     ]
// }

let userMessage = prompt("Enter your Message ...");
for (i = 1; i <= 6; i++){
    let element = document.createElement (`h${i}`);
    element.textContent = userMessage;
    document.body.appendChild(element);
}


