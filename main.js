const canvas = new fabric.Canvas('c');

const shape_btns = document.querySelectorAll('.shape_item');

let cur_shape = null;
let selected_shape = null;
shape_btns.forEach( (ele) => {
    ele.addEventListener('click', (e)=>{
        console.log("안되나?");
        if(selected_shape){
            selected_shape.classList.toggle('shape_item_active', false);
        }
        selected_shape = ele;
        selected_shape.classList.toggle('shape_item_active', true);
        cur_shape = selected_shape.dataset.shape;
    });
});