
var list= $('li.hot') //.hide();
console.log(list);
$("li.hot").css("color", "red") //.text(1);
$("li.cold").css("color", "blue") .hide() .fadeIn(5000);

console.log($('li:first-child').before("<li>Football</li>"));