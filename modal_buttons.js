let imageIndex  = 0;
let postion = 0;

const IMAGE_width = 450;
const btnPrevios = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".images")


function previous() {
    if(imageIndex > 0){
        btnNext.removeAttribute("disabled")
    }
}
