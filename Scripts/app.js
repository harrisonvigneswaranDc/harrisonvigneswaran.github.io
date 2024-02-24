`use strict`;

// IIFE = Immediately Invoked Functional Expression
(function () {
    // Function to display the home page content
    function DisplayHomePage() {
        // Log a message to indicate that DisplayHomePage is called
        console.log("Called DisplayHomePage()");

        // Get the main content container
        let MainContent = document.getElementsByTagName("main")[0];

        let DocumentBody = document.body;

        // Create an article element
        let Article = document.createElement("article");
        // HTML content for the article
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">In order to promote balance, cohesiveness, and wellbeing, harmony is essential in individual interactions as well as in larger societal and environmental contexts. Harmony is fundamentally a condition of oneness, cooperation, and understanding in which many elements smoothly coexist to produce a calm and enriching atmosphere. Harmony in interpersonal relationships fosters empathy, communication, and respect for one another, which builds solid links and promotes mutual development. Greater feeling of community, social justice, and sustainable development are fostered by societal harmony. Accepting harmony makes it possible to celebrate diversity because different viewpoints add to a collective symphony of creativity and ideas. In the end, achieving harmony is necessary to build a society in which people, communities, and ecosystems all flourish in harmonious, interdependent cohabitation.</p>`;
        // Set class and inner HTML for the article
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        // Append the article to the body
        DocumentBody.appendChild(Article);

        // Add the slideshow container
        let slideshowContainer = document.createElement("div");
        slideshowContainer.setAttribute("class", "slideshow-container");

        // Create slides and add them to the slideshow container
        let slide1 = document.createElement("div");
        slide1.setAttribute("class", "mySlides fade");
        slide1.innerHTML = `<img src="../images/harmony1.jpg" alt="Slide 1">`;
        slideshowContainer.appendChild(slide1);

        let slide2 = document.createElement("div");
        slide2.setAttribute("class", "mySlides fade");
        slide2.innerHTML = `<img src="../images/harmony2.jpg" alt="Slide 2">`;
        slideshowContainer.appendChild(slide2);

        let slide3 = document.createElement("div");
        slide2.setAttribute("class", "mySlides fade");
        slide2.innerHTML = `<img src="../images/harmony3.jpg" alt="Slide 3">`;
        slideshowContainer.appendChild(slide3);

        let slide4 = document.createElement("div");
        slide2.setAttribute("class", "mySlides fade");
        slide2.innerHTML = `<img src="../images/harmony4.jpeg" alt="Slide 4">`;
        slideshowContainer.appendChild(slide4);

        let slide5 = document.createElement("div");
        slide2.setAttribute("class", "mySlides fade");
        slide2.innerHTML = `<img src="../images/harmony5.jpg" alt="Slide 5">`;
        slideshowContainer.appendChild(slide5);

        // Navigation dots
        let dotsContainer = document.createElement("div");
        dotsContainer.style.textAlign = "center";
    }
    // Function to display the portfolio page content
    function DisplayPortfolioPage(){
        console.log("Called DisplayPortfolioPage()");

        // Load more Projects
        const newProjects = [
            {
                // This image is from https://appadvice.com/app/analyzer/454225351
                image: "./images/python_project.jpg",
                title: " DataAnalyzer",
                description: "Develop a Python script that automates the process of analyzing and visualizing large datasets. The script could perform tasks such as data cleaning, statistical analysis, and generate visualizations using popular libraries like pandas, NumPy, and Matplotlib.",
            },
            {
                // This image is from https://appadvice.com/app/realtime-inventory-management/6448918008
                image: "./images/java_project.jpg",
                title: "InventorySystem",
                description: "Create a Java-based inventory management system for tracking products in a warehouse or retail store. The system could include features like adding new products, updating quantities, generating reports, and managing stock levels. Utilize Java Swing or JavaFX for the user interface.",
            },
            {
                // This image is from https://appadvice.com/app/task-master-app/1516532554
                image: "./images/cs_project.jpg",
                title: "TaskMaster",
                description: " Build a C# application for managing tasks and projects collaboratively. Users can create tasks, assign them to team members, set deadlines, and track progress. Implement features for real-time updates, notifications, and user authentication. Utilize technologies like ASP.NET Core for the backend and Blazor for the frontend.",
            },
        ];

        // Get the project container
        const projectContainer = document.getElementById("project-container");
        // Loop through the new projects and create HTML for each
        newProjects.forEach(function (project) {
            const newProjectCard = document.createElement("div");
            newProjectCard.className = "project-card";
            // Set inner HTML for the new project card
            newProjectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-card-content">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                </div>
            `;
            // Append the new project card to the project container
            projectContainer.appendChild(newProjectCard);
        });
        // Load initial projects
        loadProjects(0, projectsPerPage);
    }
    // Function to display the services page content
    function DisplayServicesPage(){
        console.log("Called DisplayServicesPage()");

    }
    // Function to display the team page content
    function DisplayTeamPage(){
        console.log("Called DisplayTeamPage()");

        $(document).ready(function() {
            // Close modal when clicking outside the modal content
            $('.modal').on('click', function (e) {
                if (e.target !== this) return;
                $(this).modal('hide');
            });

            // Close modal when the close button is clicked
            $('.modal .close').on('click', function() {
                $(this).closest('.modal').modal('hide');
            });

            // Close modal when the overlay is clicked
            $(document).on('click', '.modal-backdrop', function() {
                $('.modal').modal('hide');
            });
        });
    }
    // Function to display the blog page content
    function DisplayBlogPage(){
        console.log("Called DisplayBlogPage()");


        // Find the link element by its id
        const blogLink = document.getElementById('blogLink');

        // Check if the link element is found
        if (blogLink) {
            // Change the link text
            blogLink.innerText = 'News';
        }

    }

    // Event listener for window load to start the application
    window.addEventListener("load", Start);

    let slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        slideIndex += n;
        let slides = document.getElementsByClassName("mySlides");

        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        showSlides();
    }

    function showSlides() {
        let i;

        let slides = document.getElementsByClassName("mySlides");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000);
    }
    // Data for initial and new projects
    const projectsData = [
        { title: 'Python Project', description: 'In this project, Python can be used to automate various tasks related to a clothing website. Using web scraping libraries like BeautifulSoup or Selenium, you can extract information such as product details, prices, and availability. Additionally, automation scripts can be developed to perform actions like navigating through pages, adding items to the shopping cart, and even completing the checkout process. This can streamline repetitive tasks, save time, and ensure accuracy in managing the website\'s content and functionality\n', image: 'python_project.png' },
        { title: 'Java Project', description: 'Making a user-friendly application for monitoring and registering patients in a veterinary clinic is the goal of a Java project on patient registration for veterinary clinics. A graphical user interface (GUI) that enables clinic personnel to enter and maintain patient data, such as medical history, immunization records, and owner information, can be created using the Java programming language. In order to improve clinic management, the program may additionally provide features for looking up patient records, changing data, and producing reports\n', image: 'java_project.png' },
        { title: 'C# Project', description: 'Using C# and WPF to develop a weather quiz project entails building an interactive quiz application with a graphical user interface. Making use of the WPF framework makes for an aesthetically pleasing design. The program may show current weather data from internet sources by utilizing a browser component. After that, users can respond to quiz questions about the state of the weather, how to understand forecasts, and general meteorological information. To improve user learning, the project can include features like score tracking, interactive feedback, and a dynamic quiz material distribution system\n', image: 'csharp_project.jpg' },
    ];

    // Variables for project container, load more button, and projects per page
    let projectsContainer = document.getElementById('projects-container');
    let loadMoreBtn = document.getElementById('load-more-btn');
    const projectsPerPage = 3; // Number of projects to load per click
    let currentPage = 1;

    // Function to load projects based on start and end index
    function loadProjects(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex; i++) {
            let project = projectsData[i];
            let projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            let img = document.createElement('img');
            img.src = project.image;
            projectCard.appendChild(img);

            let projectCardContent = document.createElement('div');
            projectCardContent.className = 'project-card-content';

            let title = document.createElement('h3');
            title.innerText = project.title;

            let description = document.createElement('p');
            description.innerText = project.description;

            projectCardContent.appendChild(title);
            projectCardContent.appendChild(description);
            projectCard.appendChild(projectCardContent);

            projectsContainer.appendChild(projectCard);
        }
    }

    // Function to toggle the load more button based on projects count
    function toggleLoadMoreButton() {
        if (currentPage * projectsPerPage >= projectsData.length) {
            loadMoreBtn.disabled = true;
            loadMoreBtn.innerText = 'Show Less';
        } else {
            loadMoreBtn.disabled = false;
            loadMoreBtn.innerText = 'Load More';
        }
    }

    // Function to load more projects on button click
    function loadMoreProjects() {
        let startIndex = (currentPage - 1) * projectsPerPage;
        let endIndex = startIndex + projectsPerPage;

        projectsContainer.innerHTML = '';

        if (startIndex < projectsData.length) {
            loadProjects(startIndex, endIndex);
            currentPage++;
        } else {
            currentPage = 1;
            loadProjects(0, projectsPerPage);
        }
        toggleLoadMoreButton();
    }
    // Button
    loadMoreBtn.addEventListener('click', loadMoreProjects);

    // initial load
    loadMoreProjects();

    // Toggle load more button initially
    toggleLoadMoreButton();


    // Runs on login page
    function DisplayLoginPage() {

        console.log("Called DisplayLoginPage()");

        // Hides the message used to display login error
        let messageArea = $("#messageArea");
        messageArea.hide();

        // Click event listener for login
        $("#loginButton").on("click", function() {
            // Initializes a success variable for login success and creates a new User instance
            let success = false;
            let newUser = new core.User();

            // Fetches user data from a JSON file
            $.get("./data/users.json", function(data) {

                for (const user of data.users) {
                    //  User's data for debugging
                    console.log(data.user); // For logging error purposes

                    // Checks if the entered username and password match a user's input
                    if (username.value === user.Username && password.value === user.Password) {
                        // Initializes the newUser object with the matching user's data
                        newUser.fromJSON(user);
                        // Sets the success to true and exits loop
                        success = true;
                        break;
                    }
                }
                // Handles login attempt
                if (success) {
                    // Suceffully stores the user data in sessionStorage and redirects to the homepage
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();

                    location.href = "index.html";
                } else {
                    // On failure shows an error
                    $("#username").trigger("focus").trigger("select");
                    messageArea
                        .addClass("alert alert-danger")
                        .text("Error: Invalid Credentials")
                        .show();
                }
            });
        });
    }


    // Ajax Request
    function AjaxRequest(method, url, callback) {
        // Step 1: Instantiate new XHR object
        let XHR = new XMLHttpRequest();

        // Step 2: Open XHR request
        XHR.open(method, url);

        // Step 4: Add even listener for the readystatechange event
        // The readystatechange event is triggered when the state of a document being fetched changes
        XHR.addEventListener("readystatechange", () => {
            if(XHR.readyState === 4  && XHR.status === 200) {
                if(typeof callback == "function"){
                    callback(XHR.responseText);
                }else {
                    console.error("ERROR: callback not a function");
                }
            }

        });
        // Step 3: Send XHR Request
        XHR.send();

    }

    // This is to check if the user is logged in.
    function CheckLogin(){

        // This is to determine if the user is logged in by checking the presence of user data
        if (sessionStorage.getItem("user")){
            $("#login").html(`<a id ="logout" class="nav-link" href="#"> Logout</i></a>`)
        }
        $("#logout").on("click", function(){
            // When the logout is clicked it will clear all data stored in sessionStorage and go to home page.
            sessionStorage.clear();
            location.href= "index.html";
        });
    }

    // This is a load header
    function LoadHeader(html_data) {
        // Inject the HTML data received as parameter into the header

        $("header").html(html_data);

        // Highlight link in the navigation that matches the current page's title

        $(`li>a:contains(${document.title})`).addClass("active").attr("aria-current", "page");

        // Check if the user is logged in and update the login to logout using function

        CheckLogin();
    }
    // Uses regex to validate what can be allowed on the text space and passes in the input_field_id, regular_expression, error_message
    function RegisterFormValidation() {
        // fullName
        ValidateField("#fullName", /^([A-Z][a-zA-Z'’-]+)(\s[A-Z][a-zA-Z'’-]*)*(\s[A-Z][a-zA-Z'’-]+)$/, "Please Enter a Valid Full Name");


        //contactNumber
        ValidateField("#contactNumber", /^(\+\d{1,3}[\s-.])?\(?\d{3}\)?[\s-.]?\d{3}[\s-.]\d{4}$/, "Please Enter a Valid Contact Number");

        //emailAddress
        ValidateField("#emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,10}$/, "Please Enter a Email Address");

        //Validate Address
        ValidateField("#address",/^[a-zA-Z0-9\s.'-]{2,}$/, "Please enter a valid address");

        //Validate Password 6 characters only
        ValidateField("#password",/^.{6}$/, "Please enter a valid password.");

        //Validate Username 8 characters only
        ValidateField("#userName",/^[a-zA-Z0-9]{8}$/, "Please enter a valid username");
    }


    /**
     * validate form field
     * @param input_field_id
     * @param regular_expression
     * @param error_message
     * @constructor
     **/


    function ValidateField(input_field_id, regular_expression, error_message) {

        let messageArea = $("#messageArea").hide();


        $(input_field_id).on("blur", function () {
            let inputFieldText = $(this).val();
            if(!regular_expression.test(inputFieldText)) {
                // full name foes not success pattern matching
                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }else{
                // full name is successful
                messageArea.removeAttr("class").hide();
            }
        });
    }
    // Display the register page, console fo errors
    function DisplayRegisterPage() {
        console.log("Called DisplayRegisterPage()");
        // This function to validate registration

        RegisterFormValidation();

    }


    // Function called to display the events page
    function DisplayEventsPage() {
        console.log("Called DisplayEventsPage()");

        // Calls a function to fetch and display news
        fetchNews()
        $(document).ready(function() {
            //AJAX request to fetch event data from a events JSON file
            $.ajax({
                url: './data/events.json',
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    // On success, calls a function to display the events
                    displayEvents(data.events);
                },
                // When there is an error displays an error message
                error: function() {
                    $('#events-list').html('<p>Events could not be loaded.</p>');
                }
            });
        });


    }
    // Function to display event data on the page
    function displayEvents(events) {

        let eventsHtml = '';
        events.forEach(function(event) {
            eventsHtml += `<div class="event">
            <h2>${event.name}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
        </div>`;
        });
        //HTML content into the events list container
        $('#events-list').html(eventsHtml);
    }

    // Function to fetch news data from an API
    function fetchNews() {

        // API key and URL setup for the news API
        let apiKey = '3bb9d2ddcb064382b70b5495ba20a488';
        let url = `http://newsapi.org/v2/top-headlines/sources?country=ca&apiKey=${apiKey}`;

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            // Checks if the request was successful
            if (xhr.status >= 200 && xhr.status < 300) {
                let response = JSON.parse(xhr.responseText);
                if (response.status === "ok") {
                    displayNews(response);
                } else {
                    console.error("The request failed");
                    $("#news-container").html(`<p>Failed to retrieve news data: ${response.message}</p>`);
                }
            } else {
                console.error("The request failed");
                $("#news-container").html(`<p>Failed to retrieve data</p>`);
            }
        };
        //Sends the request
        xhr.send();
    }

    // Function to display news data on the page
    function displayNews(data) {
        let newsContainer = $("#news-container");
        let htmlContent = `<h2>News Sources</h2>`;
        data.sources.forEach(source => {
            //appends its details to 'htmlContent'
            htmlContent += `<p><a href="${source.url}" target="_blank">${source.name}</a>: ${source.description}</p>`;
        });
        // Inserts the content into the news container
        newsContainer.html(htmlContent);
    }
    /**
     *
     * @param fullName
     * @param contactNumber
     * @param message
     * @constructor
     */
    function AddContact(fullName, contactNumber, message) {
        let contact = new core.Contact(fullName, contactNumber, message);
        if(contact.serialize()){
            let key = contact._fullName.substring(0, 1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }

    function DisplayContactListPage(){
        console.log("Called DisplayContactListPage()");

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys) {
                let contact = new core.Contact();
                let contactData = localStorage.getItem(key);

                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                            <td>${contact.fullName}</td>
                            <td>${contact.contactNumber}</td>
                            <td>${contact.message}</td>
                            <td class="text-center">
                                                    
                            </td>
                            <td>
                                <button value="${key}" class="btn btn-danger btn-sm delete">
                                    <i class="fas fa-edit fa-sm"> Delete</i>
                                </button> 
                            </td>
                          </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }


        $("button.delete").on("click", function() {
            if(confirm("Please confirm contact deletion?")){
                localStorage.removeItem($(this).val())
            }
            location.href = "contact-list.html";
        });



    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage()");
        RegisterFormValidation();



        let sendButton = document.getElementById("submit");
        let subscribeButton = document.getElementById("subscribeCheckBox");

        sendButton.addEventListener("click", function(){
            if(subscribeButton.checked){
                AddContact(fullName.value, contactNumber.value, message.value);
            }
        });
    }






    // Function to start the application based on the page title
    function Start(){
        console.log("App Started");
        AjaxRequest("GET", "header.html", LoadHeader);
        switch(document.title){
            case "Harmony Hub":
                DisplayHomePage();
                break;
            case "Portfolio":
                DisplayPortfolioPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayTeamPage();
                break;
            case "News":
                DisplayBlogPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
            case "Events":
                DisplayEventsPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
            case "Contact Page":
                DisplayContactPage();
                break;
        }
    }

})();


