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
