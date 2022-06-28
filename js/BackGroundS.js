class BackGround{
    constructor(){
        this.back = createImg("./assets/Background.png");
        this.ground = createImg("./assets/ground.png");
        this.plataform1 = createImg("./assets/plataform.png");
        this.plataform2 = createImg("./assets/plataform.png");
    }
    setElementsPosition() {
        this.back.position(width / 2 - 800, height / 2 - 385);
        this.ground.position(width / 2 - 800, height / 2 - 385);
        this.plataform1.position(width / 2 - 945, height / 2 - 425);
        this.plataform2.position(width / 2 + 130, height / 2 - 425);
    }

    setElementsStyle() {      
        this.back.class("gameMenu");
        this.ground.class("gameGround");
        this.plataform1.class("gamePlataform");
        this.plataform2.class("gamePlataform");
    }



    display() {
          this.setElementsPosition();
          this.setElementsStyle();
    }
    
}