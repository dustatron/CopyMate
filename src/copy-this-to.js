const electron = require('electron');
const fs = require('fs');
const {dialog} = require("electron").remote;


window.onload=function(){

const View = function(Controls) {
  // --- buttons
  let source = document.getElementById('source-button');
  let destinationOne = document.getElementById('destination-one');
  let destinationTwo = document.getElementById('destination-two');
  let saveAction = document.getElementById('start-button');

  // ---- write to document span tags

  let sourceReadout = document.getElementById('source-read-out');
  let destinationOneReadout = document.getElementById('destination-one-readout');
  let destinationTwoReadout = document.getElementById('destination-two-readout');


  let saveSource;
  let saveOne;
  let saveTwo;

  let that = this;

  //--- click listeners

  source.addEventListener('click',()=> {
    console.log('source click');

    dialog.showOpenDialog({'properties': ['openDirectory']},(filename) => {
      if(filename === undefined){
        console.log("filename error");
        return;
      } else {
        saveSource = filename;
        console.log("source = " + saveSource);
        sourceReadout.innerHTML = saveSource;
      }
    });
  }); //END SOURCE CLICK

  destinationOne.addEventListener('click', ()=> {
    console.log('destination 1 click');

    dialog.showOpenDialog({'properties': ['openDirectory']},(filename) => {
      if(filename === undefined){
        console.log("filename error");
        return;
      } else {
        saveOne = filename;
        console.log("desination 1 = " + saveOne);
        destinationOneReadout.innerHTML = filename;
      }
    });
  }); //END destinationOne Click

  destinationTwo.addEventListener('click', ()=> {
    console.log('destination 1 click');

    dialog.showOpenDialog({'properties': ['openDirectory']},(filename) => {
      if(filename === undefined){
        console.log("filename error");
        return;
      } else {
        saveTwo = filename;
        console.log("desination 1 = " + saveTwo);
        destinationTwoReadout.innerHTML = filename;
      }
    });
  }); //END destinationTwo Click

  saveAction.addEventListener('click', ()=> {
    Controls.testing(saveSource);

  }); //END saveAciton

}; // END VIEW FUNCTION

const Controller = function(views) {

  this.testing = (first, second, third)=> {
    console.log("first "+ first);
  };
}



const start = function() {
  let controllers = new Controller();
   let views = new View();

}();

  // var source = document.getElementById('source-folder');
  //
  // var start = document.getElementById('start-button')
  //


}
