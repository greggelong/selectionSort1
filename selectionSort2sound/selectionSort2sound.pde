import processing.sound.*;

SqrOsc sqr;

// using a saw wave but still called it sqr
int [] a;
float sz;
int i=1;// inside looo
int j=0;// outside loop
int mini =0; // minumum index


void setup() {
  size(600, 600);
  colorMode(HSB, 70, 100, 100);
  background(0);
  a = new int[60];
  sz = 10;
  mkranda();
  plota();
  println(a.length);
  sqr = new SqrOsc(this);
  sqr.play();
  sqr.amp(0.3);
  //frameRate(5);
}

void draw() {

  // increment
  if (i < a.length) { // this really needs to be -2 as the condition above checks i+1



    // check one time through get the index of the lowest
    if (a[i]<a[mini]) {
      // mini takes the index of lower value
      mini =i;
      //sing the min
      float frequency = map(a[i], 0, 59, 300, 30);
      sqr.freq(frequency);
    }
    i++; // increment inner loop

    // println(i, a.length);
  } else {
    // swap
    int temp =a[j];
    a[j]=a[mini];
    a[mini]= temp;
    plota();
    //println(mini,j);

    if (j < a.length-1) {
      j++;
      mini = j;
      i=j;
      //println(i);
    } else {
      j=0;
      i=1;
      mini= 0;
      mkranda();
      plota();
    }
  }
}

void mkranda() {
  for (int i =0; i <a.length; i++) {
    a[i]= floor(random(1, 61));
    //println(i, a[i]);
  }
}

void plota() {
  background(0);
  for (int i =0; i <a.length; i++) {
    fill(a[i], 100, 100);
    stroke(100);
    rect(sz*i, height-a[i]*sz, sz, a[i]*sz);
  }
}
