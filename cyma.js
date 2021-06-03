$(document).ready(function() {
    
    const mainMenu = document.querySelector('.mainmenu');
    const closeMenu = document.querySelector('.closemenu');
    const openMenu = document.querySelector('.openmenu');

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show(){
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }

    function close(){
        mainMenu.style.top = '-100%';
    }

    //Cards

    $('.card1').hover(function(){

        if($(this).hasClass("active")){
            $('.card1 .bottom').slideUp(function(){
                $('.card1').removeClass("active");
            });
        }else{
            $('.card1').addClass("active");
            $('.card1 .bottom').stop().slideDown();
        }
    });

    $('.card2').hover(function(){

        if($(this).hasClass("active")){
            $('.card2 .bottom').slideUp(function(){
                $('.card2').removeClass("active");
            });
        }else{
            $('.card2').addClass("active");
            $('.card2 .bottom').stop().slideDown();
        }
    });

    $('.card3').hover(function(){

        if($(this).hasClass("active")){
            $('.card3 .bottom').slideUp(function(){
                $('.card3').removeClass("active");
            });
        }else{
            $('.card3').addClass("active");
            $('.card3 .bottom').stop().slideDown();
        }
    });

    $('.card4').hover(function(){

        if($(this).hasClass("active")){
            $('.card4 .bottom').slideUp(function(){
                $('.card4').removeClass("active");
            });
        }else{
            $('.card4').addClass("active");
            $('.card4 .bottom').stop().slideDown();
        }
    });
});