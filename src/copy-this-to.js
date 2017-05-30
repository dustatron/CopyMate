const electron = require('electron');
const fs = require('fs');
const path = require('path');
const {dialog} = require("electron").remote;


window.onload=function(){
  document.getElementById('source-button').addEventListener('click',()=>{
    console.log('click');

    dialog.showOpenDialog({'properties': ['openDirectory']},(filename) => {
      if(filename === undefined){
        console.log("filename error");
        return;
      }
      console.log(filename);
    })
  })


  // var source = document.getElementById('source-folder');
  //
  // var start = document.getElementById('start-button')
  //


}
