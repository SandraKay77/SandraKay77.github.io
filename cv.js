$(
    // Containing function 
    function () {

    const CARET = $(
        "<span/>", {
            id: 'myCaret',
            class: 'fa-solid fa-angle-right'
         });

        // draw the pieces of the page 
        function cvPage() {
            cvLayout();
            skillSets();
            myObjective();
            workExperience();
            myProjects();

        }

        // initial box layout
        function cvLayout(){
            $('body').append(
                $("<div/>", {
                    class: 'cvContainer'
                })
                );
            
                $('.cvContainer').append(

            $("<div/>", {
                id: "objective",
                class: "boxes objective",
            }),

            $("<div/>", {
                class: 'boxes skills',
                id: 'skills',
                css: ({'grid-column-start': 2})
            }),
            
            $("<div/>", {
                id: "work",
                class: "boxes work",
            }),

            $("<div/>", {
                id: "projects",
                class: "boxes projects",
                css: ({'grid-column-start': 2})
            }));
            $('.boxes').append(
                $('<div/>', {
                    class: 'subHeader',
                    click: function (evt) {
                        openMenu(evt);}
                }).append(
                    $('<span/>', {
                        class: 'label',
                        id: 'label'
                    }),
                    CARET
                ));
        }
        // complete "skills" box
        function skillSets(){
        $('#skills').find('.label').text('Skills');
        // $('<div/>', {
        //     class: 'subHeader',
        //     click: function (evt) {
        //         openMenu(evt);}
        // }).append(skillBlock, CARET));
                let skillList = $('<ul/>', {
                id: 'skillList',
                class: 'all-list'
            });
            
            let skill1 = $('<li class="allItem">Analytical Problem Solver</li>');
            let skill2 = $('<li class="allItem">Programming Languages</li> ');
            let programList = $('<ul><li>Python</li><li>Java</li> <li>Javascript</li> <li>PHP</li> <li>Bash</li> <li>Powershell</li></ul>');
            let skill3 = $('<li class="allItem">Network and Data Communications</li>');
            let networkList = $('<ul><li>Wireshark</li><li>FTP, DNS, DHCP</li> <li>Network Security and Management</li> </ul>');
            let skill4 = $('<li class="allItem">Security Tools</li>');
            let secureList = $('<ul><li>Kali Linux</li><li>Metasploit</li> <li>aircrack-ng</li> </ul>');
            let skill5 = $('<li class="allItem">Operating Systems</li>');
            let osList = $('<ul><li>Windows</li><li>Linux</li></ul>');
            skillList.append(skill1, skill2, skill3, skill4, skill5);

            $('#skills').append(skillList);
            
        }

        function myObjective(){
            $('#objective').find('.label').text('Objective');
            
                    let obj = $('<table/>', {
                    id: 'objective',
                    class: 'all-list'
                });
                
                let obj1 = '<thead class="allItem">\
                    <tr><th>Currently seeking a position in Software Development and/or Security where my education and passion will provide value to the employer and the opportunity for further hands-on experience.\
                    </th></tr>\
                </thead>';
                obj.append(obj1);
    
                $('#objective').append(obj);
                
            }

            function workExperience(){
                $('#work').find('.label').text('Work Experience');

            }

            
            function myProjects(){
                $('#projects').find('.label').text('Extracurricular and Other Projects');

            }
    
    


        function openMenu(clicked) {
            myNode = clicked.target;
            classPanel = $(myNode).next('.all-list');
            myCaret = $(myNode).find('#myCaret').toggleClass('fa-solid fa-angle-right fa-solid fa-angle-down');
            classPanel.slideToggle("slow");
        }

        //   returnin the opening function 
        return function (evt) {
            cvPage();


        }

        // wrapping up the opening function
    }()
);