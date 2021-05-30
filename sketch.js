var car1, car1Image;
var car2, car2Image;
var car3, car3Image;
var car4, car4Image;
var border1, border2, border3, border4;
var carsGroup, stopGroup;
var speed, weight;
var stop1, stop2, stop3, stop4;
var inv1, inv2, inv3, inv4;
var a, b, c, d, e, f, g, h, i, j, k, l;
var Average, Good, Lethal;
var CR1, CR2, CR3, CR4;

function preload(){
 
  car1Image = loadImage("lambor.png");
  
  car2Image = loadImage("nano.png");
  
  car3Image = loadImage("ferrari.png");
  
  car4Image = loadImage("maruti.png");
 
}

function setup() {
  createCanvas(670, 670);
  
  carsGroup = createGroup();
  stopGroup = createGroup();
  
  car1 = createSprite(60, 70, 100, 50);
  car1.addImage("car1", car1Image);
  car1.scale = 0.15;
  carsGroup.add(car1);
  
  border1 = createSprite(300, 110, 730, 5);
  
  car2 = createSprite(60, 160, 100, 50);
  car2.addImage("car2", car2Image);
  car2.scale = 0.3;
  carsGroup.add(car2);

  
  border2 = createSprite(300, 200, 730, 5);
  
  car3 = createSprite(60, 250, 100, 50);
  car3.addImage("car3", car3Image);
  car3.scale = 0.1;
  carsGroup.add(car3);

  
  border3 = createSprite(300, 300, 730, 5);
  
  car4 = createSprite(60, 340, 100, 50);
  car4.addImage("car4", car4Image);
  car4.scale = 0.13;
  carsGroup.add(car4);

  
  border4 = createSprite(300, 380, 730, 5);
  
  
  stop1 = createSprite(570, 70, 5, 60);
  
  stop2 = createSprite(570, 160, 5, 60);
  
  stop3 = createSprite(570, 250, 5, 60);

  stop4 = createSprite(570, 340, 5, 60);
  
  
  inv1 = createSprite(523, 70, 5, 60);
  inv1.visible = false;
  stopGroup.add(inv1);
  inv2 = createSprite(523, 160, 5, 60);
  inv2.visible = false;
  stopGroup.add(inv2);
  inv3 = createSprite(523, 250, 5, 60);
  inv3.visible = false;
  stopGroup.add(inv3);
  inv4 = createSprite(523, 340, 5, 60);
  inv4.visible = false;
  stopGroup.add(inv4);

  speed = Math.round(random(55, 90));  
  
  
}

function draw() {
  background("black");
  createEdgeSprites();  
  
  text("STOP", 600, 70);
  text("STOP", 600, 160);
  text("STOP", 600, 250);
  text("STOP", 600, 340);
  textSize(20);
  text("Click on cars to test them", 230, 20);

 maruti();
  
  ferrari();
  
  nano();
  
  lambor();
  
  stop();
  
 fillTable();
    

 drawSprites();  
}

function lambor() {
  if(mousePressedOver(car1)){
    car1.velocityX = speed;
    car1.weight = Math.round(random(400, 1500));
    car1.speed =  Math.round(random(55, 90))
 ;
  }
  }
  
function nano() {
  if(mousePressedOver(car2)) {
    car2.velocityX = speed;
    car2.weight = Math.round(random(400, 1500)); 
    car2.speed =  Math.round(random(55, 90))
;
  }
}
  
function ferrari() {
  if(mousePressedOver(car3)) {
    car3.velocityX = speed;
    car3.weight = Math.round(random(400, 1500)); 
    car3.speed =  Math.round(random(55, 90))
;
  }
}


function maruti() {
  if(mousePressedOver(car4)) {
    car4.velocityX = speed;
    car4.weight = Math.round(random(400, 1500)); 
    car4.speed =  Math.round(random(55, 90));
;
  }
}

function stop() {
 if(car1.isTouching(inv1)) {
    car1.velocityX = 0;
  }
    
  if(car2.isTouching(inv2)) {
    car2.velocityX = 0;
  }
  
   if(car3.isTouching(inv3)) {
    car3.velocityX = 0;
  }
  
   if(car4.isTouching(inv4)) {
    car4.velocityX = 0;
  }

}

function table() {
  a = createSprite(10, 530, 3, 250);
  b = createSprite(150, 530, 3, 250);
  c = createSprite(270, 530, 3, 250);
  d = createSprite(390, 530, 3, 250);
  e = createSprite(510, 530, 3, 250);
  f = createSprite(630, 530, 3, 250);
  g = createSprite(320, 403, 623, 3);  
  h = createSprite(320, 443, 623, 3);
  i = createSprite(320, 657, 623, 3);
  j = createSprite(320, 503, 623, 3);
  k = createSprite(320, 563, 623, 3);
  l = createSprite(320, 613, 623, 3);
  
  textSize(15);
  text("Car Name", 40, 430);
  text("Weight", 185, 430);
  text("Speed", 310, 430);
  text("Deformation", 410, 430);
  text("Collision Rate", 522, 430);
}

function fillTable() {
  if(car1.isTouching(stopGroup)) {
    table();
    deformation1 = Math.round((0.5*car1.weight*car1.speed*speed)/22500);
   if(deformation1 < 100) {
      CR1 = "Good";
    }
    else if(deformation1 > 100) {
      CR1= "Average";
    }
    else if(deformation1 > 200){
      CR1 = "Lethal";
    }
    text("Lamborghini", 40, 480);
    text(car1.weight, 185, 480);
    text(car1.speed, 320, 480);
    text(deformation1, 430, 480);
    text(CR1, 545, 480);
  }
  
  if(car2.isTouching(stopGroup)) {
    table();
    deformation2 = Math.round((0.5*car2.weight*car2.speed*speed)/22500);
    if(deformation2 < 100) {
      CR2= "Good";
    }
    else if(deformation2 > 100) {
      CR2 ="Average";
    }
    else if(deformation2 > 200){
      CR2= "Lethal";
    }
    text("Nano", 40, 540);
    text(car2.weight, 185, 540);
    text(car2.speed, 320, 540);
    text(deformation2,430, 540);
    text(CR2, 545, 540);
    }
  
  
  if(car3.isTouching(stopGroup)) {
    table();
   deformation3 = Math.round((0.5*car3.weight*car3.speed*speed)/22500);
    if(deformation3 < 100) {
      CR3 ="Good";
    }
    else if(deformation3 > 100) {
      CR3= "Average";
    }
    else if(deformation3 > 200){
      CR3 = "Lethal";
    }
    text("Ferrari", 40, 590);
    text(car3.weight, 185, 590);
    text(car3.speed, 320, 590);
    text(deformation3, 430, 590);
    text(CR3, 545, 590);
    
  }
  
  if(car4.isTouching(stopGroup)) {
    table();
    deformation4 = Math.round((0.5*car4.weight*car4.speed*speed)/22500);
       if(deformation4 < 100) {
      CR4 = "Good";
    }
    else if(deformation4 > 100) {
      CR4= "Average";
    }
    else if(deformation4 > 200){
      CR4 = "Lethal";
    } 
    text("Lamborghini", 40, 640);
    text(car4.weight, 185, 640);
    text(car4.speed, 320, 640);
    text(deformation4, 430, 640);
    text(CR4, 545, 640);
  } 
}

