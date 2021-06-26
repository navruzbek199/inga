// new fullpage('#fullpage', {
//     scrollingSpeed: 400,
//     // sectionSelector: '#fullpage',
//     autoScrolling: true,
//     anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6', 'anchor7', 'anchor8'],
//     navigation: true,
//     responsiveWidth: 1200,
//     slideSelector: '.horizontal-slide',
//     controlArrows: false,
// 	scrollHorizontally: true

//     // showActiveTooltip: true,
//     // navigationPosition: 'left',
//     // scrollBar: true,
//     // keyboardScrolling: true,
//     // verticalCentered: true,
//     // controlArrows: true,
//     // normalScrollElements: '',
// });


new fullpage('#fullpage', {
    // sectionsColor: ['', '#4BBFC3', '', '', '', ''],
    anchors: ['secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage'],
    // menu: '#menu',
    navigation: true,
    slidesNavigation: true,
    scrollHorizontally: true,
    showActiveTooltip: true,
    navigationPosition: 'left',
	lazyLoading: true,
    scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',

});




// var require = {
//     baseUrl: ".",
//     app: "./",
//     paths: {
//         "fullpage": "./node_modules/fullpage.js/dist/fullpage",
//         "IScroll": "./node_modules/fullpage.js/vendors/scrolloverflow",
//         "fullpageExtensions": "./node_modules/fullpage.js/dist/fullpage.extensions.min",
//         /*
//         When using any fullPage extensions you'll have to add the path to the
//         extension file here
//         */
//         //"scrollHorizontally": "./src/fullpage.scrollHorizontally.min"
//     }
// };
