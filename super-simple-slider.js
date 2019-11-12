//Console.log's below are for you to test if you wish to expand

jQuery(document).ready(function ($) { 
    
    //Select How Many Images To View At All Times
    const settings = {
        galleryView: '4'
    }
    
    //Hides other images on load
    $('.galleries-slider').children().each(function(index, value){
        if ((index +1 ) > settings.galleryView) {
            $(value).hide();
        }
    })

    const total_categories = $('.galleries-slider').children().length
    let right_counter = total_categories - settings.galleryView;
    let left_counter = 0;
    // console.log(total_categories)
    // console.log(right_counter)
    // console.log( left_counter)
    
    $('.fa-chevron-right').on('click', function(e){
        if (right_counter < (total_categories -1)) {
            right_counter++ 
            // console.log(right_counter)
            // console.log( left_counter)
            $('.galleries-slider').children().eq(right_counter).show()
            $('.galleries-slider').children().eq(left_counter).hide()
            left_counter++
        }
    })

    $('.fa-chevron-left').on('click', function(e){
        if (left_counter > 0) {
            left_counter--
            // console.log(right_counter)
            // console.log( left_counter)
            $('.galleries-slider').children().eq(left_counter).show()
            $('.galleries-slider').children().eq(right_counter).hide()
            right_counter-- 
        }
    })

});