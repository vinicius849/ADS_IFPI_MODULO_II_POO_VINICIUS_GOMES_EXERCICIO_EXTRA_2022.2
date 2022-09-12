class ControledeAudio {
    volume : number = 2;

    aumentarVolume() : void {

    while (this.volume < 10) {
    this.volume++;
    }
}
    
    diminuirVolume() : void {

    while (this.volume > 0) {
    this.volume--;
    }
    }

    getVolume() : number {
        return this.volume;
    }

}