
//variable name declared a value of the input of the string
var name = prompt("Please type your name: ");
//function creates a variable, concates two variables and writes them to document
function welcomeName() {
    var greeting = "Welcome ";
    document.write(greeting + name + ". ");
}
//function is called
welcomeName();
//function is created that takes in a users prompt as a variable
function survey() {
    var question = prompt("Will you take a quick questionnaire? (Yes/No): ");
//conditional statement begins, based on the user prompt to variable 'question'
    if (question === "yes" | "Yes" | "YES") {
//variables created that hold the string value of users input
        var hobbies = prompt("What's a hobby you have? ");
        var sports = prompt("How about a favorite sports team? ");
        var food = prompt("What is your favorite food? ");
        var music = prompt("What genre of music do you like? ");
//strings and variables are combined and written to document
        document.write(name + " likes " + hobbies + " and watching the " + sports + " play. ");
        document.write(name + " also likes to eat " + food + " while listening to " + music + " music. ");
//if user enters any other answer other than yes, else response will begin
    } else {
//variables hold the string value of the users input to prompts
        var firstNumber = prompt("Please enter the team number of your favorite sports player: ");
        var secondNumber = prompt("Please enter how many minutes ago you had your last meal: ");
//previous variables are typed as integers and added together to create variable sum
        var sum = +firstNumber + +secondNumber;
//strings and variable are combined and written to document
        document.write("The sum of your two numbers is " + sum + ". ");
    }
    
}
//function is called
survey();
//function is created with local variable 'closing' and global variable 'name', added together and written to document
function byeName() {
    var closing = "See you later ";
    document.write(closing + name + "!");
}
//function is called
byeName();