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
// END HEADER MINIMIZE

// AUDIO TOGGLE

// var audioLink = document.getElementsByClassName("audio-link");
// var audioDisplay = document.getElementsByClassName("link-bundle");
//
// // console.log(audioLink);
// // console.log(audioDisplay);
//
// function addToggleAudioDisplay(num) {
//   audioLink[num].addEventListener('click', function() {
//     if (audioDisplay[num].classList.contains("hidden-audio")) {
//       audioDisplay[num].classList.remove("hidden-audio");
//       stickyFooter();
//     } else {
//       audioDisplay[num].classList.add("hidden-audio");
//       stickyFooter();
//     }
//   });
// }
//
// for (var i = 0; i < audioLink.length; i++) {
//   addToggleAudioDisplay(i);
// };

// END AUDIO TOGGLE

// STICKY FOOTER

// console.log("window height: " + $(window).height());
// console.log("document height: " + $(document).height());
// console.log("body height: " + $(document.body).height());

function stickyFooter() {
  if ($(document.body).height() <= $(window).height()) {
    $(footer).addClass("sticky-footer");
  } else if ($(document.body).height() > $(window).height()) {
    $(footer).removeClass("sticky-footer");
  };
};
stickyFooter();

$(window).resize(function() {
  console.log('window resized');
  stickyFooter();
});


// END STICKY FOOTER
