// Scroll (navigation-mobile)

var didScroll,
    lastScrollTop = 0,
    delta = 5,
    navbarHeight = $('#navigation-mobile').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        $('#navigation-mobile').removeClass('navigation-mobile-active').addClass('navigation-mobile-inactive');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('#navigation-mobile').removeClass('navigation-mobile-inactive').addClass('navigation-mobile-active');
        }
    }
    
    lastScrollTop = st;
}

// Disqus (comments)
disqus = function (newIdentifier, newUrl, newTitle) {
    if ($('#disqus_thread').length) {
        if (typeof DISQUS === 'undefined') {

            var disqus_shortname = 'cristal-code';
            var disqus_identifier = newIdentifier;
            var disqus_url = newUrl;
            var disqus_title = newTitle;

            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        } else {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = newIdentifier;
                    this.page.url = newUrl;
                    this.page.title = newTitle;
                }
            });
        }
    }
};

disqus(window.location.href, window.location.href, $('#post-text').text());