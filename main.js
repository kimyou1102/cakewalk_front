/*--------------------------------- Canvas --------------------------------- */
const canvas = new fabric.Canvas('c');
const canvas2 = new fabric.Canvas('c2');

const workBoard = document.querySelector('.work_board');
let canvas_width = workBoard.clientWidth - 48; 
let canvas_height = workBoard.clientHeight - 64;

const workBoard2 = document.querySelector('.second_work_board');
let canvas2_width = workBoard2.clientWidth - 24;
let canvas2_height = workBoard2.clientHeight - 40;

const shape_btns = document.querySelectorAll('.shape_item');

let cur_shape = null;
let selected_shape = null;
let selected_size = 2
let selected_height = 3;
let mag = 1.0;

canvas.setDimensions({width : `${canvas_width}`, height: `${canvas_height}`});
canvas2.setDimensions({width : `${canvas2_width}`, height: `${canvas2_height}`});

window.addEventListener('resize',()=>{
    resizeCanvasSize();
});

shape_btns.forEach( (ele) => {
    ele.addEventListener('click', (e)=>{
        if(selected_shape){
            selected_shape.classList.toggle('shape_item_active', false);
        }
        selected_shape = ele;
        selected_shape.classList.toggle('shape_item_active', true);
        cur_shape = selected_shape.dataset.shape;
        drawShape(canvas, cur_shape);
    });
});

function drawShape(canvas, shape){
    canvas.clear();
    canvas2.clear();
    if(shape == null){
        return;
    }
    else{
        let sideRect = new fabric.Rect({
            width: canvas2_width * 2 * mag/3 ,
            height : canvas2_height * mag/3,
            fill:'#ccc',
            stroke : 'black',
            strokeWidth: 3,
        });
        sideRect.set('selectable', false);
        canvas2.add(sideRect);
        canvas2.centerObject(sideRect);
    }
    let posX = 0;
    let posY = 0;
    switch(shape){
        case 'circle':
            let circle = new fabric.Circle({
                radius : canvas_width * mag /4,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            //circle.set('selectable', false);
            canvas.add(circle);
            canvas.centerObject(circle);
            break;
        case 'rectangle':
            let rect = new fabric.Rect({
                width: canvas_width * mag/2,
                height: canvas_width * mag/2,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            //rect.set('selectable', false);
            canvas.add(rect);
            canvas.centerObject(rect);
            break;
        case 'triangle':
            let tri = new fabric.Triangle({
                width : canvas_width * mag/ 2,
                height: (canvas_width / 2) * Math.sqrt(3)* mag / 2,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            //tri.set('selectable', false);
            canvas.add(tri);
            canvas.centerObject(tri);
            break;
        case 'star':
            let star = new fabric.Text('★',{
                fontSize: canvas_width * 2 * mag / 3,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            //star.set('selectable', false);
            canvas.add(star);
            canvas.centerObject(star);
            break;
        case 'heart':
            let heart = new fabric.Text('♥',{
                fontSize: canvas_width * 3 * mag /4,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            //heart.set('selectable', false);
            canvas.add(heart);
            canvas.centerObject(heart);
            break;
        case 'dubble':
            let first_circle = new fabric.Circle({
                radius : canvas_width * mag/ 4,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            let second_circle = new fabric.Circle({
                radius : canvas_width * mag / 10,
                stroke: 'black',
                strokeWidth : 3,
                fill: 'white'
            }); 
            canvas.centerObject(first_circle);
            canvas.centerObject(second_circle);
            let group = new fabric.Group([first_circle, second_circle]);
            //group.set('selectable', false);
            canvas.add(group);
    }
}

/*--------------------------------- Board Switch --------------------------------- */
const switch_btn = document.querySelector('.board_switch_btn');
const work_board = document.querySelector('.work_board');
const second_work_board = document.querySelector('.second_work_board');

switch_btn.addEventListener('click', (e)=>{
    work_board.classList.toggle('active_board');
    work_board.classList.toggle('unactive_board');
    second_work_board.classList.toggle('active_board');
    second_work_board.classList.toggle('unactive_board');

    resizeCanvasSize();
});

function resizeCanvasSize(){
    canvas_width = workBoard.clientWidth - 48; 
    canvas_height = workBoard.clientHeight - 64;
    
    canvas2_width = workBoard2.clientWidth - 24;
    canvas2_height = workBoard2.clientHeight - 40;

    canvas.setDimensions({width : `${canvas_width}`, height: `${canvas_height}`});
    canvas2.setDimensions({width : `${canvas2_width}`, height: `${canvas2_height}`});
    
    if(switch_choice == 'shape'){
        drawShape(canvas , cur_shape);
    }
    else{
        drawImage();
    }
    
}

/*--------------------------------- Memo --------------------------------- */
const memo_list = document.querySelector('.memo_list');
const memo_input = document.querySelector('.memo_input');
const memo_items = document.querySelectorAll('.memo_item');

newMemo();
memo_items.forEach(element => {
    modifyMemo(element);
});

//메모 새로 추가
function newMemo(){
    memo_input.addEventListener('focusout',()=>{
        if(memo_input.value){
            const new_memo_item = document.createElement('li');
            new_memo_item.innerText = memo_input.value;

            const new_memo = document.createElement('div');
            new_memo.classList.add('memo_item');
            new_memo.appendChild(new_memo_item);
            modifyMemo(new_memo);

            memo_list.appendChild(new_memo);

            memo_input.value = '';
        }
    });
}

// 메모 수정 or 삭제
function modifyMemo(memo_item){
    memo_item.addEventListener('click', (e)=>{
        const new_textarea = document.createElement('textarea');
        new_textarea.classList.add('memo_input');
        new_textarea.value = memo_item.firstChild.innerText;

        memo_list.insertBefore(new_textarea, memo_item);
        new_textarea.focus();
        memo_item.remove();
        
        new_textarea.addEventListener('focusout',(e)=>{
            if(new_textarea.value){
                const new_memo_item = document.createElement('li');
                new_memo_item.innerText = new_textarea.value;

                const new_memo_div = document.createElement('div');
                new_memo_div.classList.add('memo_item');
                new_memo_div.appendChild(new_memo_item);
                modifyMemo(new_memo_div);

                memo_list.insertBefore(new_memo_div, new_textarea);
                new_textarea.remove();
            }else{
                new_textarea.remove();
            }
        });
    });
}

/*--------------------------------- Size select --------------------------------- */
const memo_size = document.querySelector('.memo_size');
const size_radios = document.querySelectorAll('.size_item');
let select_size = null;

size_radios.forEach(element => {
    element.firstChild.addEventListener('change',(e)=>{
        if(element.firstChild.checked){
            select_size = element.firstChild.dataset.size;
            memo_size.firstChild.innerText = `사이즈 : ${select_size}호`;
            
            switch (select_size) {
                case '1':
                    mag = 0.8;
                    break;
                case '2':
                    mag = 1.0;
                    break;
                case '3':
                    mag = 1.2;
                    break; 
                default:
                    break;
            }
            if(switch_choice == 'shape'){
                drawShape(canvas, cur_shape);
            }
            else{
                drawImage();
            }
        }
    });
});

/*--------------------------------- switch --------------------------------- */
const shape_switch = document.querySelector('.shape_switch');
const shape_switch_items = document.querySelectorAll('.shape_switch_item');
const select_box = document.querySelector('.select_box');

const shape = document.querySelector('.shape');
const picture = document.querySelector('.picture');

let switch_choice = 'shape';

moveSwitch();

function moveSwitch(){
    shape_switch.addEventListener('click',()=>{
        shape.classList.toggle('unactive');
        picture.classList.toggle('unactive');
        
        shape_switch_items.forEach(element => {
            element.classList.toggle('shape_switch_item_active');

            //사진 첨부 active
            if (element.classList.contains('shape_switch_item_active')){
                select_box.style.left='auto';
                select_box.style.right = 0;
                switch_choice = 'pic';
            }
            //기본 모양 active
            else{
                select_box.style.right = 'auto';    
                select_box.style.left=0;
                switch_choice = 'shape';
            }
        });    
    });
}

/*--------------------------------- Image file --------------------------------- */
const realUpload = document.querySelector('.real_upload');
const upload = document.querySelector('.upload');
let pic_url = null;
let img_scale;
let img_top;
let img_left;

upload.addEventListener('click', ()=> realUpload.click());
realUpload.addEventListener('change', ()=>{
    let selected_pic = realUpload.files[0];
    
    pic_url = URL.createObjectURL(selected_pic);
    drawImage();
});

function drawImage(){
    canvas.clear();
    canvas2.clear();
    if(shape == null){
        return;
    }
    else{
        let side_posX = canvas2_width /2 - (canvas2_width * mag/3);
        let side_posY = canvas2_height /2 -(canvas2_height * mag/6);
        let sideRect = new fabric.Rect({
            top: side_posY,
            left : side_posX,
            width: canvas2_width * 2 * mag/3 ,
            height : canvas2_height * mag/3,
            fill:'#ccc',
            stroke : 'black',
            strokeWidth: 3,
        });
        sideRect.set('selectable', false);
        canvas2.add(sideRect);
    }

    fabric.Image.fromURL(`${pic_url}`, function(img){
        img.on('scaling',(option)=>{  
            img_scale = img.scaleX;
            img_top = img.top;
            img_left = img.left;

        });
            
        canvas.add(img);
        canvas.centerObject(img)
    });
}
/*--------------------------------- order Num --------------------------------- */
const step_boxes = document.querySelectorAll('.step_box');
let active_step_box = document.querySelector('.active_step_box');

const order_num_items = document.querySelectorAll('.order_num_item');
const order_title = document.querySelector('.order_title');
const order_list = [
    {order : 1, title:"시트 모양 정하기", color:"#F8BBD0"},
    {order : 2, title:"케이크 색 정하기", color:"#F06292"},
    {order : 3, title:"레터링", color:"#EC407A"},
    {order : 4, title:"데코레이션", color:"#D81B60"},
    {order : 5, title:"케이크 판 꾸미기", color:"#C2185B"},
];
let active_order_item = document.querySelector('.order_num_item_active');
let cur_order = order_list[0];

order_num_items.forEach(element => {
    element.addEventListener('click',()=>{
        active_order_item.classList.toggle('order_num_item_active', false);
        element.classList.toggle('order_num_item_active', true);
        active_order_item = element;

        cur_order = order_list[Number(active_order_item.dataset.order)-1];
        order_title.innerText = cur_order.title;
        order_title.style.backgroundColor = cur_order.color;

        step_boxes.forEach(ele => {
            if(ele.dataset.step == cur_order.order){
                active_step_box.classList.toggle('unactive', true);
                active_step_box.classList.toggle('active_step_box', false);
                
                ele.classList.toggle('unactive', false);
                ele.classList.toggle('active_step_box', true);
                active_step_box = ele;
            }
        });
    });
});

/*--------------------------------- STEP2 --------------------------------- */
