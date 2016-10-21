/*TASK 1*/
var x, n, result;

do {
    x = prompt("Enter number", '');
} while ((x % 1) || isNaN(x));

do {
    n = prompt("Enter exponent", '');
} while ((n % 1) || isNaN(n));

if ((x !== null && n !== null) && (x !== '' && n !== '')) {
    result = pow(x, n);
} else {
    result = 'Введене число або ступінь не підтримуються';
}


function pow(x, n) {

    if (n > 0) {

        var result = x;

        for (var i = 1; i < n; i++) {
            result = result * x;
        }

        return result;
    } else if (n < 0) {

        var result = x;

        n = n * (-1);
        result = 1 / pow(x, n);
        return result;
    } else {
        return 1;
    }

}

console.log(result);
alert(result);


/*TASK 2*/
var arrName = [];
var userName;

for (var i = 0; i < 5; i++) {
    var userName = prompt('Enter ANY name:','');
    arrName.push(userName);
    }

var login = prompt('Enter YOUR name:','');

var message = 'Error. Your login is not good';

function authorization(uName, fName) {
    var lengthArr = fName.length;

    for (var i = 0; i < lengthArr; i++) {

        if (uName == fName[i]) {
         return message = "Welcome, mr. " + fName[i];
        }
    }
    return alert(message);
}

authorization(login, arrName);

