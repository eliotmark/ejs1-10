//write first method
function sleep_in(weekday,vacation) {
    return !weekday || vacation;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    return a_smile&&b_smile || !a_smile&&!b_smile;
}

function string_times(str, int) {
    var strTwo = "";
    for(i=0; i<int; i++){
        strTwo += str;
    }
    return strTwo;
}

function front_times(str, int) {
    var strTwo = "";
    var strTwoSub = str.substring(0, 3);
    for(var i=0; i<int; i++){
        strTwo = strTwo + strTwoSub;
    }
    return strTwo;
}

function string_bits(str) {
    var strTwo = "";
        for (var i=0; i<str.length; i++) {
            if(i%2==0) {
                strTwo = strTwo + str.substring(i, i + 1);
            }
        }
    return strTwo;
}

function caughtSpeeding(speed, birthday){
    var result = 0;
    if(speed<=60 && !birthday){
        result = 0;
    }
    if(speed<=65 && birthday){
        result = 0;
    }
    if(61<=speed && speed<=81 && !birthday){
        result = 1;
    }
    if(66<=speed && speed<=86 && birthday){
        result = 1;
    }
    if(speed>=81 && !birthday){
        result = 2;
    }
    if(speed>=86 && birthday){
        result = 2;
    }
    return result;
}

function fizz_buzz(int){
    var fizzString = int;
    if(int%15==0){
        var fizzString = "FizzBuzz";
    }
    else if(int%3==0){
        var fizzString = "Fizz";
    }
    else if(int%5==0) {
        var fizzString = "Buzz";
    }
    else if(int%15!==0){
        var fizzString = fizzString + "!";
    }
    return fizzString;
}

function teaParty(tea, candy){
    var party = "";
    if(tea >= 5 && candy >=5) {
        party = 1;
    }
    if(candy >= 2*tea || tea >= 2*candy){
        party = 2;
    }
    if(tea < 5 || candy < 5){
        party = 0;
    }
    return party;
}

function blackjack(numOne, numTwo){
    var card = "";
    if(numOne > numTwo && numOne <= 21){
        card = numOne;
    }
    if(numOne > numTwo && numOne > 21 && numTwo <= 21){
        card = numTwo;
    }
    if(numOne < numTwo && numTwo <= 21){
        card = numTwo;
    }
    if(numOne < numTwo && numOne <= 21 && numTwo > 21){
        card = numOne;
    }
    return card;
}


function loneSum(intOne, intTwo, intThree){
    var sum = "";
    if(intOne !== intTwo && intOne !== intThree && intTwo !== intThree){
        sum = intOne + intTwo + intThree;
    }else if(intOne == intTwo){
        sum = intThree;
    }else if(intOne == intThree){
        sum = intTwo;
    }else if(intTwo == intThree){
        sum = intOne;
    }
    if(intOne == intTwo && intOne == intThree && intTwo == intThree){
        sum = 0;
    }
    return sum;
}

//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(Hello, 3);
    document.getElementById("output").innerHTML += front_times(Exciting, 2);
    document.getElementById("output").innerHTML += string_bits(Exciting);
    document.getElementById("output").innerHTML += caughtSpeeding(55, true);
    document.getElementById("output").innerHTML += fizz_buzz(55);
    document.getElementById("output").innerHTML += teaParty(8, 16);
    document.getElementById("output").innerHTML += blackjack(20, 16);
    document.getElementById("output").innerHTML += loneSum(5, 3, 1);
    //test third method, etc
}
