"use strict";


// IIFE = IMEDIATLY INVOKED FUNCTIONAL EXPRESSION

(function(){

    function DisplayHomePage(){
        console.log("called DisplayHomePage")

       let AboutUsButton = document.getElementById("AboutUsBtn");

        AboutUsButton.addEventListener("click", function(){
           location.href ="about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id", "Main Paragraph");
        MainParagraph.setAttribute("class", "nt-3");
        MainParagraph.textContent = "This is the Main Paragraph!";
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the Main paragraph`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        let article = document.createElement("article");
        let ArticleParagraph =`<p id ="ArticleParagraph" class="mt-3">This is my article Paragraph</p>`;

        article.setAttribute("class", "container");
        article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(article);


    }

    function DisplayAboutPage(){
        console.log("called DisplayAboutPage")
    }


    function DisplayProductPage(){
        console.log("called DisplayProductPage")
    }

    function DisplayServicePage(){
        console.log("called DisplayServicePage")
    }

    function DisplayContactPage(){
        console.log("called DisplayContactPage")
    }


    function Start(){
        console.log("app Started");

        switch(document.title){
            case "Home Page":
            DisplayHomePage();
                break;
            case"Product Page":
            DisplayProductPage();
                break;
            case"Service page" :
                DisplayServicePage();
                break;
            case"Contact Me":
                DisplayContactPage();
                break;
            case"About Us":
                DisplayAboutPage();
                break;

        }
    }
    window.addEventListener( "load", Start);
})();