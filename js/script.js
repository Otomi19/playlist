
$(".add").click( function(){
var Name = $("#Namee").val();
var Artist = $("#Artiste").val();
var link = $("#Linke").val();
var img = $("#Imagee").val();
var time = $("#Lenghte").val();
$(".main").append("<div class='main'> <img src='"+img+"'> <p>"+Name+"</p> <p>"+Artist+"</p> <p>"+time+"</p> <a href='"+link+"'>Listen</a></div>");
});
//come back and finsh

let song1 = {
Name:"Bad Guy",
Artist:"Bille Eilish",
img:"https://media.npr.org/assets/img/2019/12/09/gettyimages-1175567702-c01e78852dfdfe16fa80bde33bb68237f4887ac0-s1300-c85.jpg",
link: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
time: "3:15"
};
let song2 = {
Name:"Yummy",
Artist:"Justin Bieber",
img:"https://specials-images.forbesimg.com/imageserve/5e6678307d6f2600068f0774/960x0.jpg?fit=scale",
link: "https://www.youtube.com/watch?v=8EJ3zbKTWQ8",
time: "3:35"
};
let song3 = {
Name:"Life is Good",
Artist:"Drake ft future",
img:"https://cdn.cnn.com/cnnnext/dam/assets/200110075435-01-drake-future-file-exlarge-169.jpg",
link: "https://www.youtube.com/watch?v=l0U7SxXHkPY",
time: "5:15"
};
let Playlist= [song1,song2,song3];
Playlist.forEach(function(song){
$(".main").append("<div class='main'> <img src='"+song.img+"'> <p>"+song.Name+"</p> <p>"+song.Artist+"</p> <p>"+song.time+"</p> <a href='"+song.link+"'>Listen</a></div>");  
});
