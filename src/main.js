

function generate_color(){
    var base = Math.floor(Math.random() * 2);
    if (base == 0){
        var red = Math.floor(Math.random() * 255) + 100;
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);      
    }
    if (base == 1){
        var green = Math.floor(Math.random() * 255) + 100;
        var red = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);      
    }
    if (base == 2){
        var blue = Math.floor(Math.random() * 255) + 100;
        var green = Math.floor(Math.random() * 255);
        var red = Math.floor(Math.random() * 255);      
    }

    var final_res = "rgb(" + red + ", " + green + ", " + blue + ")";
    return final_res;


}

function initialize() {
    var memory_boxes = document.getElementsByClassName("memory");

    for (let i = 0; i < memory_boxes.length; i++){
        memory_boxes[i].style.backgroundColor = arr[i];
        memory_boxes[i].setAttribute('id', i);
    }
    document.getElementById("countdown_header").innerText = "REMEMBER!!!!";

    for (let i = 0; i < memory_boxes.length; i++){
        correct_colors[i] = memory_boxes[i].style.backgroundColor;
    }
    setTimeout(white_out, 3000);

}

function white_out(){
    document.getElementById("countdown_header").innerText = "FILL IT IN";
    document.getElementById("start_button").disabled = true;

    var memory_boxes = document.getElementsByClassName("memory");
    for (let i = 0; i < memory_boxes.length; i++){
        memory_boxes[i].style.backgroundColor = "white";
    } 
    document.getElementById("palette_container").style.visibility = "visible";   
    document.getElementById("palette_header").style.visibility = "visible"; 
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
    all_match = true;
    for (let i=0; i < max_colors; i++){
        if (memory_boxes[i].style.backgroundColor.valueOf() !== correct_colors[i].valueOf()){
            // alert(memory_boxes[i].style.backgroundColor + correct_colors[i] + i);
            all_match = false;
        }
    }
    alert(all_match);
    // return all_match;
}

// Source - https://stackoverflow.com/a/2450976
// Posted by ChristopheD, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-27, License - CC BY-SA 4.0

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

var arr = []
const max_colors = 5;
for (let i=0; i < max_colors; i++){
    arr.push(generate_color());
}

var current_box;
var current_color;
var correct_colors = [];
var shuffled_arr = []
for(let i=0; i <max_colors; i++){
    shuffled_arr.push(i);
}
shuffle(shuffled_arr);
//Set IDs for all boxes
const memory_boxes = document.getElementsByClassName("memory");
for (let i = 0; i < memory_boxes.length; i++){
    memory_boxes[i].setAttribute('id', i);
}


const palette_boxes = document.getElementsByClassName("palette");
for (let i = 0; i < palette_boxes.length; i++){
    palette_boxes[i].style.backgroundColor = arr[shuffled_arr[i]];
}