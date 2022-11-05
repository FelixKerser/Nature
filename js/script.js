let forest = document.getElementById('forest');
let mountains = document.getElementById('mountains');
let rock = document.getElementById('rock');

(function(){
    var body = document.body,
        startX = -100,
        startY = -100,
        w = document.documentElement.offsetWidth,
        h = document.documentElement.offsetHeight;
  
      body.addEventListener('mousemove', function(evt){
      var posX = Math.round(evt.clientX / w * startX / 8)
      var posY = Math.round(evt.clientY / h * startY / 8)
      forest.style.marginLeft = posX + 'px';
      mountains.style.marginLeft = posX / 2 + 'px';
      rock.style.marginRight = Math.abs(posX) + 'px';
    })
  })()

//ireland

let ireland_image = document.getElementById('ireland_image');

let ireland_info = document.getElementById('ireland_image');

let header_list = document.getElementsByClassName('element');

let arrows = document.getElementById('list-arrows');
let arrows2 = document.getElementById('arrows-2');

let ustala = document.getElementById('ustala');

document.documentElement.style.setProperty('--color', "white")

let info_ireland = document.getElementById('info-ireland');

//ireland

//australia

let australia_image = document.getElementById('australia_image');

let australia_info = document.getElementById('australia_image');

let info_australia = document.getElementById('info-australia');

//australia

//wales

let wales_image = document.getElementById('wales_image');

let wales_info = document.getElementById('wales_image');

let info_wales = document.getElementById('info-wales');

//wales

let irelandopen = function(){
    ireland_image.style.transform = 'scale(1.2) translateY(-42%)'; 
    ustala.style.transform = "translateY(-100%)";

    for (let element of header_list){
        element.style.color="#3a3a3a";
    }

    document.documentElement.style.setProperty('--color', " #3a3a3a");
    info_ireland.style.display = "block";
    //setTimeout(() => {  slide_start.style.transfrom = "translateY(-100%)"; }, 1400);
    setTimeout(() => {  ireland_image.style.transition = '10s';  }, 1400);
    setTimeout(() => {  info_ireland.style.opacity = "1"; }, 1500);

}

let current_slide = 1;



let next_slide_down = function(){
  if (current_slide == 1){
    current_slide++

    ireland_image.style.transition = '6s'; 
    ireland_image.style.transform = 'scale(1.2) translateY(-100%)'; 
    info_ireland.style.opacity = "0";

    australia_image.style.transform = 'scale(1.2) translateY(-42%)'; 

    for (let element of header_list){
        element.style.color="white";
    }

    arrows.style.filter = 'invert(100%)';

    document.documentElement.style.setProperty('--color', "white");
    info_australia.style.display = "block";
    //setTimeout(() => {  slide_start.style.transfrom = "translateY(-100%)"; }, 1400);
    setTimeout(() => {  australia_image.style.transition = '10s';  }, 1400);
    setTimeout(() => {  info_australia.style.opacity = "1"; }, 1500);
  }else if (current_slide == 2){
    current_slide++
    wales_image.style.transition = '1.6s'; 
    australia_image.style.transition = '2s'; 
    australia_image.style.transform = 'scale(1.2) translateY(-100%)'; 
    info_australia.style.opacity = "0";

    wales_image.style.transform = 'scale(1.2) translateY(-42%)'; 

    arrows2.style.filter = 'invert(100%)';

    info_wales.style.display = "block";
    //setTimeout(() => {  slide_start.style.transfrom = "translateY(-100%)"; }, 1400);
    setTimeout(() => {  wales_image.style.transition = '10s';  }, 1400);
    setTimeout(() => {  info_wales.style.opacity = "1"; }, 1500);

    setTimeout(() => {  if(info_australia.style.opacity!= '0'){info_australia.style.opacity = '0'} }, 1500);
  }
}

let next_slide_up = function(){
  console.log(current_slide);
  if (current_slide == 2){
    current_slide--

    australia_image.style.transition = '3s'; 
    ireland_image.style.transition = '2.5s';
    ireland_image.style.transform = 'scale(1.2) translateY(-42%)'; 
    info_australia.style.opacity = "0";

    australia_image.style.transform = 'scale(1.2) translateY(100%)'; 

    for (let element of header_list){
        element.style.color="#3a3a3a";
    }

    arrows.style.filter = 'invert(0%)';

    info_ireland.style.display = "block";

    document.documentElement.style.setProperty('--color', "white");
    //info_australia.style.display = "none";
    //setTimeout(() => {  slide_start.style.transfrom = "translateY(-100%)"; }, 1400);
    setTimeout(() => {  ireland_image.style.transition = '5s';  }, 1400);
    setTimeout(() => {  info_ireland.style.opacity = "1"; }, 2000);
    setTimeout(() => {  info_australia.style.display = "none"; }, 1500);
  }else if (current_slide == 3){
    current_slide--
    wales_image.style.transition = '2.5s'; 
    australia_image.style.transition = '2s';
    australia_image.style.transform = 'scale(1.2) translateY(-42%)'; 
    info_wales.style.opacity = "0";

    wales_image.style.transform = 'scale(1.2) translateY(100%)'; 

    arrows.style.filter = 'invert(100%)';

    info_australia.style.display = "block";

    //setTimeout(() => {  slide_start.style.transfrom = "translateY(-100%)"; }, 1400);
    setTimeout(() => {  australia_image.style.transition = '5s';  }, 1000);
    setTimeout(() => {  info_australia.style.opacity = "1"; }, 1500);
    setTimeout(() => {  info_wales.style.display = "none"; }, 1500);

    //setTimeout(() => {  if(info_australia.style.opacity!= '0'){info_australia.style.opacity = '0'} }, 1500);
  } else if (current_slide == 1){
    ireland_image.style.transition = '3s';
    ireland_image.style.transform = 'scale(1.2) translateY(100%)'; 
    ustala.style.transform = "translateY(0%)";

    for (let element of header_list){
        element.style.color="white";
    }

    document.documentElement.style.setProperty('--color', " white");
    info_ireland.style.opacity = "0";
    //setTimeout(() => {  slide_start.style.transfrom = "translateY(-100%)"; }, 1400);
    setTimeout(() => {  ireland_image.style.transition = '3s';  }, 1400);
    setTimeout(() => {  info_ireland.style.display = "none"; }, 1500);
  }
}

let mob_arrow = document.getElementById('bg-menu-arrow__img');

let mob_bg = document.getElementById('bg-menu-mob');

let mob_counter = 1;

let mob_menu = function(){
    if (mob_counter % 2 === 0){
      mob_counter++;
      mob_bg.style.transform = "translateX(100%)";
      mob_arrow.style.transform = "rotate(-0.25turn)";
      mob_arrow.style.filter = "invert(0%)";
    } else {
      mob_counter++;
      mob_bg.style.transform = "translateX(0%)";
      mob_arrow.style.transform = "rotate(90deg)";
      mob_arrow.style.filter = "invert(100%)";
    }
}