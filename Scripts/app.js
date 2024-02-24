"use strict";

// IIFE = IMEDIATLY INVOKED FUNCTIONAL EXPRESSION

(function(){
    function Start(){
        console.log("app Sarted");
    }
    window.addEventListener( "Load", Start);
})();