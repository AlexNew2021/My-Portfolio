$(window).on('load', function(){

//add vide.js-video background
$('#header').vide('./video/video', {
    bgColor: '#151511'
});


});


const menu_nav = document.querySelector('#menu_nav');
const button_mobile_change = document.querySelector('#button_mobile_change');
const change_pic_button_mobile = document.querySelector('#change_pic_button_mobile');


button_mobile_change.onclick = () => {
    if (menu_nav.classList.toggle('open')) {
        change_pic_button_mobile.src ="./img/media_img/close.svg"; } 
        else { change_pic_button_mobile.src ="./img/media_img/open.svg"; }
    }


    AOS.init();
