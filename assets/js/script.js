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

$('.description').each(function() {
    var textId = $(this).attr('id');
    console.log(textId);
    var notes = localStorage.getItem(textId);
    $(this).text(notes);

});

// setting the colour of the time block

currentHour = dayjs().hour();
console.log(currentHour);

$('.time-block').each(function () {
    for (let index = 9; index < 18; index++) {
    
        if (index == currentHour) {
        $('.time-block').addClass('present');
        }

        if (index < currentHour) {
        $('.time-block').addClass('past');
        }
        if (index > currentHour) {
        $('.time-block').addClass('future');
        }
        
    }
    
});


});

