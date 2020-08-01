import image1 from "./images/background/image1.png";
import image2 from "./images/background/image2.png";
import image3 from "./images/background/image3.png";
import image4 from "./images/background/image4.png";
import image5 from "./images/background/image5.png";
import image6 from "./images/background/image6.png";
import image7 from "./images/background/image7.png";
import image8 from "./images/background/image8.png";
import image9 from "./images/background/image9.png";
import image10 from "./images/background/image10.png";
export { setImage };
var pointer = 0;
var images = [];

var imageFileName;
const TOTAL_IMAGES = 10; // Total images 10 inclusive

images[0] = image1;
images[1] = image2;
images[2] = image3;
images[3] = image4;
images[4] = image5;
images[5] = image6;
images[6] = image7;
images[7] = image8;
images[8] = image9;
images[9] = image10;
console.log(images);
function incrementPointer() {
  pointer = (pointer + 1) % TOTAL_IMAGES;
  return pointer;
}

function decrementPointer() {
  pointer = pointer === 0 ? TOTAL_IMAGES : pointer;
  pointer--;
  return pointer;
}
function setImage(leftArrowstate) {
  var index = leftArrowstate ? decrementPointer() : incrementPointer();

  imageFileName = images[index];

  return imageFileName;
}
