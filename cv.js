$(
    // Containing function 
    function () {

        // draw the pieces of the page 
        function cvPage() {
            cvLayout();
            skillSets();

        }
        function cvLayout(){
            $('body').append(
                $("<div/>", {
                    class: 'cvContainer'
                }),
                $("<div/>", {
                    id: "contact",
                    class: "center contact",
                    html: '<h4>Contact:</h4>'
                }));

            $('.cvContainer').append(

            $("<div/>", {
                id: "objective",
                class: "boxes",
                html: '<h4>Objective</h4>'
            }),

            $("<div/>", {
                class: 'boxes',
                id: 'skills',
                click: function (e) {
                    openMenu();}
            }),

            $("<div/>", {
                id: "work",
                class: "boxes",
                html: '<h4>Experience</h4>'
            }),

            $("<div/>", {
                id: "Projects",
                class: "boxes",
                html: '<h3>Other Projects</h3>'
            }));

        }

        function skillSets(){
            var skillBlock = "<span class='label'>Skills</span>";
            var closeCaret = $("<span/>", {
                class: 'caret fa-solid fa-angle-right',
        });

        $('<div/>', {
            class: 'panel'
        }
        ).append(skillBlock, closeCaret).appendTo('#skills');

                var skillList = $('<ul/>', {
                id: 'skillList',
                class: 'all-list'
            });
            
            var skill1 = $('<li class="skillItem">Lorem Ipsum bl    ah blah</li>');
            skillList.append(skill1);

            $('#skills').append(skillList);
            


        }
        function openMenu() {
            $('.all-list').toggleClass('open');
            // $('.boxes').toggleClass('panel');
        }

        //   returnin the opening function 
        return function (evt) {
            cvPage();


        }

        // wrapping up the opening function
    }()
);