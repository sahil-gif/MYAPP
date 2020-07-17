class Form2{
    constructor(){
        this.select = createElement('h1');
        //quest1
        //  this.question1 = createElement('h2',"Select the disease you want to check");
        this.question1 = createElement('h2');
        this.radio = createRadio('h4');
        this.radio1 = createRadio('h4');
        this.radio2 = createRadio('h4');
        this.radio.style('width','400px');
        this.radio1.style('width','400px');
        this.radio2.style('width','400px');
    }
    display(){
       background(background2);

        this.question1.html("  Select Disease you want to check ");
        this.question1.position(displayWidth/2-600,displayHeight/2-290);
        this.radio.option('Blood Pressure');
        this.radio1.option('Diabeties');
        this.radio2.option('Covid-19');
  
        this.radio.position(displayWidth/2-550,displayHeight/2-225);
        this.radio1.position(displayWidth/2-400,displayHeight/2-225);
        this.radio2.position(displayWidth/2-250,displayHeight/2-225);

       this.radio.mousePressed (()=>{
         this.radio.hide();
         this.radio1.hide();
         this.radio2.hide();
         this.question1.hide();
         bpQuest1.display();

         })
         this.radio1.mousePressed (()=>{
          this.radio.hide();
          this.radio1.hide();
          this.radio2.hide();
          this.question1.hide();
          dq1.display();
         })
         this.radio2.mousePressed (()=>{
          this.radio.hide();
          this.radio1.hide();
          this.radio2.hide();
          this.question1.hide();
          cq1.display();
         })
    }
}
 //covid = createSprite(100,200);
  // covid.addImage("covid",corona);
 
    //background(rgb(198,135,103));
  //  image(corona, 0,-displayHeight*4,displayWidth, displayHeight*5);
  //this.question1.position(displayWidth/2-100,300);