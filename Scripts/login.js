"use strict";

(function(){

    function CheckLogin(){
        if (sessionStorage.getItem("user")){
            $("#login").html(`<a id ="logout" class="nav-link" href="#"><i class="fa fa-sign-in-alt"> Logout</i></a>`)
        }
        $("#logout").on("click", function(){
            sessionStorage.clear();
            location.href= "login.html";
        });
    }





})();