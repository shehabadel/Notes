/*

console.log() => print
    console.log("This is a %chappy house","color:red; font-size:40px;");
window.alert() => alert print on window
document.write() => write into html document
    document.write("<h1>Hello World>/h1>");

window.close() => close window

let => declare variable (block-scopped)
var => declare variable (function-scopped)

Data Types
    String
    Number {int, float, double}
    Object {Array}
    Object {Dictionary or a hashmap} => {name:"Osama", age:17}
    boolean
    undefined 
    null is an object??

    var -> variable
    minakaramcs@gmail
    Sansa_Stark2019

--String--
    let name ="Ahmed";
    name[0]=A
    name.charAt();
    name.length();
    name.trim(); => remove spaces
    name.toUpperCase();
    name.toLowerCase();
    name.indexOf("string",start);
    name.lastIndexOf("String",start);
    name.slice(start, end);
    name.repeat(times)
    name.split(regex, limit)
    name.substring(start, end)
    name.substr(start, number of characaters to extract)
    name.includes("String") => boolean
    name.startsWith("String",position)
    name.endsWith("String", length)

    --Urnary plus--
    +(String) => converts it into integer;

    --Comparison Operators--
    console.log(10 == "10") -> compare value only
    console.log(-100 =="-100") -> compare value only
    console.log(10 != "10") -> Compare value only

    console.log(10 === "10") -> compare value + type
    console.log(-100 !=="-100") -> compare value + type
    console.log(10 !== 10) -> Compare value + type

    --Null coalescing operator & logical or--
        Logical or || -> Null + undefined + Any false value
        Nullish Coalescing Operator ?? -> Null + undefined

    --Arrays--
    let myFriend=["Ahmed","Mohamed","Sayed"];
    let myFriend=[["Ahmed, Mohamed"], ["Shams, Shehab"]];
    array.length;

    --Function--
    function sayHello(){
        console.log(`Hello`);
    }
    var parameters
    function calc(...numbers)
    {
        for(let i=0; i<numbers.length; i++)
        console.log(numbers[i])
    }
    sayHello();

    --Anonymous Function--

    document.getElementById("show").onclick = function(){
    console.log("Hello man");
    made mainly for events --take care of it--

    --Nested Function--
    function sayMessage(fName, lName)
    {
        let message = `hello`;
        function concatMsg(){
            return `${message} ${fName} ${lName}`;
        }
    return concatMsg();
    }

    --Arrow Function--
    no parameters taken
    let print = () => {
        console.log
    }
    parameters taken
    let print = (num,num1) =>
    {
        return num1+num;
    }

    --Global and Local variables--

    --DOM Document Object Model (DOM)--
    when a web page is loaded, the browser creates
    a DOM of the page. a tree representation of the HTML Document
    it can be modified with the help of javascript

    ->getElementById('html-element-id') -> DOM Method that accepts HTML element id
    and returns the HTML element matching that ID
        document.getElementById('topbar');

    we put <script> in the end in order the DOM tree to be created
    then we can call our script normally

    ->getElementsByClassname('html-class-string-)-> DOM method that accepts HTML class string
    and returns all the HTML elements matching that class

    -> getElementsByTagName('html-tag-string')-> DOM method that accepts HTML tag string 
    and returns all HTML elements matching that tag

    -Extreme DOM Properties-
    -Query Selectors-
    allow u to use CSS selectors to select HTML elements
    querSelector()
    querySelectorAll()
    document.querySelector('#topbar span'); -> select by ID
    document.querySelectorAll('#topbar span')
    document.querySelector('.parent'); -> select by class

    var countdownElement=document.getElementById('countdown');

    let counterX = setInterval(()=>{
    counter++;
    p.textContent=`${counter}`;
    if(counter==6)
        {
           clearInterval(counterX); //pause the setInterval
        }
    },2000)


    --Update Styles of HTML Element--
        var selectedElement= document.getElementbyId('selector');
        selectedElement.style.{propertyName='value'};
        ex: selectedElement.style.width='300px';


    --Events--
    When some actions happens in the webpage, that action is called event

    two ways to handle events
    var selectedElement = getElementById('selector')/querySelector('selector');

    method 1
    syntax: selectedElement.{Eventproperty}=function(){}
        selectedElement.onclick=function(){}

    method 2
    syntax: selectedElement.addEventListener({eventName},function(){})
        selectedElement.addEventListener('click', function(){})


    --Add/Remove Classes using Javascript--
    syntax:
    var selectedElement=getElementById('selector')/querySelector('selector');
    selectedElement.classList.add('MyClass');
    selectedElement.classList.remove('MyClass);
    selectedElement.addEventListener('click', function(){});

    --Get Element Styles Values--
    Inline Style -> selectedElement.style.width;
    CSS File -> window..getComputedStyle(selectedElement).width;

    --Form Events--
    -change: the change event is triggered when the content of an input field
    is changed or when the user selects a value from the dropdown etc
    -focus: triggered when the input field is focused by the user
    -blur: triggered when the input field loses focus
    -submit: triggered when submit button is clicked by the user

    username.addEventListener('input', function(event){
    console.log('Value changed');
    console.log(event.target.value);
        --> every character change
    
    var form = document.getElementById('form1');
    form.addEventListener('submit', function(e){
    console.log('submit button clicked');
    e.preventDefault(); --> prevents the page from refreshing
    });
    });

    --Keyboard Events--
    triggered when the user clicks a key from the keyboard
    three types
    -keydown: triggered when any key pressed on keyboard
    -keyup: triggered when any key is released after its keydown event
    -keypress: triggered when any key except Shift, Function, capslock is in pressed position
        document.body.addEventListener('keydown',function(e){
        var keyCode = e.key.charCodeAt(); --> getting button code
        console.log(keyCode);
    })

    --Mouse Events--
    triggered when the different mouse keys are presses and/or released
    These are the mouse events avaliable
        -mousedown -> either left,right,or middle key is pressed 
        -mouseup -> either left,right,or middle key is released 
        -click - Single click
        -dblclick -> Double click
        -mouseover -> mouse goes over the html element
        -mouseenter -> mouse enters the html element
        -mousemove

    --Create HTML Elements--
    var list = document.getElementById('todo-list');
    document.body.addEventListener('keydown',function(e){
    var newListElement=document.createElement('li');
    newListElement.appendChild(document.createTextNode(`List Item ${(list.childElementCount)+1} `));
    newListElement.id="item3";
    list.appendChild(newListElement);
    console.log(list.childElementCount);
    });

    list.insertBefore(newListElement, firstItem) -> Add FirstItem before newListElement
*/
/*cardNumber=[6,76,85];
cardTitle=["Hello","Hey","Hi!"];
for (let i = 0; i < cardTitle.length; i++) {
    var card =` 
<div class="parent">
    <div class="child">
        <h1>${cardTitle[i]}<span>This is card number ${cardNumber[i]}</span></h1>
        <p>This is a paragraph </p>
    </div>
</div>
`;
document.write(card);
    
}       
        List.replaceChild() --> Update Element
        List.removeChild({Element});

    --Browser Object Model (BOM)--
    represents the current browser window. Its main
    purpose to manipulate the properties and methods
    which are associated with the browser window

    Document object -> left structure and content in a free format
    confirm("String")-> confirm alert returns true or false
    Prompt("String")-> Takes input from user and returns it as string
    Window.open -> opens a new window with specific url
    close() -> closes current window


    --Screen and Navigator Object--
    screen.availwidth => kol el width ely avaliable men el screen kolha
    mesh window el browser bas

    screen.availheight=> zyha

    navigator -> contains info about browser where ur application is running
    window.navigator
    window.navigator.userAgent -> put it on user agent parser
    
    
    -in order to check if user has active internet or not
        ->navigator.online --> returns boolean
    
    --History and Location object--
    represents an array of urls visited by the user

    it gives us two methods:
    -back() - it loads the previous page from the browser history
    -forward() - it loads the next page from the browser history

    window.location -> returns location 
    window.location.href -> returns the hyperlink of the page
    window.location.hostname -> returns the hostname

    --regex--
    syntax
    /pattern-string/flags
    forward-slash -> defines start and end of pattern-string
    pattern-string -> the pattern that the string should match
    flags -> define whether you want the search to be case-sensitive
    or whether you want just the first result or all the results

    set and ranges


*/
var superman = {
 
    heroName: 'Superman',  
   
    sayHello: function() {
        console.log("Hello, I'm " + this.heroName );
    }  
  };
const headtTitle=document.getElementById("headTitle");

headtTitle.textContent='I have been here';
    console.log(10 == "10");
    console.log(-100 =="-100");
    console.log(10 != "10");
var AvengerHero ={
    copyrights:'Marvel'
};
var ironMan ={};
ironMan.__proto__=AvengerHero;
console.log(`Iron man is ${ironMan.copyrights}`);
AvengerHero.copyrights='DC Comics';
console.log(`Iron man is ${ironMan.copyrights}`);
let price = false;
console.log(`the price is ${price ?? 200}`);
console.log(`the price is ${price || 200}`);
let myFriend=[["Ahmed, Mohamed"], ["Shams, Shehab"]];
console.log(myFriend[0][0][1]);

document.getElementById("show").onclick = function(){
    console.log("Hello man");
}
var total = 10;
var sum = function(num1,num2){
    console.log(total);
    total=num1+num2;
    var total;
    console.log(total);
}
sum(90,8);
console.log(document.getElementsByClassName('parent'));
let parentX = document.getElementsByClassName('parent');
let counter=0
let p = document.getElementById('headTitle');
/*setTimeout(()=>{

    for (let index = 0; index < parentX.length; index++) {
        if(index==0)
        {
            continue;
        }
        const element = parentX[index];
        element.style.marginBottom="70px";
        element.style.border="30px solid white";
        element.style.backgroundColor="#ffc107";
    }
},3000);
let hi = document.querySelector('.parent');
let counterX = setInterval(()=>{
    counter++;
    p.textContent=`${counter}`;
    hi.style.border=`${counter*2}px solid black`;
    hi.style.fontSize=`${counter*5}px`;
    if(counter==6)
    {
        clearInterval(counterX); //pause the setInterval
    }
},2000)
*/
var btn = document.getElementById('show');
var initialSize= window.getComputedStyle(headtTitle).fontSize;
console.log(initialSize.substring(0, initialSize.indexOf('p')));
initialSize=initialSize.substring(0, initialSize.indexOf('p'));
btn.onclick=function(){
    initialSize=+(initialSize)+20;
    console.log(`${initialSize}px`);
    headtTitle.style.fontSize=`${initialSize}px`;
}

var list = document.getElementById('todo-list');
var listInput=document.getElementById('list-input');
var listValue;
listInput.addEventListener('input', function(event){

    listValue= event.target.value;
    console.log(listValue);
});


var form = document.getElementById('form1');
form.addEventListener('submit', function(e){
console.log('submit button clicked');
listInput.value='';
listValue='';
var newListElement=document.createElement('li');
newListElement.appendChild(document.createTextNode(listValue));
newListElement.id=`item${(list.childElementCount)+1}`;
list.appendChild(newListElement);
e.preventDefault();

});


/*document.body.addEventListener('keydown',function(e){
    var newListElement=document.createElement('li');
    newListElement.appendChild(document.createTextNode(`List Item ${(list.childElementCount)+1} `));
    newListElement.id="item3";
    list.appendChild(newListElement);
    console.log(list.childElementCount);
});*/


