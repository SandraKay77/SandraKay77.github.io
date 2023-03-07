$(
    function(){
        const PAGE_NAMES =  ["Index", "About_Me", "Art_Projects", "CV"];
        
        var WINDOW_WIDTH = $(window).width();
        var WINDOW_HEIGHT = $(window).height();
        

        function createPage(){
            navBar();
            myObjectives();
            
        }

        function navBar(){
            pglayout();
           
                '<ul id="navList"></ul>');
            

        let page = "";
            for (let x of PAGE_NAMES){
            page = $('<li> <a href=' + x + '.html>' + x + '</a> </li>');
            $('#navList').append(page);
            }

        
            
        }

// base layout of all pages
        function pglayout(){
            var header = $("<div/>", {
                id: "header",
                class: "center"
            }).css(
                {
                    "backgroundColor": "var(--light2)",
                    "width": "50%"
                }
            ).html('<h1> Sandra Schreffler </h1>');

            var navBar = $("<div/>", {
                id: "navbar",
                class: "allPages"
            }).css(
                {
                    "position": "fixed",
                    "top": "0",
                    "left": "0" 
                }).html('<button onclick="navDrop()"> Menu </button>');
                
            $('body').append(header, navBar);

            // pageSize('content');
        }


        // responsive updating the window size
        function resize(){

        }
// building Objective section of CV 
        function myObjectives(){
            $("<div/>", {
                    id: "objective",
                    class: "center"
                }).css(
                    {
                        "backgroundColor": "var(--dark1)",
                        "font-size": "1em",
                        "width": "30%",
                        "float": "right"
                    }
                    ).appendTo('#cvPage').html('<p>hello world</p>');
                
            }
    
    






    return function(evt){
        $(window).resize();
        createPage();

    }

    }()
);