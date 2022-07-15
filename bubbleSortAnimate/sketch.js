let a;
let sz, x, y;
let i = 0; // bubble sort
let j = 0;
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 70, 100, 100);
  a = randArray(60, 1, 60);
  sz = 10;
  print(a);
  plotArr(a);
  //frameRate(5);
}

function draw() {
  //check for switch

  if (a[i] > a[i + 1]) {
    
    let temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
  }

  // polot switch
  plotArr(a);

  // increment i inner 
  if (i < a.length - j - 1) {
    i++;
  } else {
    // else increment outer and set i to zero
    i = 0;
    if (j < a.length) {
      j++;
      //print(currentIndex, a.length, a)
    } else {
      i = 0;
      j = 0;
      a = randArray(60, 1, 60);
      //print(a)
      plotArr(a);
    }
  }
}


function bubbleSort(c) {
  for (let i = 0; i < a.length - c - 1; i++) {
    if (a[i] > a[i + 1]) {
      let temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;
    }
  }
}

function plotArr(theA) {
  background(0);
  x = 0;
  for (let i = 0; i < theA.length; i++) {
    
    fill(theA[i], 100, 100);
    rect(x, height - sz * theA[i], sz, height);
    x += sz;
  }
}

function randArray(len, min, max) {
  let resultArray = [];
  for (let i = 0; i < len; i++) {
    let val = floor(random(min, max + 1));
    resultArray[i] = val;
  }
  return resultArray;
}
