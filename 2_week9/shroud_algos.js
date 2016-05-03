// we'll store our Shroud data in the binaryRawData variable
var binaryRawData = '';

// now we'll set up some arrays we'll need to store and parse our data about the Shroud

var charactersArray = [];
var binaryArray = [];
var array2 = [];
var searchTerms =  ['heaven', 'resurrection', 'jesus'];
var bibleNotation = ['1.3', '23.1', '14.8'];
var fileNumber = '1';
var fileNumberArray = _.range([start=1], 20, [step=1]);

$(document).ready(function($){
  $("#codeblock1").codeblock();
  // when our document is loaded, add this action to the first button
  $('#btn1').click(function(){
    runFile(fileNumber);
  });
  // when our document is loaded, add this action to the second button
  $('#btn2').click(function(){
    // loop through EACH of the numbers between 1 and 20 in our fileNumberArray, and extract binary code for that file
    $.each(fileNumberArray,function(index, value){
      setTimeout(function(){
        runFile(value);
      }, 300);
    })
  });  
});

function runFile(file) {
// here we use a call to get the text file which has the code behind the image file in a text format

$.ajax({
  url: 'https://raw.githubusercontent.com/HolyRosaryAcademy/fall2015/master/2_week9/txts/'+file+'.txt',
  type: 'GET',
  dataType: 'text',
   success: function (res) {
 
     console.log('ok, i got your Shroud text!');
      // save this text data to our binaryRawData object
         binaryRawData = res;
     // running the console statement below is so large it will break JSBin, so we'll hide it for now
    // console.log('our binaryRawData is now '+binaryRawData); 
     
     // now let's run our first algorithm against this data!!!
     
     // Algorithm #1:  createBinaryArray
     
     // here we are just going to cycle through every character in this data and look for pairs of 00, 10, or 01. If you find such a pair, push it into our binaryArray.
    createBinaryArray(file);
   },
   error: function () {
       console.log('sorry, could not get your Shroud text');
   }
});
}; // end runFile() function

function createBinaryArray(file) {
// we have to split this large chunk of text into an array of individual character sets
 binaryArray =  binaryRawData.split(" ");
 // now we are ready to check the characters for 0s and 1s
 parseBinaryArray(file);
}

function parseBinaryArray(file) {
    // this is a simple loop, using the Javascript helper library known as jQuery. It creates a LOOP for us, looping over the binaryRawData data and adding each individual character that is a 1 or a 0 to an ordered array, 
 $.each(binaryArray, function(index, value){

  if (value == '00' || value == '01' || value == '10' || value =='11') {
    array2.push(value);
  }
   // let's take a look at the data in our console, just the first 10 so we don't run into memory problems!
   if (index < 10) {
   console.log('my index is '+index);
   console.log('my value is '+value);
   }
 
   if (index == (binaryArray.length-1)) {
   // console.log('our final array is '+array2);
    var result = JSON.stringify(array2.join(''))
    result = result.replace(/"/g, '');
    console.save(result, 'shroud_binary_'+file+'.txt')
   }
 });

}