//Spiega qui

export class Icon { //Classe che serve a ridimensionare le icone
    public scaledSize:ScaledSize;
    constructor(public url: string, size: number){
        this.scaledSize = new ScaledSize(size,size);
    }

    //Spiega qui
    setSize(size: number) { //Metodo per mettere la grandezza
        this.scaledSize = new ScaledSize(size,size);
    }
}

export class ScaledSize { //Classe per dare l'altezza e la larghezza
    constructor(
    public width:  number,
    public height: number){}
}
