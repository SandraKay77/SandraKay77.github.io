$(
    function(){
        const page_names =  ["Index", "About_Me", "Art_Projects", "CV"];
        // const body = 

        function createPage(){
            navBar();
            
        }

        function navBar(){
            pglayout();
            var navList = $('<div id="nav"> <ul id="navlist"> ' + '</ul> </div>');
            $('body').append(navList);
        let page = "";
            for (let x of page_names){
            page = $('<li> <a href=' + x + '.html>' + x + '</a> </li>');
            $('#navlist').append(page);
 
        }

        function pglayout(){
            var header = $('<div id="header" class="center"> <h1>Sandra Schreffler</h1> </div>');
            var mainDiv = $('<div id="content" class="center"></div>');

            $('body').append(header).append(mainDiv);
        }


     
    }

    






    return function(evt){
        createPage();

    }

    }()
);