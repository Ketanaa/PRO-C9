var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(800, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b2 = createButton("Multiply");
  b2.position(200, 200);
  b2.mousePressed(mul);
  
  b3 = createButton("DIVISION");
  b3.position(300, 200);
  b3.mousePressed(div);
  
  b4 = createButton("SUBTRACTION");
  b4.position(400, 200);
  b4.mousePressed(sub);
  
  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)
  
  n1=parseInt(num1.value())
  n2=parseInt(num2.value())

}

function add()
{
  console.log(n1+n2)
}

function mul()
{
  console.log(n1*n2)
}

function div()
{
  console.log(n1/n2)
}

function sub()
{
  console.log(n1-n2)
}