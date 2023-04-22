let input = document.querySelector('.input');
let image = document.querySelector('.image');
function qr() {
    event.preventDefault();

    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + input.value;


    document.querySelector('.qr').style.display = "block";

}