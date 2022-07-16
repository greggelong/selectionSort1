int [] a;
float sz;
int i=0;// inside looo
int j=0;// outside loop


void setup() {
  size(600, 600);
  colorMode(HSB, 70, 100, 100);
  background(0);
  a = new int[60];
  sz = 10;
  mkranda();
  plota();
  println(a.length);
}

void draw() {

  if (a[i]>a[i+1]) {
    // swap
    int temp =a[i];
    a[i]=a[i+1];
    a[i+1]= temp;
    //println(i+1, j);
  }
  plota();
  // increment
  if (i < a.length-j-2) { // this really needs to be -2 as the condition above checks i+1
    i++; // increment inner loop
    println(i, a.length);
    }else {
      i=0;
      if(j < a.length){
        j++;
      }else{
    j=0;
    i=0;
    mkranda();
    plota();
      }
  }

}

void mkranda() {
  for (int i =0; i <a.length; i++) {
    a[i]= floor(random(1, 61));
    println(i, a[i]);
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
