
var currentDateObj = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDate);
console.log(currentDateObj);


// DOM object created for #currentDay element -- will be used to color-organize elements 
var currentDate = moment().format("LLLL");
var currentDateDisplay = $("#currentDay");
currentDateDisplay.text(currentDate);

//

$("#buttonID").on("click", function(){

});

// 


var hoursContainer = document.querySelector("#hoursContainer");
//hoursContainer.style.border = "black solid 5px"

//design a for loop that will be prepared to traverse an array that represents a 24 hour day, appending list element for each hour -- place above all function code 
/* for(var i = 0; i < 24; i++){
var listItem = $("<li>").addClass("row");
var hourColumn = $("<div>").addClass("col-1");
var taskColumn = $("<div>").addClass("col-10");
var saveButtonColumn = $("<div>").addClass("col-1");
listItem.append("div");
hoursContainer.append(listItem);
var para = $("<p>").text("hello");
taskColumn.append(para);
console.dir(hoursContainer + "hours container");
console.dir(taskColumn);
console.dir(hourColumn);
console.dir(saveButtonColumn);
 
} */

// for loop using plain JS selectors -- had difficulties with jquery 
for(var a = 9; a < 18; a++ ){
    var hourListRow  = document.createElement("li");
    hourListRow.className = "row time-block";
   // hourListRow.style.border = "red solid 5px";
    var hourColumn = document.createElement("div");
  
    hourListRow.appendChild(hourColumn);
    hoursContainer.append(hourListRow);

    // place columns ---------

    // hour column 
    var hourColumn = document.createElement("div");
    hourColumn.className = "col-1 hour ";
    hourListRow.appendChild(hourColumn);  
    // need to create and insert <p> containing momenet.js hour object into each hour column  (increment ++)

    var hourDisplay = document.createElement("p");
    var listRowTime = moment().startOf('day').add(a,"hour").format("LT");
     hourDisplay.textContent = listRowTime; 
    hourColumn.appendChild(hourDisplay);
     // text for each hour needed in here
     
   
    
    // task column 
    var taskColumn= document.createElement("div");
    taskColumn.className = "col-10 past";
    hourListRow.appendChild(taskColumn);
    var taskTextBox = document.createElement("textarea");
    taskColumn.appendChild(taskTextBox);
    
    //save button column 
    var saveButtonColumn= document.createElement("div"); 
    saveButtonColumn.className = "col-1 saveBtn";
    hourListRow.appendChild(saveButtonColumn);

    var saveButton = document.createElement("button");
    saveButton.innerText = "√";
    saveButtonColumn.appendChild(saveButton);
    
    saveButton.className = "saveBtn";
    
    console.log(moment().startOf('day').add(a, 'hour').calendar());

}




//experiment zone -- Moment.js objects 
var timeObj = moment().startOf('day').add(1,"hour").format("LT") ;
console.log(timeObj);

var timeObj2 = moment().startOf('day').add(2, 'hour').calendar() ;
console.log(timeObj2);

console.log(moment().startOf('day').add(1, 'hour').calendar());
console.log(moment('2010-10-20').isAfter('2010-10-19'));
console.log(moment(timeObj2).isAfter(moment().startOf('day').add(2, 'hour'), "hour"));

// dynamic color coordination : past hours (in relation to current date+time at top ) should be grey -- current hour should be red -- future hours should be green 
// .past .present .future --  classes are already styled in CSS file 
//each time-block needs an input field (no need to reset) and a save button to lock in the data -- may need to transform for <p> to input upon click