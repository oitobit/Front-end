var x;

switch (x = 3) {
    case 0:
        document.getElementById("demo").innerHTML = x;
        break;
    case 1:
        document.getElementById("demo").innerHTML = x;
        break;
    case 3:
        document.getElementById("demo").innerHTML = x;
        break;
    default:
        document.getElementById("demo").innerHTML = "Valor não encontrado";
        break;
}

var day;

switch (new Date().getDay()){
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
}

document.getElementById("weekdays").innerHTML = "Today is " + day + ".";