var month = $("#month")
var day = $("#days")
var months = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


console.log(moment().add(-1, 'd'))
console.log(moment().format("MMMM YYYY"))
console.log(moment([2010, 0, 31]))
console.log(day.children())


month.text(moment().format("MMMM YYYY"))

function setDays(){
    months.forEach(function(element){
        var i = months.indexOf(element)
        day.children()[i].append(element)

    })
}
setDays()