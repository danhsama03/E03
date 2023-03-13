function doiAnh() {
    var input = document.getElementById("img-name");
    var filename = input.value;
    var image = document.getElementById("dice-1");
    image.src = "./img/" + filename;
}
function roll() {
    var max = 6;
    var min = 1;
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;
    var image = document.getElementById("dice-1");
    var image2 = document.getElementById("dice-2");
    image.src = "./img/dice" + a + ".png";
    image2.src = "./img/dice" + b + ".png";
    console.log(image.src);
}
