// IMAGE SELECTOR

var image = document.getElementsByClassName('image-links');
var imageArray = ['img/j2b-1.png', 'img/j2b-2.png', 'img/j2b-3.png', 'img/j2b-4.png'];
var imageDisplay = document.getElementById('image');

function changeImage(num) {
  image[num].addEventListener('click', function() {
    imageDisplay.src = imageArray[num]
  });
};

for (var i = 0; i < image.length; i++) {
  changeImage(i);
};

// END IMAGE SELECTOR

// HEADER MINIMIZE

// var header = document.getElementById('header');
//
// console.log(header);

// END HEADER MINIMIZE

// STICKY FOOTER

// console.log("window height: " + $(window).height());
// console.log("document height: " + $(document).height());
// console.log("body height: " + $(document.body).height());

function stickyFooter() {
  if ($(document.body).height() <= $(window).height()) {
    // console.log('The footer needs to be stickied');
    $(footer).addClass("sticky-footer");
  } else if ($(document.body).height() > $(window).height()) {
    // console.log('The footer does not need to be stickied');
    $(footer).removeClass("sticky-footer");
  };
};
stickyFooter();

$(window).resize(function() {
  console.log('window resized');
  stickyFooter();
});


// END STICKY FOOTER
