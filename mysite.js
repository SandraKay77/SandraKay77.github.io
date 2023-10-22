$(
    function () {
        const PAGE_NAMES = ["Index", "About_Me", "Art_Projects", "CV"];

        var WINDOW_WIDTH = $(window).width();
        var WINDOW_HEIGHT = $(window).height();


        function createPage() {
            // myObjectives();

        }

        function navBar() {


        }

        function dropMenu() {
            $('.items-list').toggleClass('open')
        }

        // responsive updating the window size
        function resize() {

        }
      

        return function (evt) {
            $(window).resize();
            createPage();

        }

    }()
);