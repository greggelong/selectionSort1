// javascrip from the sudo code from brilliant.com

//  but also a nice discusssion of it at https://www.doabledanny.com/selection-sort-javascript

let a;
let sz, x, y;
let sorted = false;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 70, 100, 100);
  a = randArray(60, 1, 60);
  sz = 10;
  print(a);
  background(0)
  plotArr(a);
}

function mouseReleased() {
  if (!sorted) {
    selSort();
    print("sorted", a);
    sorted = true;
    background(0);
    plotArr(a);
  } else {
    a = randArray(60, 1, 60);
    sorted = false;
    background(0);
    plotArr(a);
  }
}

function selSort() {
  
  for (let c = 0; c < a.length; c++) {
    //looping through the whole list
    let mini = c; // set min to c;
    
    
    for (let i = c + 1; i < a.length; i++) {
      //look through the rest of the list
      if (a[i] < a[mini]) {
        // if we find a smaller value on that pass set it min to it

        mini = i;
      }
    }
    // switch and move on to the next number after that pass with the smallest number
    temp = a[c];
    a[c] = a[mini];
    a[mini] = temp;
  }
}
function plotArr(theA) {
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
