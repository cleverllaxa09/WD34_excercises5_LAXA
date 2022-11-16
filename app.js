var slideImg = document.getElementById("slideImg")

var images = new Array(
  "images/slider/img1.jpg",
  "images/slider/img2.jpg",
  "images/slider/img3.jpg",
  "images/slider/img4.jpg",
);

var len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;

  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()',3000)
}