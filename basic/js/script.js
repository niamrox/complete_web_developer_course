/**
 * Created by niamul on 6/13/15.
 */
//toggle navigation

    $('.btn').click(function(){
        if($('.more').hasClass('visible')){
            $('.more').removeClass('visible');
            $('.more').addClass('hidden');

        } else {
            $('.more').removeClass('hidden');
            $('.more').addClass('visible');
        }
        return false;
    });
