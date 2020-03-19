let listlength=3;
$(".add").click( function(){
var Name = $(".name").val();
var Artist = $(".artist").val();
var link = $(".link").val();
var img = $(".image").val();
var time = $(".time").val();

//come back and finsh
$(".playlist").apped("<div class='flex song'> <img src'"+img+"'> <p>"+name+"</p> <p>"+artist+
"</p> <p>"+time+"</p> <a href='"+link+"'>Listen});
let song1 = {
name:"Bad Guy",
artist:"Bille Eilish",
image:"https://media.npr.org/assets/img/2019/12/09/gettyimages-1175567702-c01e78852dfdfe16fa80bde33bb68237f4887ac0-s1300-c85.jpg",
link: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
time: "3:15"
};
let song2 = {
name:"Yummy",
artist:"Justin Bieber",
image:"https://specials-images.forbesimg.com/imageserve/5e6678307d6f2600068f0774/960x0.jpg?fit=scale",
link: "https://www.youtube.com/watch?v=8EJ3zbKTWQ8",
time: "3:35"
};
let song3 = {
name:"Life is Good",
artist:"Drake ft future",
image:"https://cdn.cnn.com/cnnnext/dam/assets/200110075435-01-drake-future-file-exlarge-169.jpg",
link: "https://www.youtube.com/watch?v=l0U7SxXHkPY",
time: "5:15"
};
let Default= {song1,song2,song3};
Default.forEach(function(song){
$(".playlist").append("<div class'flex song'><img src='"+song.image+"'><p>"+song.name+"</p> <p>"+song.artist+"</p>q")
});
