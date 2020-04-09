var $window = $(window);
var $body = $('body');
var $contentWrapper = $('#content_wrapper');
var $content = $('#content');
var minHeaderHeight = 250; // the height of the "visible part"

var lastWindowHeight = $window.height(); // save window height to calculate difference in height on resize

checkScroll(); // make sure scroll and all heights are correct on first load
stickyTop();   // make sure sticky top is used if needed on first load

$window.resize(function() {
    checkScroll();
    stickyTop();
});
$window.scroll(function() {
    stickyTop();
});

function checkScroll() {
    var newWindowHeight = $window.height();
    var windowHeightDif = newWindowHeight - lastWindowHeight;
    lastWindowHeight = newWindowHeight; // save current height for next call

    var contentHeight = $content.height();
    $contentWrapper.height(contentHeight);         // make sure wrapper will show entire content
    $body.height(newWindowHeight + contentHeight); // allow content to be scrolled off the screen by
                                                   // pushing content down by the amount of window height

    var windowScrollTop = $window.scrollTop();
    if (windowScrollTop > 0) {                                // don't scroll if at top to avoid video getting covered
        $window.scrollTop(windowScrollTop + windowHeightDif); // scroll by window height difference to keep content 
                                                              // in the same position on window resize
    }
}

function stickyTop() {
    var windowScrollTop = $window.scrollTop();
    var maxScroll = ($window.height() - minHeaderHeight);
    if (windowScrollTop >= maxScroll) {
        $contentWrapper.css('position', 'fixed').css('top', minHeaderHeight); // stop wrapper top at bottom of header
    } else {
        $contentWrapper.css('position', 'absolute').css('top', ''); // allow regular scrolling
    }

    if ($contentWrapper.css('position') === 'fixed') {       // if wrapper is fixed,
        $content.css('top', -(windowScrollTop - maxScroll)); // continue scrolling by shifting content up
    } else {
        $content.css('top', 0); // make sure content is lined up with wrapper
    }
}