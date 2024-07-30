// Chapter 1: Alerts
function showAlerts() {
    alert("First Name");
    alert("Last Name");
    alert("Email");
    alert("Phone Number");
    alert("Password");
    alert("You're learning JavaScript!");
    alert("Finished chapter 1 alerts!");
}

// Chapter 2: Variables for Strings
function showVariables() {
    let myVariable = "example";
    let myString;
    myString = "Hello World";
    let teamName = "Jawan Team";
    alert(teamName);
    var bestMan = "Charlie";
    bestMan = "Alex";
}

// Chapter 3: Variables for Numbers
function showMath() {
    let caseQty;
    caseQty = 144;
    var num = 9;
    let total = 5 + 3;
    var merchTotal = 100;
    var shippingCharge = 10;
    var orderTotal = merchTotal + shippingCharge + total;
    console.log(orderTotal);
    let amount = 50;
    amount += 25;
	alert("Order Total value is "+orderTotal);
}

// Chapter 4: Variable Names
function showVariableNames() {
    var productCost = 3.45;
    var nameOfBand = "Some Band";
    let legalVariable = 42;
    let maheenQureshi = "Maheen Qureshi";
    alert("Legal: firstName, lastName, userAge, _userName\nIllegal: 1stName, user-name, first name")
}

// Chapter 5: Math Expressions I
function showMathExpressionsI() {
    var num = 20 % 6;
    let largeNum = 1000 * 2000;
    let result = 50 - 25;
    let remainder = 17 % 4;
    alert("Result = " +7 * 8);
}

// Chapter 6: Math Expressions II
function showMathExpressionsII() {
    let x = 50;
    x++;
    x--;
    var y = 50;
    var z = --y;
    let num = 10;
    let newNum = num--;
    let originalValue = 5;
    let newValue = originalValue++;
    let numValue = 10;
    numValue++;
    alert("New Value "+ numValue);
}

// Chapter 7: Math Expressions III
function showMathExpressionsIII() {
    var calculatedNum = 2 + (2 * 6);
    calculatedNum = (2 + 2) * 6;
    calculatedNum = (2 + 2) * (4 + 2);
    calculatedNum = ((2 + 2) * 4) + 2;
    let cost = (2 + 2) * (4 + 10);
    let units = 2 + (2 * 4) + 10;
    let pressure = 4 / (2 * 4); 
	alert("cost result (2 + 2) * (4 + 10)= "+ cost + "\nunits result 2 + (2 * 4) + 10= "+ units + "\npressure result " + pressure)
}

// Chapter 8: Concatenating Text Strings
function showConcatenation() {
    var num = "2" + "2";
    var message = "Hello," + "Dolly";
    alert(message);
    alert("33" + 3);
    alert("Pakistan " + "Zindabad");
    let concatenatedString = "Number: " + 42;
    let firstName = "Jawan";
    let lastName = "Pakistan";
    let fullName = firstName + " " + lastName;
    alert(fullName);
}

// Chapter 9: Prompts
function showPrompts() {
    let firstName = prompt("Enter first name");
    let country = prompt("Country?", "China");
    var yourName = prompt("Enter Your Name");
    let userInput = prompt("Enter your favorite color", "Blue");
    let firstVar = "Enter your age";
    let secondVar = "25";
    let age = prompt(firstVar, secondVar);
    let city = prompt("Enter a city", "Karachi");
    alert("You entered: " +firstName +"\n"+ country +"\n"+ yourName +"\n"+ userInput +"\n"+ age +"\n"+ city);
}

// Chapter 10: If Statements
function showIfStatements() {
    var city = "Karachi";
    if (city === "Karachi") {
        console.log("The City OF Lights");
		alert("Karachi The City OF Lights")
    }
    let x = 10;
    if (x === 10) {
        x = 20;
    }
}

// Chapter 11: Comparison Operators
function showComparisonOperators() {
    let a = 5;
    let b = 10;
    if (a !== b) {
        // Code here
    }
    if (a >= b) {
        // Code here
    }
    if (x !== 10) {
        x = 15;
    }
    if (10 !== 20) {
        alert("Congratulations!");
    }
    let name = prompt("Enter your first name");
    if (name != "J") {
        alert("No match");
    }
}

// Chapter 12: If…Else and Else If Statements
function showIfElseStatements() {
    let a = 5;
    let b = 10;
    if (a >= b) {
        alert("a is greater or equal to b");
    } else {
        alert("a is less than b");
    }
    let marks = prompt("Enter your marks");
    let percentage = (marks / 100) * 100;
    let grade;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 80) {
        grade = "B";
    } else if (percentage >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }
    alert("Your grade is: " + grade);
    if (a !== 10) {
        alert("The correct value of a is " + a);
    }
    let city = prompt("Enter a city");
    if (city === "Karachi") {
        alert("It's Karachi");
    } else if (city === "Lahore") {
        alert("It's Lahore");
    } else {
        alert("City not recognized");
    }
}

// Chapter 13: Testing Sets of Conditions
function showSetsOfConditions() {
    let a = 5;
    let b = 5;
    let c = 10;
    let d = 10;
    if (a === b && c === d) {
        // Code here
    }
    if (a === b || c !== d) {
        // Code here
    }
    let name = "Hamza";
    let age = 30;
    if ((name === "Hamza" || name === "Arsalan") && age < 60) {
        // Code here
    }
    let var1 = 5;
    let var2 = 10;
    if (var1 < var2 || var1 > var2) {
        alert("Condition met");
    }
    let firstName = prompt("Enter your first name");
    let lastName = prompt("Enter your last name");
    if (firstName === "John" && lastName === "Doe") {
        alert("Name matches");
    }
}

// Chapter 14: Nested If Statements
function showNestedIf() {
    let password = prompt("Enter your password");
    if (password !== "") {
        if (password.length <= 5) {
            alert("Password must be greater than 5");
        } else {
            alert("OK");
        }
    }
    let a = 1;
    let c = "Max";
    if (a === 1) {
        if (c === "Max") {
            alert("OK");
        }
    }
    let var1 = 5;
    let var2 = 5;
    if (var1 === var2) {
        if (var1 <= var2) {
            alert("Both conditions are true");
        }
    }
}

// Chapter 15: Arrays I
function showArraysI() {
    let emptyArray = [];
    let oneElementArray = ["Hello"];
    let alphabet = ["h", "i", "j", "k"];
    alert(alphabet[2]);
    let alphabetLength = alphabet.length;
    alert(alphabetLength);
    let arrayWithTwoElements = ["a"];
    arrayWithTwoElements[1] = "b";
    alert(arrayWithTwoElements[1]);
}

// Chapter 16: Arrays II
function showArraysII() {
    let stringArray = ["Hello"];
    stringArray.push("World");
    alert(stringArray[stringArray.length - 1]);
    let alphabet2 = ["h", "i", "j", "k"];
    alphabet2.pop();
    let alphabet3 = ["h", "i", "j", "k"];
    alphabet3.push(1);
}

// Chapter 16: Arrays III
function showArraysIII() {
    let sizes = ["S", "M", "XL", "XXL", "XXXL"];
    sizes.shift();
    sizes.unshift(1, 2, 3);
    let array = ["first"];
    array.unshift("newFirst");
    alert(array[0]);
    let sizesArray = ["S", "M", "XL", "XXL", "XXXL"];
    sizesArray.splice(2, 0, "L");
    let regSizes = sizesArray.slice(0, 3);
    let pets = ["dog", "cat", "ox", "duck", "frog"];
    pets.splice(1, 3, "fish", "bird");
    pets.splice(1, 2);
    let pets2 = ["dog", "cat", "ox", "duck", "frog", "flea"];
    let reducedPets = pets2.slice(1, 4);
    let petRemoved = pets2.splice(2, 1);
}

// Chapter 17-20: For Loops
function showLoops() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
		alert(i)
    }
    let text = "Hello";
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
		alert(text[i])
    }
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
    let j = 5;
    do {
        console.log(j);
        j--;
    } while (j > 0);
}
