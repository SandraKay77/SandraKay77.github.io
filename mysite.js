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

            var navButton = "<span class='label'>Menu</span>";
            var burgerButton = $("<span/>", {
                class: 'burgerbutton fa-solid fa-bars',
            });

            var navList = $("<ul/>", {
                id: "items-list",
                class: "items-list" 
            });

            var page1 = $("<li class='navItem'><i class='iconitem fa-solid fa-house'></i>  Home </li>");
            var page2 = $("<li class='navItem'> <i class='iconitem fa-solid fa-file-lines'></i> Resume</li>");
            var page3 = $("<li class='navItem'><i class='iconitem fa-solid fa-paintbrush'></i> Art</li>");
            var page4 = $("<li class='navItem'> <i class='iconitem fa-regular fa-user'></i>About </li>");


            $('#dropMenu').append(navButton, burgerButton, navList);
            navList.append(page1, page2, page3, page4); 

          
            
  

        }

        function dropMenu(){
            console.log("Hello World")
            
            $('.items-list').toggleClass('open')


            // document.addEventListener('click', ($event) =>
            // $event.target !== $burgerButton &&
            // $containerItems.classList.remove('open'));
        }
    
        function pglayout(){
            $("<div/>", {
                id: "header",
                class: "center",
                html: "<h1> Sandra Schreffler </h1>",
                css: {
                    "backgroundColor": "var(--light2)",
                    "width": "50%"
            }   
            }).appendTo('body');

            $("<div/>", {
                id: "navbar",
                class: "container",
                css: {
                    "margin": "0 auto", 
                    "max-width": "250px"
                },
                click: function(){
                    dropMenu();
                }
                }).appendTo('body');

            $("<div/>", {
                class: "dropdown",
                id: "dropMenu"
        }
            ).appendTo('#navbar')
                
            // $('body').append(header, navBar);

            
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