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
*/


$('#saveDoneList').on('click', function () {
    var doneList = $('#doneList');
    var doneListTask = $('#doneListTask').val();
    var doneListTaskDate = $('#doneListTaskDate').val();

    var doneItem = `<li class="list-group-item bg-transparent">
<div id="item${(doneList.length)+1}" class="card item-border bg-transparent">
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
});

$('#saveInWorkList').on('click', function () {
    var inworkList = $('#inworkList');
    var inworkListTask = $('#inworklistTask').val();
    var inworkListTaskDate = $('#inworklistTaskDate').val();

    var inworkItem = `<li class="list-group-item bg-transparent">
<div id="item${(inworkList.length)+1}" class="card item-border bg-transparent">
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

    var todoItem = `<li class="list-group-item bg-transparent">
<div id="item${(todoList.length)+1}" class="card item-border bg-transparent">
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
});