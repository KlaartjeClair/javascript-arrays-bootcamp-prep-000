var chocolateBars = [
"snickers",
"hundred grand",
"kitkat",
"skittles"
];

function addElementToBeginningOfArray(){
[...chocolateBars, "foo"];
}
 
function destructivelyAddElementToBeginningOfArray(){
  chocolateBars.unshift("foo");
}  

function addElementToEndOfArray(){
  ["foo", ...chocolateBars];
} 

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push("foo");
}

var anArray = [];
function accessElementInArray(){
 }
 
function destructivelyRemoveElementFromBeginningOfArray(){
 anArray.slice(1);
}

function removeElementFromBeginningOfArray(){
 anArray.slice(0);
}

function desrtuctiveliyRemoveElemntFromEndOfArray(){
 anArray.pop();  
}

function removeElementFromEndOfArray(){
 anArray.slice(-1);
  }