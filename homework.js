// var name = 'Slim Shady';

// var printName = function() {
//   console.log('Hi! My name is', name);
// };

// printName();

// This prints out 'Hi! My name is' concatenated with 'Slim Shady':
// Hi! My name isSlimShady




// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// };

// console.log(result());

// This logs out the value of the function-scope variable score, which has value 3:
// 3




// var myAnimals = ['chickens', 'cats', 'rabbits'];

// var listAnimals = function() {
//   myAnimals = ['ducks', 'dogs', 'lions'];
//   for(var i=0; i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }

// listAnimals();

// This resets the value of the global variable myAnimals to ['ducks', 'dogs', 'lions'].
// It then logs out the value of integer i concatenated with ': ' concatenated with myAnimals[i]:
// 0: ducks
// 1: dogs
// 2: lions




// var suspectOne = 'Alan';
// var suspectTwo = 'Steve';
// var suspectThree = 'John';
// var suspectFour = 'Ally';

// var allSuspects = function() {
//   var suspectThree = 'Adam'
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// };

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

// This sets the value of function-level variable suspectThree to 'Adam'
// It then logs out 'Suspects include:' concatenated with the values of global variable suspectOne, global variable SuspectTwo,
// function-level variable suspectThree and global variable suspectFour.
// Finally, it logs out 'Suspect three is:' concatenated with the value of global variable suspectThree:

// Suspects include:AlanSteveAdamAlly
// Suspect three is:John




// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };

// var printName = function(detective) {
//   return detective.name
// };

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };

// console.log(detectiveInfo());

// When the final line is called, the detectiveInfo function sets the value of the global detective variable's name attribute
// to 'Poirot' and calls the printName method. The printName method returns the new name ('Poirot'), which is logged out:
// Poirot




// var murderer = 'John';

// var outerFunction = function() {
//   var murderer = 'Ally';

//   var innerFunction = function() {
//     murderer = 'Steve';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('The murderer is', murderer);

// When outerFunction() is called, it creates a local variable called murderer with value 'Ally'. outerFunction() then 
// creates a second function, innerFunction(), which sets the value of the local murderer variable to 'Steve', and calls
// this inner function.
// Finally, the last line of the program logs out the value of the global murderer variable, which is 'John':
// John




var murderers = ["Miss Scarlett", "Colonel Mustard", "Mrs White", "Reverend Green", "Mrs Peacock", "Professor Plum", "Miss Peach", "Madame Rose", "Sergeant Gray"];

var findTheCulprit = function(murdererArray){
    return murdererArray[Math.floor(Math.random() * murdererArray.length)];
}

console.log(findTheCulprit(murderers));