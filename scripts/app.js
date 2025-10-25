function hello(){
    console.log("hello");
    goodbye();
};

function goodbye (){
    console.log("bye bye");
};

function init(){
    console.log("welcome to 106");
    hello();
};

window.onload = init; // it waits until the html and the css finish
// to execute the logic
