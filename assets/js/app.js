//JQuery Module Pattern
"use strict";

// An object literal
const app = {
  init() {
    app.functionOne();
  },
  functionOne() {
  }
};

$("document").ready(() => {
  app.init();
});

$(document).ready(function(){
  $('[data-toggle="tooltip1"]').tooltip();
  $('[data-toggle="tooltip2"]').tooltip();   
  $('[data-toggle="tooltip3"]').tooltip();   
});