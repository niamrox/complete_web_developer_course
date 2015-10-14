/**
 * Created by niamul on 9/28/15.
 */

$(document).ready(function() {

    $("#carousuel-item").owlCarousel({

        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination:true,
        autoPlay : true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});


$(document).ready(function() {

    $("#client-carousel").owlCarousel({

        slideSpeed : 300,
        paginationSpeed : 400,
        pagination:false,
        items : 5,
        autoPlay : false
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});