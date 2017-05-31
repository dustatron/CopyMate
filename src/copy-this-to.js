const electron = require('electron');
const fs = require('fs');
const {dialog} = require("electron").remote;
const Rsync = require('rsync');


window.onload=function(){

const View = function(controllers) {
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
        saveSource = filename[0];
        console.log("source = " + saveSource + "type = " + typeof saveSource[0]);
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
        saveOne = filename[0];
        console.log("desination 1 = " + saveOne);
        destinationOneReadout.innerHTML = saveOne;
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
        saveTwo = filename[0];
        console.log(typeof saveTwo);
        destinationTwoReadout.innerHTML = saveTwo;
      }
    });
  }); //END destinationTwo Click

  saveAction.addEventListener('click', ()=> {
    let destinations = [saveOne, saveTwo]
    controllers.copyJob(saveSource, destinations);

  }); //END saveAciton

}; // END VIEW FUNCTION

const Controller = function() {

  this.test = function(source, destination) {
    return console.log("Here is Source = "+source+ "\n\nHere is destination one = "+one+
    "\n\n\ Here is destination two = "+ two);
  }; //END test

  this.copyJob = (Source, destination)=> {
    let sourceLocation = Source;
    let destinationArray = destination;
    console.log(destinationArray);

    destinationArray.forEach(function(goTo) {
      let rsync = Rsync.build({
        source:      sourceLocation,
        destination: goTo,
        exclude:     ['.git'],
        flags:       'a',
        shell:       'ssh'
      });
      rsync.execute(function(error, stdout, stderr) {
          if(error != null){
            console.log("Start error! = "+error);
          } else if(stderr != null) {
            console.log("stderr = " + stderr)
          } else {
            console.log(stdout);
          };
      });

    });//END anonymous function


  //https://github.com/mattijs/node-rsync
  };//END copyJob

}; //END Controller



const start = function() {
  let controllers = new Controller();
   let views = new View(controllers);

}();


};
