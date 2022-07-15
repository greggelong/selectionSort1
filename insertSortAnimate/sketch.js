let a;
let sz, x, y;
let currentIndex=1; // insert sort starts at 1
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 70, 100, 100);
  a = randArray(60, 1, 60);
  sz = 10;
  print(a);
  plotArr(a);
  frameRate(5)
}

function draw() {
 
  insertSort(currentIndex);
  plotArr(a);
  if(currentIndex < a.length-1){
    currentIndex++;
     //print(currentIndex, a.length, a)
  }
   else{
    currentIndex=1;
    a= randArray(60,1,60);
    //print(a)
    plotArr(a)
  }
  
}

function selSort(c) {
  let min;
  min = c; // set min to c;
  for (let i = c + 1; i < a.length; i++) {
    //look through the rest of the list
    if (a[i] < a[min]) {
      // if we find a smaller value on that pass set it min to it

      min = i;
    }
  }
  // switch and move on to the next number after that pass with the smallest number
  temp = a[c];
  a[c] = a[min];
  a[min] = temp;
}


function insertSort(c) {
  // for loop is from clicking
  let insideIndex = c;
  while (insideIndex > 0 && a[insideIndex - 1] > a[insideIndex]) {
    // cascade swaps all the way to one
    temp = a[insideIndex - 1];
    a[insideIndex - 1] = a[insideIndex];
    a[insideIndex] = temp;
    // decriment
    insideIndex --

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
