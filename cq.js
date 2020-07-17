class cq{
    constructor(){
        this.quest = createElement('h2');
        this.radio1 = createRadio('h3');
        this.radio2= createRadio('h3');

        this.quest2 = createElement('h2');
        this.radio3 = createRadio('h3');
        this.radio4 = createRadio('h3');

        this.quest3 = createElement('h2');
        this.radio5 = createRadio('h3');
        this.radio6 = createRadio('h3');

        this.quest4 = createElement('h2');
        this.radio7 = createRadio('h3');
        this.radio8 = createRadio('h3');

        this.quest5 = createElement('h2');
        this.radio9 = createRadio('h3');
        this.radio10 = createRadio('h3');

        this.quest6 = createElement('h2');
        this.radio11 = createRadio('h3');
        this.radio12 = createRadio('h3');

        this.quest7 = createElement('h2');
        this.radio13 = createRadio('h3');
        this.radio14 = createRadio('h3');

        this.quest8 = createElement('h2');
        this.radio15 = createRadio('h3');
        this.radio16 = createRadio('h3');

        this.back = createButton('BACK');


    }
    display(){
        this.quest.html("Q) Are you experiencing fever & dry cough ?");
        this.quest.position(displayWidth/2-600,displayHeight/2-390);
        this.radio1.option('Yes');
        this.radio1.position(displayWidth/2-550,displayHeight/2-325);
        this.radio2.option('No');
        this.radio2.position(displayWidth/2-400,displayHeight/2-325);

        this.quest2.html("Q) Are you experiencing tiredness ?");
        this.quest2.position(displayWidth/2-600,displayHeight/2-290);
        this.radio3.option('Yes');
        this.radio3.position(displayWidth/2-550,displayHeight/2-225);
        this.radio4.option('No');
        this.radio4.position(displayWidth/2-400,displayHeight/2-225);

       
          this.quest3.html("Q) Are you expiriencing aches,pains & sore throat ?");
         this.quest3.position(displayWidth/2-600,displayHeight/2-190);
         this.radio5.option('Yes');
         this.radio5.position(displayWidth/2-550,displayHeight/2-125);
         this.radio6.option('No');
         this.radio6.position(displayWidth/2-400,displayHeight/2-125); 
 
         this.quest4.html("Q) Are you experiencing diarrhoea & conjunctivitis ?");
         this.quest4.position(displayWidth/2-600,displayHeight/2-90);
         this.radio7.option('Yes');
         this.radio7.position(displayWidth/2-550,displayHeight/2-25);
         this.radio8.option('No');
         this.radio8.position(displayWidth/2-400,displayHeight/2-25);

         this.quest5.html("Q) Are you experiencing difficulty in breathing or shortness of breath ?");
         this.quest5.position(displayWidth/2-600,displayHeight/2+10);
         this.radio9.option('Yes');
         this.radio9.position(displayWidth/2-550,displayHeight/2+75);
         this.radio10.option('No');
         this.radio10.position(displayWidth/2-400,displayHeight/2+75);

         this.quest6.html("Q) Are you experiencing chest pain or pressure ?");
         this.quest6.position(displayWidth/2-600,displayHeight/2+110);
         this.radio11.option('Yes');
         this.radio11.position(displayWidth/2-550,displayHeight/2+175);
         this.radio12.option('No');
         this.radio12.position(displayWidth/2-400,displayHeight/2+175);

         this.quest7.html("Q) Are you experiencing  loss of speech or movement ?");
         this.quest7.position(displayWidth/2-600,displayHeight/2+210);
         this.radio13.option('Yes');
         this.radio13.position(displayWidth/2-550,displayHeight/2+275);
         this.radio14.option('No');
         this.radio14.position(displayWidth/2-400,displayHeight/2+275);

        /*  this.quest8.html("Q) Are you a rash on skin, or discolouration of fingers or toes ?");
         this.quest8.position(displayWidth/2-600,displayHeight/2+310);
         this.radio15.option('Yes');
         this.radio15.position(displayWidth/2-550,displayHeight/2+375);
         this.radio16.option('No');
         this.radio16.position(displayWidth/2-400,displayHeight/2+375); */

         //this.back.html('BACK');
         this.back.position(displayWidth/2+400,displayHeight/2-350);
 
         this.back.mousePressed (()=>{
            form2.display();
             this.back.hide();
             this.radio3.hide();
             this.radio1.hide();
             this.radio2.hide();
             this.quest.hide();
             this.radio4.hide();
             this.radio5.hide();
             this.radio6.hide();
             this.radio7.hide();
             this.radio8.hide();
             this.radio9.hide();
             this.radio10.hide();
             this.radio11.hide();
             this.radio12.hide();
             this.radio13.hide();
             this.radio14.hide();
             
             this.quest2.hide();
             this.quest3.hide();
             this.quest4.hide();
             this.quest5.hide();
             this.quest6.hide();
             this.quest7.hide();
            
 
            
            })

    }
}