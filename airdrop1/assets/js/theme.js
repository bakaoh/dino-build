(function($) {
    $(document).ready( function() {
        function header_init() {
            var scroll_pos = $(window).scrollTop(),
                header_height = $('#header').outerHeight();

            if( $('#welcome').length ) {
                welcome_height = $('#welcome').outerHeight();
                header_height = welcome_height - header_height;
            }

            if( scroll_pos > header_height ) {
                $('#header').sticky({
                    topSpacing: 0,
                    zIndex: 200
                });
            } else {
                $('#header').unstick();
            }
        }

        function site_init() {
            $('#menu').on('show.bs.collapse', function() {
                $('#header').addClass('show-menu');
            });
            
            $('#menu').on('hidden.bs.collapse', function() {
                $('#header').removeClass('show-menu');
            });

            header_init();

            $(window).scroll( function() {
                header_init();
            });
        }
        
        site_init();
    });
})(jQuery);