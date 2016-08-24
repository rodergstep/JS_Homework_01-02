                                          /*TASK 1*/
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

var x = prompt("Enter number", '');
var n = prompt("Enter exponent", '');

if (n < 1 ) {
  alert('Ступінь ' + n +
    ' не підтримується, введіть цілу ступінь, більше 1');
} else if (parseInt(x) != x) {
alert('Помилка. Введіть ціле число');
} else {
  alert(pow(x, n));
}
console.log(pow(x, n));
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
