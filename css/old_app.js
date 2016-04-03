var $overlay = $('<div id="overlay"></div>');
var $image = $('<img width="50%" height="50%">');
var $caption = $("<p></p>");

// An image to overlay
$overlay.append($image);

// A caption to overlay
$overlay.append($caption);

// To blur out the background
$("body").append($overlay);

$('#imageGallery a').click(function(event){
  event.preventDefault(); // Prevents loading of the image on a different page
  var imageLocation = $(this).attr("href"); // Grabs the image path
  $image.attr("src", imageLocation); // Inserts the image path to the <img> attribute
  
  $overlay.show();
  
  var captionText = $(this).children('img').attr('alt'); // Get's the image text
  $caption.text(captionText);
  
  
});

$overlay.click(function(){
  $overlay.hide();
});