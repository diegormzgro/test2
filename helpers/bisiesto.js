
function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function concatenar(y1, y2){
    let year1 = new Number(y1)
    let year2 = new Number(y2)

    let result = ""
    let current = year1
    while(current <= year2){

        if(leapYear(current)){
            result += current.toString()+"@"
        }

        current++;

    }
    result = result.substr(0,result.length-1);
    return result
}

//let result = concatenar(2010, 2021)

module.exports = {
    concatenar
}