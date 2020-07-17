class Form {
  
    constructor(){
      this.title = createElement('h2');
      this.title2 = createElement('h1');
      this.title1 = createElement('h1');
      this.click = createButton('Next');
      
    }
      

    display(){
        background(background1);
        
        this.title1.html("MiFit");
     
       this.title1.position(displayWidth/2-50,displayHeight/2-190);
     
      this.title.html("Way to your Better,");
      this.title.position(displayWidth/2-80,displayHeight/2-10);
      this.title2.html("Health");
      this.title2.position(displayWidth/2-50,displayHeight/2+20);
     // this.click.html("  Next ");
      this.click.position(displayWidth/2-100,displayHeight/2+270);
        
     // form2.hide();
      this.click.mousePressed(()=>{ 
        //  form.hide();
         
         this.title.hide();
         this.title1.hide();
         this.title2.hide();
         this.click.hide();
         //
          form2.display();
      })
      
       
     
    }
    
}
