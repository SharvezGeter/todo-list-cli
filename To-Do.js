const prompt = require('prompt-sync')({sigint: true});
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('Welcome to your personal To-Do list');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log('\n~ Select an action ~');
console.log('[1] Create a to-do item ');
console.log('[2] Complete a to-do item');
console.log('[3] Exit to-do List Application');


let answer = Number(prompt('\n> '));
let toDoList = [];
let statusArray = [];

while(answer !== 3){
    if(answer === 1){
        console.log('~ Creating a new to-do item ~');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('What is this to-do item called?');
        
        let addItem = prompt('> '); // adding to-do item
        while(addItem.length === 0){ //if adding 'Nothing' it will be invalid
            console.log('~Invalid: Input cannot be empty.  Try again: ~')
            addItem = prompt('> ');
        }
        toDoList.push(addItem); // updating todolist with new item
        statusArray.push(false); // adding incomplete to added items in your list
        displayList(); //function that shows your updated list

        // reprompt the user
         selectAnswer();
    } else if(answer === 2){

        if(toDoList.length !== 0){ //if you have items in list continue to run code.
            
        console.log('\n~ Completing a to-do item ~');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('Which to-do item would you like to complete?');
        
        let newStatus = Number(prompt('> ')); // User's response 1 2 3
        
         while(isNaN(newStatus) || newStatus > statusArray.length|| newStatus < 1){
            //new status is NaN    // entering a num that's not on list.
            console.log("Please input a number that corresponds to an item in the list: ")
            newStatus = (Number(prompt("> ")))
         }
        
        statusArray[newStatus-1] = true; //updated status with completed items
        } else {
            console.log("Please add an something to your to-do list.")
        }
    displayList();

    selectAnswer();
}   else {
        console.log('\nInvalid operation');
        selectAnswer();
    }

    function selectAnswer(){
        console.log('\n~ Select an action ~');
        console.log('~ [1] Create a to-do item ~');
        console.log('~ [2] Complete a to-do item~');
        console.log('~ [3] Exit to-do List Application~');
        answer = Number(prompt('\n> '));

    }
    function displayList(){

        if(toDoList.length === 0){
            console.log("Your to-do list is empty.")
        }else{
            console.log(`\nYou have ${toDoList.length} to-do item(s) today.`);
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        }

        for(let i = 0; i < toDoList.length; i++){
            let status = "";
            if(statusArray[i] === false){
                status = "[incomeplete]";
            } else if (statusArray[i] === true){
                status = "[complete]";
            }

             console.log(`${i+1}. ${status} ${toDoList[i]}`);
         }
    }}































/*
1. Figure out the UI
-console.log()
    -welcome message
    -different option (add task, complete task, exit program)
    -error messages for invalid option
    -spacing/separators to make it look nice
-Prompts
    -Numbers to decide which option using ifs
    1. adding a task/create an item -prompt user to create item -
    2. mark task as complete -prompt user for item completed
    3. Exit
-While Loop
    -program has no known ending, so we want to be able to prompt them indefinitly

-Display the todo list to the user.
    -completion status 
    -the name of the item
    -number associated with the item
    -loop to display each item in the todo list

2. Add To-Do Items (choice === 1)
    -prompt for the to-do item
    -save item by storing it in an array
    -an array to keep track of toDo items
    -global array (global variable)
    - .push to add items to array
    
2.5 - how do we set items to be incomplete
    -any item in the list is [incomplete] until we mark it [complete]
    -whenever we add an item to the todo list it is [incomplete] by default.
    
    array of booleans
    true = [complete]
    false = [incomplete]
    [true,      false,          true]           status array
    get food,   wash car,    cut grass          todolist array
     0            1               2             shared index

    let status = [];
    by default, when new item is added, we want to add false boolean
    to our status array.

3. Complete To-Do Items 
    -display todoItems w/ their status
    -pick which item to mark as complete. - swap its status from false to true.
    -display updated list






*/


