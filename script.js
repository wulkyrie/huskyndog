var api_start = 'https://dog.ceo/api';
var breed_start = 'https://dog.ceo/api/breed/';
var randomimages = '/breeds/image/random';
var breedlist = '/breeds/list/all';
var breedend = '/images/random';



//''''''''''''''''''''''''''''''''First''''''''''''''''''''''''''''''''''
function polinitialize() {

  $.ajax({
    url: api_start + "/breed/husky/images/random",
    dataType: 'json',
    success: function(data) {
      createHuskyimage(data);
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  });

  $.ajax({
    url: api_start + "/breed/pug/images/random",
    dataType: 'json',
    success: function(data) {
      createPugimage(data);
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  })


};
function createHuskyimage(data) {
    var pol_left = $(`<div class='pol_left'><img src='${data.message}'  width="260" /> </div>`);
    $(".polaroid_left").html(pol_left);
};
function createPugimage(data) {
    var pol_right = $(`<div class='pol_right'><img src='${data.message}'  width="260" /> </div>`);
    $(".polaroid_right").html(pol_right);
};
polinitialize();



  var huskynpug = function(){
 console.log("im running");
 $.ajax({
   url: api_start + "/breed/husky/images/random",
   dataType: 'json',
   success: function(data) {
     createHuskyimage(data);
     console.log(data);
   }});
   $.ajax({
     url: api_start + "/breed/pug/images/random",
     dataType: 'json',
     success: function(data) {
       createPugimage(data);
       console.log(data);
     },
     error: function(error) {
       console.log(error);
     }
   });
   setTimeout(function(){
     tl.restart();
     tl.stop();}, 1500);
 };
// var pug = function(){
//  $.ajax({
//    url: api_start + "/breed/pug/images/random",
//    dataType: 'json',
//    success: function(data) {
//      createPugimage(data);
//      console.log(data);
//    },
//    error: function(error) {
//      console.log(error);
//    }
//  })
// };
var tl = new TimelineMax({});
tl.to($(".polaroid.rotate_left"), 1, {x: 250, opacity: 0, ease: Expo.easeOut});
tl.to($(".polaroid.rotate_right"), 1, {x: -200, opacity: 0, ease: Expo.easeOut, onComplete:huskynpug}, "-=0.9");
tl.stop();

$(".more").on("click", function(){

  tl.play();
});

// $(".random").on("click", function(){
//   tl_outro.play();
//   runAjax();
// });



  // Run the ajax call, get the image, store it somewhere but don't show it

  // 1. Greensock animation first
  // 2. tl_outro.to($(".images2"), 1, {y: -10, opacity: 1, onComplete: runAjax}, "-=0.7");
  // 3. Run function with AJAX call


  var runAjax = function(){
    $.ajax({
      url: api_start + randomimages,
      success: function(data){
        createImages(data);
        console.log(data);
      },
    });

    setTimeout(function(){
      tl_outro.restart();
      tl_outro.stop();}, 1500);
    // setTimeout(function(){
    //   tl_in.play();
    // tl_outro.stop();}, 4500);
  };

function createImages(data) {
    var image = $(`<div class='image'><img src='${data.message}' height="400px" /> </div>`);
    var image2 = $(`<div class='image'><img src='${data.message}' height="250px" /> </div>`);
    $(".images").html(image);
    $(".images2").html(image2);

};

var tl_outro = new TimelineMax({});
tl_outro.to($(".images"), 1, {y: -20, opacity: 0, ease: Bounce.easeOut});
tl_outro.to($(".images2"), 1, {y: -20, opacity: 0, ease: Expo.easeOut, onComplete:tl_in}, "-=0.7");
tl_outro.stop();

var tl_in = new TimelineMax({});
tl_in.from($(".images"), 1, {y: -20, opacity: 1, ease: Bounce.easeOut});
tl_in.from($(".images2"), 1, {y: -20, opacity: 1, ease: Expo.easeOut}, "-=0.7");
tl_in.stop();



$(".random").on("click", function(){
  tl_outro.play();
  runAjax();
});






function initialize() {
  $.ajax({
    url: api_start + breedlist,
    dataType: 'json',
    success: function(data) {
      createList(data);
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  })
};

initialize();

function createList(data) {

  for(key in data.message) {
    console.log(key);
    var dogname = $(`<option value='${key}'>${key}</option>`);

    $(".puplist").append(dogname);
  }

};

var selectedog;
 // var luckypuppy = dogname;

$(".puplist").change(function(){
  console.log("I changed value");
  selectedog = $(".puplist").children("option:selected").val();
  console.log(selectedog);
});



$(".breedo").click(function(){
 console.log("im running");
  $.ajax({
    url: breed_start + selectedog + breedend,
    success: function(dogname){
      createImages(dogname);
      console.log(dogname);
    },
  })
});


// **************************BUTTON**************************

var $button2 = document.querySelector('.button2');
$button2.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button2, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button2, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button2, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});



// jQuery onchange onselect
// Get the value
// Running a function to call the api with the value selected





// function initialize(){
//
// $.ajax({
//   url: api_start+,
//   dataType: 'json',
//   success: function(data) {
// createPosts(data);
//   },
//   error: function(data) {
//     console.log(error);
//   }
// })
// }
// initialize();
// function createPosts(data){
//   for(i=0; i<data.length; i++) {



// $('select[data-source]').each(function() {
//   var $select = $(this);
//
//   $select.append('<option></option>');
//
//   $.ajax({
//     url: $select.attr('data-source'),
//   }).then(function(options) {
//     options.map(function(option) {
//       var $option = $('<option>');
//
//       $option
//         .val(option[$select.attr('data-valueKey')])
//         .text(option[$select.attr('data-displayKey')]);
//
//       $select.append($option);
//     });
//   });
// });
