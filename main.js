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

canvas.setDimensions({width : `${canvas_width}`, height: `${canvas_height}`});
canvas2.setDimensions({width : `${canvas2_width}`, height: `${canvas2_height}`});

window.addEventListener('resize',()=>{
    canvas_width = workBoard.clientWidth- 48;
    canvas_height = workBoard.clientHeight - 64;
    
    canvas2_width = workBoard2.clientWidth - 24;
    canvas2_height = workBoard2.clientHeight - 40;
    
    canvas.setDimensions({width : `${canvas_width}`, height: `${canvas_height}`});
    canvas2.setDimensions({width : `${canvas2_width}`, height: `${canvas2_height}`});

    drawShape(canvas, cur_shape);
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
        let side_posX = canvas2_width /2 - (canvas2_width /3);
        let side_posY = canvas2_height /2 -(canvas2_height /6);
        let sideRect = new fabric.Rect({
            top: side_posY,
            left : side_posX,
            width: canvas2_width * 2 /3,
            height : canvas2_height /3,
            fill:'#ccc',
            stroke : 'black',
            strokeWidth: 3,
        });
        sideRect.set('selectable', false);
        canvas2.add(sideRect);
    }
    let posX = 0;
    let posY = 0;
    switch(shape){
        case 'circle':
            posY = (canvas_height /2) - (canvas_width /4);
            posX = (canvas_width / 2) - (canvas_width /4);
            let circle = new fabric.Circle({
                top: posY,
                left : posX,
                radius : canvas_width /4,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            circle.set('selectable', false);
            canvas.add(circle);
            break;
        case 'rectangle':
            posY = (canvas_height / 2) - (canvas_width /4);
            posX = (canvas_width / 2) - (canvas_width /4);
            let rect = new fabric.Rect({
                top: posY,
                left: posX,
                width: canvas_width /2,
                height: canvas_width /2,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            rect.set('selectable', false);
            canvas.add(rect);
            break;
        case 'triangle':
            posY = canvas_height / 2 -((canvas_width / 2) * Math.sqrt(3) / 4);
            posX = canvas_width / 4;
            let tri = new fabric.Triangle({
                top: posY,
                left : posX,
                width : canvas_width / 2,
                height: (canvas_width / 2) * Math.sqrt(3) / 2,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            tri.set('selectable', false);
            canvas.add(tri);
            break;
        case 'star':
            posY = canvas_height / 2 -(canvas_width /3);
            posX = canvas_width / 2 -(canvas_width / 3); 
            let star = new fabric.Text('★',{
                top: posY,
                left : posX,
                fontSize: canvas_width * 2 / 3,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            star.set('selectable', false);
            canvas.add(star);
            break;
        case 'heart':
            posY = canvas_height / 2 - (canvas_width * 3 / 8);
            posX = canvas_width / 2 -(canvas_width / 4); 
            let heart = new fabric.Text('♥',{
                top: posY,
                left : posX,
                fontSize: canvas_width *3 /4,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            heart.set('selectable', false);
            canvas.add(heart);
            break;
        case 'dubble':
            posY = canvas_height / 2 - (canvas_width / 4);
            posX = canvas_width / 2 - (canvas_width / 4);
            let first_circle = new fabric.Circle({
                top: posY,
                left : posX,
                radius : canvas_width / 4,
                stroke: 'black',
                strokeWidth : 3,
                fill: '#ccc'
            });
            let posY2 = canvas_height / 2 - (canvas_width / 10);
            let posX2 = canvas_width / 2 - (canvas_width / 10);
            let second_circle = new fabric.Circle({
                top: posY2,
                left : posX2,
                radius : canvas_width / 10,
                stroke: 'black',
                strokeWidth : 3,
                fill: 'white'
            }); 
            let group = new fabric.Group([first_circle, second_circle]);
            group.set('selectable', false);
            canvas.add(group);
    }
}

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

    drawShape(canvas , cur_shape);
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