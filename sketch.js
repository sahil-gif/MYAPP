var background1 ;
var corona,diabeties,bloodPressure;
var form,form2;
var bpQuest1;
var dq1;
var cq1 ; 
var covid,sugar,bp ;
var diseases;
var background2;
function preload (){
    background1 = loadImage("backform2.png");
    corona = loadImage("covid19.png");
    diabeties = loadImage("sugar.png");
    bloodPressure = loadImage("bp.png");
    background2 = loadImage("backform3.png");

}
function setup(){
    canvas = createCanvas(displayWidth-10,displayHeight);
    form = new Form();
    form2 = new Form2();
    bpQuest1 = new bpq();
    dq1 = new dq();
    cq1 = new cq();
}
function draw(){
    //background(background1);
    form.display();
   // form2.display();
}