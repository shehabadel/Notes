/*
--Introduction to jQuery--
    ->JavaScript Library
    ->Fast, lightweight, and feature-rich
    ->based on the principle "write less, do more"
    ->supported by all major browsers

--What can jQuery do--
    ->HTML/DOM manipulation
    ->CSS manipulation
    ->Handling HTML Event
    ->Effects and animations
    ->making AJAX calls

--Advantages of jQuery--
Saves lots of time:
    ->provides you with tons of in-built functionalities that you
    can directly use or else you would have to write it yourself
    using JavaScript

Simplify common JavaScript tasks:
    ->it helps you write the same functionality with lesser lines
    of code than JavaScript


    --Selectors and Filters--
    Selectors and Filters provide a way of finding and extracting
    information from our web page

    Selectors are used to select the HTML elements using CSS-like
    selectors
    e.g.
        $('p')
        ->this above statement will select all the HTML elements
        with the paragraph tag and will return it as a list of objects

        $('#topbar') -> selecting all HTML elements with id topbar
        $('header section') -> selecting all sections inside header

    Filters are used to refine the results returned from the selectors
    e.g.
    $('p:first')
    -> ":first" is a filter which selects the first paragraph
        returned by $('p') selector.
    The above line can also be written as $('p').first() 

    $('#item')
        this selects an element which has an id #item
    $('#item[type]')
        this selects an element which has an id item and contains
        an attribute called type
    
    $('#item[type=text]')
        this selects an element which has an id item and contains
        an attribute called type and has value text

    $('#item').eq(2)
        exits query after 2 items listed

    $(document).ready(function() {
        console.log('DOM Tree');
    })

--Selectors regex--

$('td[name ="tcol1"]')   // matches exactly 'tcol1'
$('td[name^="tcol"]' )   // matches those that begin with 'tcol'
$('td[name$="tcol"]' )   // matches those that end with 'tcol'
$('td[name*="tcol"]' )   // matches those that contain 'tcol'


--Add/Delete HTML Elements--
the equivalent of JavaScript's innerHTML in jQuery is the html()
method. We can use the html() method to get content of selected HTML
element. this content can either be text or more HTML elements

To get values: $('selector').html()
to set values: $('selector').html(childElement)

$('#id-of-an-element').html() -> returns innerHTML

var list = $('#todo-list');

var listItem = `<li>First list Item</li>`;
console.log(listItem);
list.append(listItem)

var listItem1 = `<li>First list Item1</li>`;
var listItem2 = `<li>First list Item2</li>`;
var listItem3 = `<li>First list Item3</li>`;
var listItem4 = `<li>First list Item4</li>`;
list.append(listItem1,listItem2,listItem3,listItem4);

list.last().remove()
list.eq(1).remove()


--Add/Update Styles--
to get CSS of an HTML element, we can use the css() method
it accepts the css property name as an argument and it returns
the value of the first matched HTML element

$('section').css('background-color')
$('#todoList').css('font-size');

-> to update it
$('#todo-count').css('font-size','48px');

$('#date1') -> selects the first element that has an id date1
$('span[id="date1"]') -> selects all elements that has an id date1

passing an object
$('span[id="date1"]').css({
'font-size':'48px',
'color':'red'
});

$('element').toggleClass('class') -> if class is present in element it removes it
and if its not there, it adds it


--Handling Events using jQuery--
Handling Events
we can use the event name followed by parenthesis

$('selector').event-name(function(){
  etc...
});

--Handling HTML Events--

btnAdd.on('click', function(){whatever happens})

btnAdd.on({
  'input':function(e){
    currentInputValue=e.target.value;
  },
  'keyup': function(e)
  {
    if(e.keyCode===13)
    {
      createTODOItemBackend();
    }
  }
})

--Handling AJAX calls--
jQuery supports AJAX calls and gives us access to methods to
make HTTP calls

$.get(URL,callback);

$.get('...',function(){
  body...
})

$.post('', json-object, function(data,status){to do when get response})

-----------------------------W3 Schools-----------------------------

--Introduction--
$(document).ready(function(){
  $("p").on('click',function(){
    $(this).hide();
  });
});

--Syntax--

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".

$(document).ready(function(){})
This is to prevent any jQuerycode from running before
the document is finished loading (is ready).

$(function(){

  // jQuery methods go here...

});

--Selectors--
("*")	Selects all elements	
$(this)	Selects the current HTML element	
$("p.intro")	Selects all <p> elements with class="intro"	
$("p:first")	Selects the first <p> element	
$("ul li:first")	Selects the first <li> element of the first <ul>	
$("ul li:first-child")	Selects the first <li> element of every <ul>	
$("[href]")	Selects all elements with an href attribute	
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	Selects all even <tr> elements	
$("tr:odd")	Selects all odd <tr> elements
*/


function nullAlert(listTask, listTaskDate) {
  var alertTrigger = listTask == "" || listTaskDate == "" ? true : false;

  if(alertTrigger)
  {
    alert("there is an empty field!");
    
  }
  return alertTrigger;
}

$('#saveDoneList').on('click', function () {

  
  var doneList = $('#doneList');
  var doneListTask = $('#doneListTask').val();
  var doneListTaskDate = $('#doneListTaskDate').val();
  var nullCheck= nullAlert(doneListTask,doneListTaskDate);

  if (nullCheck) {
    return;
  }

  var doneItem = `<li class="list-group-item bg-transparent">
<div id="item${(doneList.length) + 1}" class="card item-border bg-transparent">
  <div class="card-body border-0">
    <p class="lh-lg item-text">${doneListTask}
    </p>
    <div class="d-flex justify-content-between">
      <div id="profile">
        <i id="avatar1"><img class="rounded-circle" src="img/avatar.png"></i>
        <span id="profileName1" class="item-profile-text">Abdo Moota</span>
      </div>
      <div id="timestamp" class="align-self-center">
        <i><img src="img/date-icon.png"></i>
        <span id="date1" class="item-profile-text">${doneListTaskDate}</span>
      </div>
    </div>
  </div>
</div>
</li>`;
  doneList.append(doneItem);
  $('#saveDoneList').attr("data-bs-dismiss","modal");
});

$('#saveInWorkList').on('click', function () {
  var inworkList = $('#inworkList');
  var inworkListTask = $('#inworklistTask').val();
  var inworkListTaskDate = $('#inworklistTaskDate').val();
  var nullCheck= nullAlert(inworkListTask,inworkListTaskDate);

  if (nullCheck) {
    return;
  }

  var inworkItem = `<li class="list-group-item bg-transparent">
<div id="item${(inworkList.length) + 1}" class="card item-border bg-transparent">
  <div class="card-body border-0">
    <p class="lh-lg item-text">${inworkListTask}
    </p>
    <div class="d-flex justify-content-between">
      <div id="profile">
        <i id="avatar1"><img class="rounded-circle" src="img/avatar.png"></i>
        <span id="profileName1" class="item-profile-text">Abdo Moota</span>
      </div>
      <div id="timestamp" class="align-self-center">
        <i><img src="img/date-icon.png"></i>
        <span id="date1" class="item-profile-text">${inworkListTaskDate}</span>
      </div>
    </div>
  </div>
</div>
</li>`;
  inworkList.append(inworkItem);
});


$('#saveTodoList').on('click', function () {
  var todoList = $('#todoList');
  var todoListTask = $('#todolistTask').val();
  var todoListTaskDate = $('#todolistTaskDate').val();
  var nullCheck= nullAlert(todoListTask,todoListTaskDate);

  if (nullCheck) {
    return;
  }

  var todoItem = `<li class="list-group-item bg-transparent">
<div id="item${(todoList.length) + 1}" class="card item-border bg-transparent">
  <div class="card-body border-0">
    <p class="lh-lg item-text">${todoListTask}
    </p>
    <div class="d-flex justify-content-between">
      <div id="profile">
        <i id="avatar1"><img class="rounded-circle" src="img/avatar.png"></i>
        <span id="profileName1" class="item-profile-text">Abdo Moota</span>
      </div>
      <div id="timestamp" class="align-self-center">
        <i><img src="img/date-icon.png"></i>
        <span id="date1" class="item-profile-text">${todoListTaskDate}</span>
      </div>
    </div>
  </div>
</div>
</li>`;

  todoList.append(todoItem);
  $("#doneModal").removeClass("show");
});