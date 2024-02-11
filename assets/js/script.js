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

});