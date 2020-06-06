/*********************************************** CHAPTER 1 :: Alerts ***********************************************/

 // Task No. 1
    //alert("Hello Visitor !");  

 // Task No. 2
    //alert("Error! Please enter a valid password.");  

 // Task No. 3
    //alert("Welcome to JS Land...\nHappy Coding!");

 // Task No. 4
    /*
    alert("Welcome to JS Land..."); 
    alert("Happy Coding!");
    */

 // Task No. 5
    /*
     //2 ways, we can open the console and type following.
        alert("Hello... I can run JS through web browser's console");
     //Another way is to do it like below through console.log() function.
        console.log(alert("Hello... I can run JS through web browser's console"));
    */
 // Task No. 6 & 7
 /*
     Did it. Here are the results: 
         Script Tag in Head: In this case, the alret appears before anything is shown on the page. If we put it before CSS then it will execute JS first then CSS.
                             Similary if we put it after CSS, then JS will be executed after CSS.

         Body (before page's HTML): It will load the CSS but will not show the content and execte JS before the content is shown.
        
         Body (In side page's HTML): In this case, if script tag is between <h1> and <h2> then <h1> will be shown, then JS will be executed and then H2 will appear.
        
         Body (After page's HTML): In this case, all the content of the page will appear and JS will be exeuted at last.
*/
/*********************************************** CHAPTER 2 :: String Variables ***********************************************/

 // Task 1.
    //let username = '';

 // Task 2.
    //let myName = 'Syed Zeeshan Ahmed Hashmi';

 // Task 3.
    /* 
        let messsage;
        message = 'Hello World';
        alert(message);
    */

 // Task 4.
 /*
     let bioData = {'name':"Johne Doe",'age':"15 years old",'course':"Certified Mobile Application Development"};
     Object.keys(bioData).forEach((key,index)=>{
         alert(bioData[key]);
     });
*/

 // Task 5.
 /*
     let food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
     alert(food);
*/
 // Task 6.
 /*
     let email = "zeeshan.test@hashmi.com";
     alert('My email address is '+email);
*/
 // Task 7.
 /*
     let book = "A smarter way to learn JavaScript";
     alert("I am trying to learn form the Book "+book);
*/
 // Task 8. 
   // document.write("Yah! I can write HTML content through JavaScript");

 // Task 9.
 /*
     let pattern = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
     alert(pattern);
*/
/*********************************************** CHAPTER 3 :: Number Variables ***********************************************/
 // Task 3.1.
 /*
     let age = 40;
     alert("I am "+age+" years old");
*/
 // Task 3.2.
 /*
     let visits = 14;
     alert('You have visited this site '+visits+' times');
*/
 // Task 3.3.
 /*
     let birthYear = 1979;
     document.write("My birth year is "+birthYear+"\nData type of my declared variable is "+typeof(birthYear));
*/
 // Task 3.4.
 /*
     let storeName = "XYZ Clothing";
     let userName = "JohnDoe";
     let product = "T-shirt(s)";
     let qty = 5;
     document.write(userName+" ordered "+qty+" "+product+" on "+storeName+" store");
*/

/*********************************************** CHAPTER 4 :: Legal & Illegal Variables ***********************************************/
 // Task 4.1
     //let var1, var2, var3;

 // Task 4.2
 /*
     //Legal variable names
         let var1, currency, userName, _system, student_name;
    
     //Illegal variable names
         let 123, 99Designs, pop%, last name, "i-am-variable";
*/
 // Task 4.3
 /*
     document.write('<h2>Rules for naming JS Variables</h2>');
     document.write(' - Variable names can only contain letters, numbers, underscore and $ sign.<br>');
     document.write(' - Variable names must begin with a letter, underscore OR $ sign.<br>');
     document.write(' - Variable names in JS are case Sensitive.<br>');
     document.write(' - Variable names should not be JS keywords.');
*/
/*********************************************** CHAPTER 5 :: Math Expressions ***********************************************/

 // Task 1.
/*      let num1 = parseInt(prompt("Enter No. 1"));
        let num2 = parseInt(prompt("Enter No. 2"));
        document.write(`<h1>Sum of ${num1} and ${num2} is ${num1+num2}</h1>`);
*/
 // Task 2
/*
    let num1s = parseInt(prompt("Enter No. 1"));
    let num2s = parseInt(prompt("Enter No. 2"));
    document.write(`<h1>Subtraction of ${num2s} from ${num1s} is ${num1s-num2s}</h1>`);   

    let num1m = parseInt(prompt("Enter No. 1"));
    let num2m = parseInt(prompt("Enter No. 2"));
    document.write(`<h1>Multiplication of ${num1m} and ${num2m} is ${num1m*num2m}</h1>`);

    let num1d = parseInt(prompt("Enter No. 1"));
    let num2d = parseInt(prompt("Enter No. 2"));
    document.write(`<h1>Division of ${num1d} by ${num2d} is ${num1d/num2d}</h1>`);

    let num1o = parseInt(prompt("Enter No. 1"));
    let num2o = parseInt(prompt("Enter No. 2"));
    document.write(`<h1>Modulus ${num1o} by ${num2o} is ${num1o%num2o}</h1>`);
*/
 // Task 3
 /*
     let num ;
         document.write(`Value after varialbe declaraion is ${num}<br>`);
     num = 5;
         document.write(`Initial value: ${num}<br>`);
     num++;
         document.write(`Value after increment: ${num}<br>`);
     num += 7;
         document.write(`Value after addition is: ${num}<br>`);
     num--;
         document.write(`Value after decrement: ${num}<br>`);
         document.write(`The remainder is: ${num%3}<br>`);
*/    
 // Task 4
 /*
     let ticketCost = 600;
     let buy = 5;
     document.write(`<h1>Total cost to buy ${buy} tickets to a movie is ${ticketCost*buy}PKR</h1><br>`);
 */           
 // Task 5
 /*
     let num = parseInt(prompt("Enter a number for table:"));
     document.write(`<h1>Table of ${num}</h1>`);
     for(i = 1;i<=10;i++){
         document.write(`${num} x ${i} = ${num*i}<br>`);
     }
*/
 // Task 6
 /*
     let tempC = 25;
         document.write(`${tempC}\u00B0C is ${(tempC*9/5)+32}\u00B0F<br>`);
     let tempF = 70;
         document.write(`${tempF}\u00B0F is ${(tempF-32)*5/9}\u00B0C<br>`);
*/
 // Task 7
 /*
     let prc1 = 650;
     let prc2 = 100;
     let qty1 = 3;
     let qty2 = 7;
     let shipping = 100;
     let totalCost = (prc1*qty1)+(prc2*qty2)+shipping;
     document.write('<h1>Shopping Cart</h1>');
     document.write(`Price of item 1 is ${prc1}<br>`);
     document.write(`Quantity of item 1 is ${qty1}<br>`);
     document.write(`Price of item 2 is ${prc2}<br>`);
     document.write(`Quantity of item 2 is ${qty2}<br>`);
     document.write(`Shipping Charges ${shipping}<br><br>`);
     document.write(`Total cost of your order is ${totalCost}<br>`);
*/
 // Task 8. 
 /* 
     let totalMarks = 980;
     let marksObtained = 804;
     document.write('<h1>Marks Sheet</h1>');
     document.write(`Total marks: ${totalMarks}<br>`);
     document.write(`Marks obtaned: ${marksObtained}<br>`);
     document.write(`Percentage: ${(marksObtained/totalMarks)*100}%<br>`);
*/
 // Task 9.
 /*
     document.write('<h1>Currency in PKR</h1>');
     var usd = 10; 
     var usdRate = 104.80;
     var sar = 25; 
     var sarRate = 28;
     var pkr = ((usd*usdRate)+(sar*sarRate));
     document.write(`Total Currency in PKR: ${pkr}<br>`);
*/
 // Task 10
 /*
     let someNum = 6;
     result = ((someNume+5)*10)/2;
*/
 // Task 11
 /*
     let currYear = new Date().getFullYear();
     let birthYear = 1956;
     document.write("<h1>Age Calculator</h1>");
     document.write(`Current Year: ${currYear}<br>Birth Year:${birthYear}<br>Your Age is:${currYear-birthYear}`);
*/
 // Task 12
 /*
     let radius = 20;
     let cf = 2*3.142*radius;
     let area = 3.142*(radius*radius);

     document.write('<h1>The Geometrizer</h1>');
     document.write(`Radius of a circle: ${radius}<br>The circumference is: ${cf}<br>The area is: ${area}<br>`);
*/
 // Task 13
 /*
     let snack = 'Scottish Egg';
     let currAge = 15;
     let maxAge = 65;
     let amtPerDay = 3;
     let lifeTotal = ((maxAge-currAge)*365*amtPerDay);

     document.write('<h1>The Lifetime Supply Calculator</h1>');
     document.write(`Favourite Snack: ${snack}<br>`);
     document.write(`Current Age: ${currAge}<br>`);
     document.write(`Estimated Maximum Age: ${maxAge}<br>`);
     document.write(`Amount of snacks per day: ${amtPerDay}<br>`);
     document.write(`You will need ${lifeTotal} ${snack} to last you until the ripe old age of ${maxAge}<br>`);
*/
    /*********************************************** CHAPTER 6-9 :: Math Expressions ***********************************************/

     // Task 1
     /*
         let a = parseInt(prompt('Enter a number:'));
         document.write('<h3>Result</h3>');
         document.write(`The value of a is : ${a}<br>......................................<br>`);
         document.write(`The value of ++a is : ${++a}<br>Now the value of a is : ${a}<br><br>`);
         document.write(`The value of a++ is : ${a++}<br>Now the value of a is : ${a}<br><br>`);
         document.write(`The value of --a is : ${--a}<br>Now the value of a is : ${a}<br><br>`);
         document.write(`The value of a-- is : ${a--}<br>Now the value of a is : ${a}<br><br>`);
     */
 // Task 2
     /*
         let a = 2, b = 1;
         let result = --a - --b + ++b + b--;
         document.write(`a is ${a}<br>`);
         document.write(`b is ${b}<br>`);
         document.write(`result is ${result}<br>`);
    */
 // Task 3
    /*
         var name = prompt("What's your name ?");
         document.write(`<h1>Good Day ${name}</h1>`);
    */

     // Task 4/5
     /*
         let num = parseInt(prompt("Enter a number for table:"));
         if(num == 0 || num == undefined || num == '' || isNaN(num) || num == null){
             num = 5;
         }
         document.write(`<h1>Table of ${num}</h1>`);
         for(i = 1;i<=10;i++){
             document.write(`${num} x ${i} = ${num*i}<br>`);
         }
         */
 // Task 6
/*
var subjects =[]; var marks = [];
var maxMarks = 100;
var rows = '';
var numberOfSubjects = 3;

for(i=1;i<=numberOfSubjects;i++){
    subjects.push(prompt(`Enter name of subject ${i}:`));
}

for(i=1;i<=numberOfSubjects;i++){
    marks.push(parseInt(prompt(`Enter ${subjects[(i-1)]} marks:`)));
}    


for(i=1;i<=numberOfSubjects;i++){
    rows += `<tr>
                <td>${subjects[i-1]}</td>
                <td>${maxMarks}</td>
                <td>${marks[i-1]}</td>
                <td>${Math.round(marks[i-1]/maxMarks*100,2)}%</td>
            </tr>`;
} 

var sumMarksObtained = marks.reduce(function(a, b){
    return parseInt(a) + parseInt(b);
}, 0);

var percentage = Math.round((sumMarksObtained/(maxMarks*numberOfSubjects)*100),2);

document.write(`<table width='40%' border='0' style='text-align:center'>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Total Marks</th>
                            <th>Obtained Marks</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}                                                       
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>${maxMarks*numberOfSubjects}</th>
                            <th>${sumMarksObtained}</th>
                            <th>${percentage}%</th>
                        </tr>
                    </tfoot>
                </table>`);
*/
/*********************************************** CHAPTER 9-11 :: USER INPUT & CONDITIONAL STATEMENTS ***********************************************/
 // Task 1
 /*
     var city = prompt('Enter city: ');
     (city == 'Karachi' ? alert('Welcome to the city of lights') : '');
*/
 // Task 2
 /*
     var gender = prompt('Enter your gender: ');
     if(gender.toLowerCase() == 'male'){
         alert('Good Morning Sir');
     }
     else if(gender.toLowerCase() == 'female'){
         alert('Good Morning Ma\'am');
     }
*/
 // Task 3
 /*
     var signalColor = prompt('What is the signal color ?');

     if(signalColor.toLowerCase() == 'red'){
         document.write('Must Stop');
     }
     else if(signalColor.toLowerCase() == 'yellow'){
         document.write('Ready to move');
     }
     else if(signalColor.toLowerCase() == 'green'){
         document.write('Move now');
     }   
*/
// TasK 4
/*
     var fuel = parseFloat(prompt('Enter remaining fuel in your car (liters): '));
     if(fuel < 0.25){
         document.write('Please refill the fuel in your car');
     }
     else{
         document.write('You have enough fuel in your car');
     }
*/
 // Task 5
/*
    A : Message Displayed
    B : Message NOT Displayed
    C : Condition 2 & 4 are TRUE and 1 & 3 are FALSE
    D : Message Displayed
    E : Only 'True' is displayed 
    F : Message Displayed
*/

 // Task 6
/*
    var obtainedMarks =[]; var totalMarks = [];
    var rows = '';
    var numberOfSubjects = 3;

    for(i=1;i<=numberOfSubjects;i++){
        obtainedMarks.push(parseInt(prompt(`Enter Marks Obtained for subject ${i}:`)));
        totalMarks.push(parseInt(prompt(`Enter Total marks for subject ${i}:`)));
    } 

    var sumTotalMarks = totalMarks.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);

    var sumObtainedMarks = obtainedMarks.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);    

    var perc = Math.round((sumObtainedMarks/sumTotalMarks)*100,2);

    if(perc >= 80){
        grade = 'A-one';
        remarks = 'Excellant';
    }
    else if(perc >= 70){
        grade = 'A';
        remarks = 'Good';
    }
    else if(perc >= 60){
        grade = 'B';
        remarks = 'You need to improve';
    }
    else{
        grade = 'Fail';
        remarks = 'Sorry';       
    }    

    document.write(`<h1>Marks Sheet</h1>
                    Total Marks : ${sumTotalMarks}<br>
                    Marks Obtained : ${sumObtainedMarks}<br>
                    Percentage : ${perc}%<br>
                    Grade : ${grade}<br>
                    Remarks : ${remarks}`);
*/

 // Task 7
/*
    var secret = Math.floor(Math.random() * 10)+1;
    var tries = 3;
    var i = 0
    while(tries>i)
    {
        i++;
        guess = parseInt(prompt('Enter your guess (1-10) :'));
        if(guess == secret){
            document.write('<h1>Bingo! Correct answer</h1>');
            break;
        }
        else if (guess == secret+1){
            document.write('<p>Close enough to the correct answer</p>');
        }
    }
*/

 // Task 8
/*
    var userNumber = parseInt(prompt('Give me a number :'));
    if(userNumber % 3 == 0){
        document.write(`${userNumber} is divisible by 3`);
    }
    else{
        document.write(`${userNumber} is NOT divisible by 3`);
    }
*/

 // Task 9
/*
    var userNumber = parseInt(prompt('Give me a number :'));
    if(userNumber % 2 == 0){
        document.write(`${userNumber} is Even Number`);
    }
    else{
        document.write(`${userNumber} is Odd Number`);
    }
*/

 // Task 10
/*
    var currTemp = parseInt(prompt('Enter current temperature in C:'));
    if(currTemp > 40){
        document.write('It is too hot outside.');
    }
    else if(currTemp > 30){
        document.write('The Weather today is Normal.');
    }
    else if(currTemp > 20){
        document.write('Today’s Weather is cool');
    }
    else if(currTemp > 10){
        document.write('OMG! Today’s weather is so Cool.');
    }
*/

 // Task 11
/*
    var num1 = parseInt(prompt('Enter first number:'));
    var num2 = parseInt(prompt('Enter 2nd number:'));
    var op = prompt('Which operation do you want (+, -, *, /, %) ?');
    if(op == '+'){
        document.write(`<h1>${num1} + ${num2} = ${num1+num2}</h1>`);
    }
    else if(op == '-'){
        document.write(`<h1>${num1} - ${num2} = ${num1-num2}</h1>`);
    }
    else if(op == '*'){
        document.write(`<h1>${num1} x ${num2} = ${num1*num2}</h1>`);
    } 
    else if(op == '/'){
        document.write(`<h1>${num1} / ${num2} = ${num1/num2}</h1>`);
    }  
    else if(op == '%'){
        document.write(`<h1>${num1} % ${num2} = ${num1%num2}</h1>`);
    }  
    else{
        document.write(`<h1>Only (+, -, *, /, %) are allowed in operation.</h1>`);
    }    
*/     


/*********************************************** CHAPTER 12-13 :: IF ELSE IF AND ELSE  ***********************************************/

 // Task 1
/*
    var char = prompt('Enter a letter or number :');
    var ascii = char.charCodeAt(0);
    if(ascii > 64 && ascii <91){
        document.write('You entered an UPPERCASE letter');
    }
    else if(ascii > 96 && ascii <123){
        document.write('You entered an lowercase letter');
    }
    else if(!isNaN(char)){
        document.write('You entered a number');
    }
    else{
        document.write('You entered unknown character.')
    }
*/

 // Task 2
/*
    var aNum = parseInt(prompt('Enter 1st number: '));
    var bNum = parseInt(prompt('Enter 2nd number: '));

   if(aNum == bNum){
       document.write(`<h1>Both numbers are equal</h1>`);
   }
   else{
       document.write(`<h1>${Math.max(aNum,bNum)} is larger</h1>`);
   }
*/

 // Task 3
/*
   var rNum = parseInt(prompt('Enter an integer:'));
   if(rNum == 0){
       document.write('<h1>Number is Zero</h1>');
   }
   else if(rNum < 0){
    document.write('<h1>Number is Negative</h1>');
   }
   else{
    document.write('<h1>Number is Positive</h1>');
   }
*/

 // Task 4
/*
   var char = prompt('Enter 1 character plz :');
   document.write(`Character is a vowel ? ${(char.match(/[aeiouAEIOU]/)?'True':'False')}`);
*/

 // Task 5
/*
    chkPassword();

    function chkPassword(){
        var password = 'saylani';
        var userPass = prompt('Enter your pasword:');
        if(userPass == ''){
            alert('Please enter your password');
            chkPassword();
        }
        else if(userPass == password){
            document.write('<h1>Correct! The password you entered matches the original password</h1>');
        }
        else{
            document.write('<h1>Incorrect password</h1>');
        }
    }
*/

 // Task 6
/*
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }
    else{
        greeting = "Good evening";
    }
    alert(greeting);
*/

 // Task 7
/*
    var uTime = parseInt(prompt('Enter time in 24 hours format i.e. 1900 for 7pm'));
    var greeting;
    if(uTime >= 0000 && uTime < 1200){
        greeting = "Good morning!";
    }
    else if(uTime >= 1200 && uTime < 1700) {
        greeting = "Good afternoon!";
    }
    else if(uTime >= 1700 && uTime < 2100) {
        greeting = "Good evening!";
    }    
    else if(uTime >= 2100 && uTime <= 2359) {
        greeting = "Good night!";
    }  
    alert(greeting); 
*/ 


/*********************************************** CHAPTER 14-16 :: Arrays  ***********************************************/
/*
 // Task 1 
    var studentNames1 = [];
 // Task 2    
    var studentNames2 = {};
 // Task 3
    var fruits = new Array('Banana','Apple','Mango','Pineapple','Strawberry');
 // Task 4
    var myMarks = [98,87,72,90,83];
 // Task 5
    var boolArray = [false,true,4 < 1,3==3,5>9];
 // Task 6
    var mixArray = [true,'Zeeshan',2020,5>9];
 // Task 7
    var qual = new Array('SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS','M. Phil.', 'PhD');
    document.write('<h1>Qualifications</h1>');
    for(i=0; i<qual.length; i++){
        document.write(`${i+1}) ${qual[i]} <br>`);
    }
    */

 // Task 8
/*
    var students = ['Michael','John','Tony'];
    var scores = [320,230,480];
    var totalScore = 500;

    students.map(function(val, index){ 
        document.write(`Score of ${val} is ${scores[index]}. Percentage: ${(scores[index]/totalScore)*100}%<br>`);
    }) 
*/

 // Task 9
/*
    var colors = new Array('Black','White');
    displayColors('Colors array on start.');
    
    colors.unshift(prompt('Which color do you want to add to the beginning ?'));
    displayColors('Color added to the beginning of array');

    colors.push(prompt('Which color do you want to add to the end ?'));
    displayColors('Color added to the end of array');

    colors.unshift('Purple','Sky blue');
    displayColors('2 more colors added at the beginning of array');

    colors.shift();
    displayColors('1 color removed from the beginning of array');

    colors.pop();
    displayColors('1 color removed from the end of array');    

    var newIndex = prompt('At what index you want to add a new color ?');
    var newColor = prompt(`At index position ${newIndex} which color you want to add ?`);
    colors.splice(newIndex, 0, newColor);
    displayColors(`${newColor} added at Index ${newIndex}`); 

    var delIndex = prompt('At what index you want to delete colors ?');
    var delHowMany = prompt(`How many colors you want to delete from index ${delIndex}?`);
    colors.splice(delIndex, delHowMany);
    displayColors(`${delHowMany} colors removed from Index ${delIndex}`); 

    function displayColors(message){
        document.write(`<h1>${message}</h1>`);
        colors.map(function(val, index){
            document.write(`${val}<br>`);
        });
    }
*/

 // Task 10
/*
    var scores = [320,230,480,120];
    document.write('Scores of Students: '+scores.join()+'<br>');
    document.write('Ordered Scores of Students: '+scores.sort().join());
*/

 // Task 11
/*
    var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
    var selectedCities = cities.slice(2,4);
    document.write(`<h1>Cities List:</h1>${cities.join()}<br><h1>Selected cities list</h1>${selectedCities.join()}`);
*/

 // Task 12
/*
    var arr = ['This','is','my','cat'];
    document.write(`<h1>Array:</h1>${arr}<br><h1>String</h1>${arr.join(' ')}`);
*/

 // Task 13
/*
    var arr = ['keyboard','mouse','printer','monitor'];
    document.write(`<h1>Devices</h1>${arr.join()}`);
    document.write(`<h3>Out</h3>${arr.shift()}`);
    document.write(`<h3>Out</h3>${arr.shift()}`);
    document.write(`<h3>Out</h3>${arr.shift()}`);
    document.write(`<h3>Out</h3>${arr.shift()}`);
*/

 // Task 14
/*
    var arr = ['keyboard','mouse','printer','monitor'];
    document.write(`<h1>Devices</h1>${arr.join()}`);
    document.write(`<h3>Out</h3>${arr.pop()}`);
    document.write(`<h3>Out</h3>${arr.pop()}`);
    document.write(`<h3>Out</h3>${arr.pop()}`);
    document.write(`<h3>Out</h3>${arr.pop()}`);
*/

 // Task 15
/*
    var arr = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony','Haier'];

    var options = arr.map(function(val, index){ 
        return `<option>${val}</option>`;
    }); 

    document.write(`<select>${options}</select>`);
*/

/*********************************************** CHAPTER 17-20 :: Arrays & Loops  ***********************************************/

 // Task 1
    /*
        var items = [[],[]];
    */

 // Task 2
/*
    var items = [
                    [0,1,2,3],
                    [1,0,1,2],
                    [2,1,0,1]
                ];
*/

 // Task 3
    /*
       for(i=1; i<=10; i++){
           document.write(`${i}<br>`);
       }
    */

 // Task 4
/*
       var num = parseInt(prompt('Enter number for table:'));
       var len = parseInt(prompt('Enter length of table:'));
       for(i = 1; i <= len; i++){
        document.write(`${num} x ${i} = ${num*i}<br>`);
       }
*/

 // Task 5
/*
    var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
    for(i=0; i< fruits.length; i++){
        document.write(fruits[i]+'<br>');
    }
    for(i=0; i< fruits.length; i++){
        document.write(`Element at index ${i} is ${fruits[i]}<br>`);
    } 
*/

 // Task 6
/*
    document.write('<h3>Counting:</h3>');
    for(i = 1; i < 16; i++){
        document.write(i+', ');
    }
    document.write('<h3>Reverse Counting:</h3>');
    for(i = 10; i > 0; i--){
        document.write(i+', ');
    }  
    document.write('<h3>Even:</h3>');
    for(i = 0; i < 22; i += 2){
        document.write(i+', ');
    } 
    document.write('<h3>Odd:</h3>');
    for(i = 1; i < 20; i += 2){
        document.write(i+', ');
    }  
    document.write('<h3>Serie:</h3>');
    for(i = 2; i < 22; i += 2){
        document.write(i+'k, ');
    }
*/

 // Task 7
/*
    var arr = ['cake','apple pie','cookie','chips','patties'];
    var term = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");
    
    if(arr.indexOf(term) > -1)
    {
        document.write(`<h1>${term} is <big>available</big> at index ${arr.indexOf(term)} in our bakery</h1>`)
    }
    else{
        document.write(`<h1>We are sorry, ${term} is <big>not available</big> in our bakery</h1>`); 
    }
*/

 // Task 8
/*
    var A = [24, 53, 78, 91, 12];
    document.write(`<h1>Array Items : ${A.join()}</h1>`);
    document.write(`<h1>The largest number is  ${Math.max.apply(null, A)}</h1>`);
*/

 // Task 9
/*
    var A = [24, 53, 78, 91, 12];
    document.write(`<h1>Array Items : ${A.join()}</h1>`);
    document.write(`<h1>The smallest number is  ${Math.min.apply(null, A)}</h1>`);
*/

 // Task 10
/*
    for(i=5; i<=100; i += 5){
        document.write(i+', ');
    }
*/

//ASSIGNMENT COMPLETED 