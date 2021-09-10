
function getDates(d0, d1) {
    let counter = 0
    
    var dateStart = new Date(d0)
    var dateEnd = new Date(d1)

    var current = dateStart
    
    var startyear = dateStart.getFullYear()
    var endyear = dateEnd.getFullYear()
  //  console.log(startyear, endyear)

    while(current <= dateEnd){
        //hacer el check de domingo
        let checksunday = new Date(current.getFullYear(), current.getMonth() +1, 0)
        if(checksunday > dateEnd)
        {
            break
        }

        if(checksunday.getDay() === 0){
            counter++
        }

        //console.log(checksunday.getDate(), checksunday.getDay(), current)
        

        var month = dateStart.getMonth()
        if(month === 11){
            current = new Date(current.getFullYear() + 1, 0, 1)
        }
        else{
            current = new Date(current.getFullYear(), current.getMonth() + 1, 1)
        }

       // console.log("bandera", current)
    }
    //to avoid modifying the original date
   // console.log("dias domingo", counter)
    return counter
    
}

//let result = getDates("August 28, 2019", "September 2, 2021")
//console.log(result, "result")


module.exports = {
    getDates
}

/*
const theDate = dateStart
    while (theDate < dateEnd) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    return dates

*/