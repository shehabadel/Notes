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

    --regex-- (better check a cheat sheet)
    syntax
    /pattern-string/flags
    forward-slash -> defines start and end of pattern-string
    pattern-string -> the pattern that the string should match
    flags -> define whether you want the search to be case-sensitive
    or whether you want just the first result or all the results

    set and ranges
    \d -> digits
    \w -> selects all characters and digtis
    \W -> selects all white spaces and symbols (anything but characters and digits)
    \s -> selects white spaces only
    \S -> selects all characters,digits, and symbols (anything but white spaces)

    Quantifiers
    select a value multiple times, decide how many times a value should be
    selected.
    for example: [\d]{3} 
    [\d]{2,4} -> between 2 and 4

    ^ -> starts with
    $ -> ends with

    methods
    str.search(pattern)--> returns string position of the first match
    pattern.test(str) --> returns true if there is a match and returns false if there is no match
    str.match(pattern)--> returns the matched string. if the flag is not set to global then it returns
    only the first match, but if the flag is global then it returns array of matches

    in order to set a flag global --> add /g at the end of the pattern
    for example: var pattern = /pen/g;
    add insensitive flag to find upper and lower case matches /pen/gi;

    use the RegExp class

    var pattern = new RegExp('pen','gi');

    pattern for checking sites
    var pattern = /www\.[\w]+\.com$/g

    Form Validation using regex
    var username=document.getElementById('username);
    var loginForm = document.getElementById('login-form');
    var usernameErrPara = document.getElementById('username-err');

    username.addEventListener('input',function(e)
    {
        var pattern = /^[\w]{6,8}$/;
        var currentValue = e.target.value;

        var valid = pattern.test(currentValue);

        if(valid)
        {
            usernameErrPara.style.display='block';
        }
        else{
            username.style.display='none';
        }
    });

    --OOP in Javascript--
    var video ={
        videoName: "Intro to JS",
        fileFormat: "Mp4",
        duration:"2:48",
        owner:"Qaifi",
        getVideoName: function(){
            return this.videoName
        },
        getFileFormat : function(){
            return this.fileFormat
        }
        getDuration: function(){
            return this.duration;
        }
        getOwner: function(){
            return this.owner;
        }
    }

    this keyword-> referes to the current context, it referes
    to a single object, and usually used inside a function or a method
    to access properties and methods which are a part of the object
    which is associated with the function

    --Constructor--

    var person ={
        name:'Jack',
        yearOfBirth:1990,
        job:'Secret Agent'
    }    

    function Person(pName, pYearOfBirth, pJob)
    {
        this.name=pName;
        this.yearOfBirth= pYearOfBirth;
        this.job=pJob

        this.calculateAge = function(){
            console.log(2019-this.yearOfBirth);
        }
    }
    var john = new Person('John',1992,'Pilot');
    john.calculateAge();

    --Inheritance--
        --prototype implementation--
        
        
    var person ={
    name:'Jack',
    yearOfBirth:1990,
    job:'Secret Agent'
    }    

function Person(pName, pYearOfBirth, pJob)
{
    this.name=pName;
    this.yearOfBirth= pYearOfBirth;
    this.job=pJob
}
Person.prototype.calculateAge= function () {
    console.log(2021-this.yearOfBirth);
}
Person.prototype.updateYearofBirth= function(birthYear){
    this.yearOfBirth=birthYear;
}
Person.prototype.lastName="Claire";
var john = new Person('john', 1992, 'pilot');
john.calculateAge();

-HTTP Requests and Posts--
requests to backend are sent using HTTP. it is a protocol which
allows the fetching of data from the server. it is the foundation
of any data exchange on the web

Clients and servers communicate by exchanging individual
messages. The messages sent by the client are called requests
the messages sent by the server as an answer called responses


HTTP Methods
GET-> used to get some data from the backend. The data can be
JSON object or a JSON Array

POST-> used to create new data entries on the backend. It accepts
some data in the request and takes that data to the backend for
creation

PUT-> used to update an existing data entry on the backend.
It accepts some data in the request and takes that data to the
backend for updating

DELETE-> used to delete an existing data entry on the backend


Request Method: GET
it tells the request needs to return some data

URL: "https://jsonplaceholder.typicode.com/todos"
the complete URL for the HTTP call

Backend URL: "https://jsonplaceholder.typicode.com"
It points to the backend server

TODO Endpoint:"/todos"
it tells the backend what is requested by the frontend


-RESPONSES Codes--
200-> Sucess
400-> Bad request
401-> Unauthorized
404-> Not found
500-> Something went wrong(failed at the backend and the request cannot be completed)


--Introduction to JSON--
Javascript Object Notation
text format that makes it easy to share data between clients and servers
its origin is based on how javascript object works so thats why it looks like
a javascript object

var myObj ={
    "name":'John',
    "age":28
}
var mArr=[
    {
    "name":'Ahmed',
    "age":26
},
{
    "name":'Mohamed',
    "age":24
},
{
    "name":'Adel',
    "age":59
},
{
    "name":'Shehab',
    "age":21
}
]
console.log(mArr[0].age);

console.log(JSON.stringify(myObj)); -> converts JSON to string
console.log(JSON.parse(myObj)); -> converts string to JSON object
--JSON.stringify() ignores undefined values and any functions
it accepts string,number, boolean, array, object, null

--Introduction to AJAX--
AJAX is a short form for Asynchronous Javascript and XML.
It allows web pages to be updated asynchronously by exchanging
data with the backend. This makes it possible to update parts
of a web page without reloading the whole page.

Initially AJAX was used to send and receive XML because that
was how the data received from the backend in the old days.
But now it can be used to send/receive JSON objects which pretty
common these days

Asynchronous Code
-> Say there is a line of code which takes 5 seconds to execute
this would just mean that javascript will have to wait 5 seconds
before it can move on to execute more lines of code

To avoid this there is another way to execute a specific part
of code such that the execution starts and it runs in the 
background which allows rest of the code to be executed
Running code in the background is called Asynchronous Execution

XMLHttpRequest Object
AJAX uses a browser built-in XMLHttpRequest object to make
requests to the backend server. This gave a simple and standard
way to make HTTP requests from Javascript to get content and update
the HTML page

function getTODOList(){
    var http = new XMLHttpRequest();
    http.open('GET','https://jsonplaceholder.typicode.com/todos/',true);
    http.send();
}
getTODOList();


--Handling HTTP Requests--
readyState Property

The XMLHTTPRequest object gives us access to another property
called readyState. The readyState property holds the status of
the XMLHTTPRequest

There are several status for the request

-UNSENT-> means that the request has been initiated but open()
not called yet. It is represented by the value o.
-OPENED-> means that open() has been called. it is represented by value 1
-HEADERS RECEIVED: means that send() has been called. it is represented by value 2
-LOADING: means that the request is being processed. It is represented by the value 3
-DONE: means that the request is completed and the response is ready. It is represented by the value 4

-OnReadyStateChange- property
XMLHTTPRequest also gives us access to another property called
onreadystatechange. the onreadystatechange property defines
a function to be executed when the readyState changes

function getTODOList(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState===4)
        {
            if(this.status===200)
            {
            console.log('Response Received');
            console.log(JSON.parse(this.responseText));
            }else
            {
                console.log("Call failed");
            }
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos/',true);
    http.send();
}
getTODOList();


--Working with HTTP Response Data--

function createTODODynamically(id, title)
{
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(title);
    newListElement.appendChild(textNode);
    newListElement.id = id;
    return newListElement;
}

function getTODOList(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState===4)
        {
            if(this.status===200)
            {
            console.log('Response Received');
            console.log(JSON.parse(this.responseText));
            var response = JSON.parse(this.responseText);
            for(let i=0; i<7; i++)
            {
                console.log(createTODODynamically(response[i].id,response[i].title));
            }
            }else
            {
                console.log("Call failed");
            }
        }
    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos/',true);
    http.send();
}
getTODOList();


--Making HTTP Post Requests--

function createTODOItemAtBackend(){
    var http = new XMLHttpRequest();
    http.open('POST','https://jsonplaceholder.typicode.com/todos/', true);
    var obj = JSON.stringify({
        "userId":1,
        "title":"Hello daft punk!",
        "completed":false;
    });
    http.send();
}




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


