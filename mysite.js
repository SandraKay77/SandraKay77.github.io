$(
    function () {
        const PAGE_NAMES = ["Index", "About_Me", "Art_Projects", "CV"];

        var WINDOW_WIDTH = $(window).width();
        var WINDOW_HEIGHT = $(window).height();


        function createPage() {
            navBar();
            // myObjectives();

        }

        function navBar() {
            pglayout();

            var navButton = "<span class='label'>Menu</span>";
            var burgerButton = $("<span/>", {
                class: 'burgerbutton fa-solid fa-bars',
            });
            var navList = $("<ul/>", {
                id: "items-list",
                class: "items-list"
            });

            var page1 = $("<li class='navItem'><i class='iconitem fa-solid fa-house'></i>  <a href='index.html'> Home </href></li>");
            var page2 = $("<li class='navItem'> <i class='iconitem fa-solid fa-file-lines'></i> <a href='cv.html'> Resume</href></li>");
            var page3 = $("<li class='navItem'><i class='iconitem fa-solid fa-paintbrush'></i> <a href='Art_projects.html'> Art</href></li>");
            var page4 = $("<li class='navItem'> <i class='iconitem fa-regular fa-user'></i><a href='About_me.html'>About </href></li>");


            $('#dropMenu').append(navButton, burgerButton, navList);
            navList.append(page1, page2, page3, page4);





        }

        function dropMenu() {
            $('.items-list').toggleClass('open')
        }

        function pglayout() {
            $('body').append(
            $("<div/>", {
                id: "navbar",
                class: "container"
                // click: function () {
                //     dropMenu();
                // }
            }),
            
            $("<div/>", {
                id: "header",
                class: "center",
                html: "<h1> Sandra Schreffler </h1>"
            }));

            $("<div/>", {
                class: "dropdown",
                id: "dropMenu",
                click: function () {
                    dropMenu();
                }
            }
            ).appendTo('#navbar')
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