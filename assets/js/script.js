// Display current date

var currentTime = dayjs();
$('#currentDay').text(currentTime.format('dddd[,] MMMM D'));

// setting the local storage

$(document).ready(function() {

    function setNotes() {
    $('.saveBtn').on('click', function(event) {
    
        var textId = $(this).siblings('textarea').attr('id');
        var notes = $(this).siblings('textarea').val();
        localStorage.setItem(textId, notes);
        });
    
    }
    setNotes();


// getting values from the local storage

$('textarea').each(function() {
    var textId = $(this).attr('id');
    console.log(textId);
    var notes = localStorage.getItem(textId);
    $(this).text(notes);

});

// setting the colour of the time block

currentHour = dayjs().format('H');
console.log(currentHour);


$('.time-block').each(function () {
    timeblockHour = $(this).attr('id');
    hourNew = Number(timeblockHour);
    console.log(hourNew); 
        if (hourNew < currentHour) {
            $(this).children('textarea').addClass('past');
        } else if (hourNew == currentHour) {
            $(this).children('textarea').addClass('present')
        } else {
            $(this).children('textarea').addClass('future')
        }

});

});

