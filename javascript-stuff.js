// This is how to make an element (div) fixed even when the original content is centered.

var fixmeTop = $('#editor-ribbon').offset().top; // get initial position of the element

$(window).scroll(function () { // assign scroll event listener
    var currentScroll = $(window).scrollTop() + 100; // get current position
    if (currentScroll >= fixmeTop) { // apply position: fixed if you
        $('#editor-ribbon').css({ // scroll to that element or below it
            position: 'fixed',
            top: '101px',
            width: '928px',
            margin: 'auto',
            float: 'right !important',
            borderBottom: '1px',
            borderBottomColor: 'black',
            zIndex: '9999'
        });
    } else {
        $('#editor-ribbon').css({   // apply position: static
            position: 'static',  // if you scroll above it
            marginLeft: '0',
            width: '100%'
        });
    }
});
