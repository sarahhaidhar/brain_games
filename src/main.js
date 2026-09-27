const arr = ["aqua", "#4a8fff", "pink", "#ffaa00", "#372357"];

function initialize() {
    var memory_boxes = document.getElementsByClassName("memory");

    for (let i = 0; i < memory_boxes.length; i++){
        memory_boxes[i].style.backgroundColor = arr[(i%arr.length)];
        memory_boxes[i].setAttribute('id', i);
    }
    document.getElementById("countdown_header").innerText = "REMEMBER!!!!"

    setTimeout(white_out, 3000);

}

function white_out(){
    document.getElementById("countdown_header").innerText = "FILL IT IN";
    var memory_boxes = document.getElementsByClassName("memory");
    for (let i = 0; i < memory_boxes.length; i++){
        memory_boxes[i].style.backgroundColor = "white";
    } 
    document.getElementById("palette_container").style.visibility = "visible";   
    document.getElementById("palette_header").style.visibility = "visible";   

}

function apply_box_color(){

    for (let i=0; i < memory_boxes.length; i++){
        memory_boxes[i].style.borderColor = "black";
    }
    current_box.style.borderColor = "red";
}

function apply_palette_color(){
    current_box.style.backgroundColor = current_color.style.backgroundColor;
}

function check_answer(){
    alert(memory_boxes[0].style.backgroundColor);
}

var current_box;
var current_color;

//Set IDs for all boxes
const memory_boxes = document.getElementsByClassName("memory");
for (let i = 0; i < memory_boxes.length; i++){
    memory_boxes[i].setAttribute('id', i);
}


const palette_boxes = document.getElementsByClassName("palette");
for (let i = 0; i < palette_boxes.length; i++){
    palette_boxes[i].style.backgroundColor = arr[(i%arr.length)]
}


[...document.querySelectorAll('.memory')].forEach(function(item) {
  item.addEventListener('click', function() {
    current_box = item;
    apply_box_color()
  });
   });

[...document.querySelectorAll('.palette')].forEach(function(item) {
  item.addEventListener('click', function() {
    current_color = item;
    apply_palette_color()
  });
   });

