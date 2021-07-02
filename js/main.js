/* 드롭다운 */
$(function(){
    $('.menulink').hover(function(){
        $('.b_menu').css({'display' : 'block'});
        $('.menulink').css({'overflow' : 'visible'});
    });
    $('.menulink').mouseleave(function(){
        $('.b_menu').css('display', 'none');
        $('.menulink').css({'overflow' : 'hidden'});
    });
    $('.b_menu').hover(function(){
        $('.b_menu').css({'display' : 'block'});
        $('.menulink > li > ul').css({'opacity' : '100%'});
        $('.menulink').css({'overflow' : 'visible'});
    });
    $('.b_menu').mouseleave(function(){
        $('.b_menu').css('display', 'none');
        $('.menulink').css({'overflow' : 'hidden'});
    });
    $('.menu_name > ul').hover(function(){
        $('.b_menu').css({'display' : 'block'});
        $('.menulink > li > ul').css({'opacity' : '100%'});
        $('.menulink').css({'overflow' : 'visible'});
    });
});

