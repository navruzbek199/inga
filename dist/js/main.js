$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500, function(){
       console.log("weeeeee")
    });
    return false;
});

// new fullpage('#fullpage', {
//     sectionsColor: ['#ff73a1', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#ccc'],
//     anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4','anchor5', 'anchor6', 'anchor7' ],
//     menu: '#menu',
//     slidesNavigation: true,
//     scrollHorizontally: true,
//     lazyLoad: true,
//     scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
//     afterSlideLoad: function(section, origin, destination, direction){
//         console.log({
//             section: section,
//             origin: origin,
//             destination: destination,
//             direction: direction
//         });
//     },
//     onSlideLeave: function(section, origin, destination, direction){
//         console.log({
//             section: section,
//             origin: origin,
//             destination: destination,
//             direction: direction
//         });
//     }
// });




// define(['IScroll', 'scrollHorizontally', 'fullpageExtensions'], function(IScroll, scrollHorizontally, fullpage) {

//     // Initializing it
//     var fullPageInstance = new fullpage('#fullpage', {
//         navigation: true,
//         sectionsColor:['blue', 'red', 'purple', 'grey'],
//         scrollOverflow: true,
//         scrollHorizontally: true
//     });
// });


 