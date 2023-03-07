$(
    // Containing function 
    function(){
        // listing the pages on the site 
        const page_names =  ["Index", "About_Me", "Art_Projects", "CV"];
        
// draw the pieces of the page 
        function drawPage(){
            navBar();
            myObjectives();
            
            
        }
// adding navigation bar 
        function navBar(){
            pglayout();
            var navList = $('<div id="nav"> <ul id="navlist"> ' + '</ul> </div>');
            $('body').append(navList);
        let page = "";
            for (let x of page_names){
            page = $('<li> <a href=' + x + '.html>' + x + '</a> </li>');
            $('#navlist').append(page);
            }
        }
// base layout of all pages
        function pglayout(){
            var header = $("<div/>", {
                id: "header",
                class: "center"
                

            }).css(
                {
                    "backgroundColor": "var(--light2)"
                }

            ).html('<h1> Sandra Schreffler </h1>'
            );

            var mainDiv = $("<div/>", {
                id: "content",
            }
            );

            $('body').append(mainDiv).append(header);

            // pageSize('content');
        }

        //responsive page size
        // function pageSize(divID){
        //     pageDiv = $(divID);
        //     pageDiv
        // }

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
                    ).html(
                    "<p> Seeking a position in Cyber Security or Software Development where my education and passion will provide value to the employer and the opportunity for further hands-on experience. </p>"
                    ).appendTo('#content');
                
            }
    
//   returnin the opening function 
    return function(evt){
        drawPage();
        

    }

    // wrapping up the opening function
}()
);