//Изменение ширины окна
window.onresize = function() {
    this.marginTopForFirstSection();
    this.sliderSettings();
}

//По окончанию загрузки страницы
window.onload = function() {
    this.marginTopForFirstSection();
    this.sliderSettings();
}

//Отступ 1 - ой секции от шапки
function marginTopForFirstSection() {
    let header = document.getElementById("header_id");
    let section = document.getElementById("timeShow_id");

    section.style.marginTop = header.offsetHeight + "px";
}

//Счет разницы между сегоднешней даты и датой Нового года
function schetDateForNewYearF() {
    let hours = document.getElementById("timeShow_block_timer_id-Hours");
    let minutes = document.getElementById("timeShow_block_timer_id-Minutes");

    let now = new Date();
    let newYear = new Date(now.getFullYear() , 11, 31);

    let razn = Math.abs(newYear.getTime() - now.getTime());

    let daysS = Math.round( Math.abs( razn/1000/3600/24 ) );
    let hoursS = Math.round( Math.abs( razn/1000/3600 ) );

    if(daysS < 10) hours.innerHTML = "0" + daysS;
    else hours.innerHTML = daysS;

    if(hoursS < 10) minutes.innerHTML = "0" + hoursS;
    else minutes.innerHTML = hoursS;
}

let schetDateForNewYear = setInterval(function(){
    schetDateForNewYearF();
}, 1000);


//Настройка слайдера
function sliderSettings() {
    let slider_block = document.getElementById("mainSlider__slider__id");
    let main_slider_block = document.getElementById("mainSlider__id");
    let slider_element = document.getElementsByClassName("mainSlider__slider__element");

    slider_block.style.width = (main_slider_block.offsetWidth * 7) + "px";
    slider_block.style.left = "0px";
    mainSlider_sliderLeft = 0;

    for(let i = 0; i < slider_element.length; i++) {
        slider_element[i].style.width = main_slider_block.offsetWidth + "px";
    }
}

( () => {
    let slider_block = document.getElementById("mainSlider__slider__id");
    slider_block.style.left = "0px";
} )();

//Настройка buttons для слайдера
let mainSlider_sliderLeft = 0;

let mainSlider_buttonLeft = document.getElementById("mainSlider__buttons__id1");
let mainSlider_buttonRight = document.getElementById("mainSlider__buttons__id2");

mainSlider_buttonLeft.addEventListener("click" , function(ev) {
    let slider_main = document.getElementById("mainSlider__id");
    let line = document.getElementById("mainSlider__slider__id");

    if(line.style.left == "0px") {
        line.style.left = -(slider_main.offsetWidth * 6) + "px";
        mainSlider_sliderLeft = -(slider_main.offsetWidth * 6);
        return;
    }

    mainSlider_sliderLeft += slider_main.offsetWidth;
    line.style.left = mainSlider_sliderLeft + "px";
});

mainSlider_buttonRight.addEventListener("click" , function(ev) {
    let slider_main = document.getElementById("mainSlider__id");
    let line = document.getElementById("mainSlider__slider__id");

    if(line.style.left == -(slider_main.offsetWidth * 6) + "px") {
        line.style.left = "0px";
        mainSlider_sliderLeft = 0;
        return;
    }

    mainSlider_sliderLeft -= slider_main.offsetWidth;
    line.style.left = mainSlider_sliderLeft + "px";
});

let mainSlider_timeout = setInterval(function() {
    let slider_main = document.getElementById("mainSlider__id");
    let line = document.getElementById("mainSlider__slider__id");

    if(line.style.left == -(slider_main.offsetWidth * 6) + "px") {
        line.style.left = "0px";
        mainSlider_sliderLeft = 0;
        return;
    }

    mainSlider_sliderLeft -= slider_main.offsetWidth;
    line.style.left = mainSlider_sliderLeft + "px";
}, 15000);



//Настройка боковой панели
document.getElementById("header_menu-image_id").addEventListener("click", function() {
    let aside_block = document.getElementById("aside_left_id");

    if (aside_block.style.left == "-120%") {
        aside_block.style.left = "0px";
    } else {
        aside_block.style.left = "-120%";
    }
});


//Настройка панели для подробного рассмотра изображений
document.getElementById("imageView__relativeBlock__button__id").addEventListener("click" , function(ev) {
    document.getElementById("imageView__id").style.display = "none";
});

for (let i = 0; i < document.getElementsByClassName("mainSlider__slider__element__image").length; i++) {
    document.getElementsByClassName("mainSlider__slider__element__image")[i].addEventListener("click" , function(ev){
        document.getElementById("imageView__id").style.display = "block";
        document.getElementById("imageView__relativeBlock__image__id").src =
            ev.target.src;
    });
}