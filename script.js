var hours = ["12:00am", "1:00am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am",
            "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"]

var jumboDay = moment().format("dddd, MMMM, Do, GGGG")
var jumboPar = $("#currentDay")
var thFind = $('th')
var middleFind = thFind.next('td')
var lastFind = thFind.next('td').next()
var mHour =moment().format("h:00a")
var idx
jumboPar.text(jumboDay)


function fillDay(){                            //https://learn.jquery.com/using-jquery-core/iterating/
    // var thFind = $('th').toArray()  //different version
    // thFind.forEach(element => {  //different version
    //     var i = thFind.indexOf(element)     //different version
    //     element.append(hours[i])     //different version
    //  }) //different version
      $.each(thFind, (i, value) => {
        thFind[i].append(hours[i])
    });
}

function elementClass () {
    $.each(thFind, (i, e) =>{
        idx = i
    thFind.attr('class', 'text-dark bg-light');
    if (i < hours.indexOf(mHour)){
        middleFind.eq(i).attr('class', 'middle bg-secondary')
    }
    else if (i === hours.indexOf(mHour)){
        middleFind.eq(i).attr('class', 'middle bg-danger')
    }
    else
    {
            middleFind.eq(i).attr('class', 'middle bg-success')

    }
    middleFind.eq(i).attr('id', 'textbox'+i)
    lastFind.attr('class', 'last bg-primary')
    lastFind.eq(i).attr('id', 'save'+i)
    lastFind.children().attr('class', 'mt-4 text-center')
    // middleFind.attr('class', 'middle bg-success')
      
    // console.log(moment().format("h:00a"))
    // console.log(mHour)
    // console.log(hours.indexOf(mHour))
    // console.log(i)
    // console.log(thFind.text())
  
    })
}

fillDay()
elementClass()

lastFind.on("click", function(target){
    console.log($(target).closest('tr').children('textarea').value())//.first('tr'))

})