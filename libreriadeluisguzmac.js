function bounceOff(pepe,pablo){
    if (pepe.x - pablo.x < pablo.width/2 + pepe.width/2
      && pablo.x - pepe.x < pablo.width/2 + pepe.width/2) {
    pepe.velocityX = pepe.velocityX * (-1);
   pablo.velocityX = pablo.velocityX * (-1);
  }
  if (pepe.y - pablo.y < pablo.height/2 + pepe.height/2
    && pablo.y - pepe.y < pablo.height/2 + pepe.height/2){
    pepe.velocityY = pepe.velocityY * (-1);
    pablo.velocityY = pablo.velocityY * (-1);
  }
  }