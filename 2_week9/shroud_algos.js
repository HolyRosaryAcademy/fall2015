// we'll store our Shroud data in this Javascript object first
var binaryRawData = '';

// now we'll set up some arrays we'll need to store and parse our data about the Shroud

var charactersArray = [];
var binaryArray = [];
var array2 = [];
var searchTerms =  ['heaven', 'resurrection', 'jesus'];
var bibleNotation = ['1.3', '23.1', '14.8'];


// here we use a call to get the text file which has the code behind the image file in a text format

$.ajax({
  url: 'https://raw.githubusercontent.com/HolyRosaryAcademy/fall2015/master/2_week9/txts/1.txt',
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
    createBinaryArray();
   },
   error: function () {
       console.log('sorry, could not get your Shroud text');
   }
});

function createBinaryArray() {
// we have to split this large chunk of text into an array of individual character sets
 binaryArray =  binaryRawData.split(" ");
 // now we are ready to check the characters for 0s and 1s
 parseBinaryArray();
}

function parseBinaryArray() {
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
    console.log('our final array is '+array2);
    console.save(array2)
   }
 });

}