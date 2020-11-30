//VARIABLES
var hours = ["12:00am", "1:00am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am",
            "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm"]

var jumboDay = moment().format("dddd, MMMM, Do, GGGG")
var jumboPar = $("#currentDay")
var thFind = $('th')
var middleFind = thFind.next('td')
var lastFind = thFind.next('td').next()
var mHour = moment().format("h:00a")
var textboxes = $('textarea') 
//SETTING THE JUMBOTRON DAY INFORMATION
jumboPar.text(jumboDay)

//FUNCTION TO POPULATE THE TIME CELLS
function fillDay(){                            
         $.each(thFind, (i, value) => {
        thFind[i].append(hours[i])
    });
}

//FUNCTION TO ADD ATTRIBUTES TO THE VARIOUS ELEMENTS
function elementClass () {
    $.each(thFind, (i, e) =>{
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
    middleFind.eq(i).attr('data-saved', 'save'+i)
    lastFind.attr('class', 'last bg-primary')
    lastFind.eq(i).attr('id', 'save'+i)
    lastFind.eq(i).attr('data-input', 'textbox'+i)
    lastFind.eq(i).children().attr('data-input', 'textbox' + i)
    lastFind.eq(i).children().children().attr('data-input', 'textbox' + i)
    lastFind.children().attr('class', 'mt-4 text-center')
    })
}

//FUNCTION TO RETRIEVE THE SAVED INFORMATION AND POPULATE IT INTO THE CELLS
function savedStuff(){
    $.each(middleFind, (i, v) =>{
        var saved = middleFind.eq(i).attr('data-saved')
       textboxes.eq(i).val(localStorage.getItem(saved))
  
    })
}

//CALLING THE FUNCTIONS
fillDay()
elementClass()
savedStuff()


//EVENT LISTENER FOR THE SAVE BUTTON
lastFind.on("click", function(target){
    var info = target.currentTarget.getAttribute('id') 
    var save = target.currentTarget.getAttribute('data-input')
    var element = $('#'+save).children().children()[0]
    localStorage.setItem(info, element.value)
})