function doiAnh(): void {
    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("img-name");
    let filename: string = input.value;
    let image: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    image.src = "./img/" + filename;
}

function roll(): void {
    const max: number = 6;
    const min: number = 1;

    let a: number = Math.floor(Math.random() * (max - min + 1)) + min;
    let b: number = Math.floor(Math.random() * (max - min + 1)) + min;

    let image: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-1");
    let image2: HTMLImageElement = <HTMLImageElement>document.getElementById("dice-2");

    image.src = "./img/dice" + a + ".png";
    image2.src = "./img/dice" + b + ".png";

    console.log(image.src);
}